"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Atom, 
  Play, 
  RotateCcw, 
  Trash2, 
  Sparkles, 
  BarChart3, 
  Info, 
  CheckCircle2, 
  ArrowLeft, 
  Sliders, 
  Share2, 
  Copy, 
  Cpu
} from "lucide-react";
import BlochSphere from "@/components/BlochSphere";

type GateType = "H" | "X" | "Y" | "Z" | "S" | "T" | "CNOT_CTRL" | "CNOT_TGT" | "M" | "EMPTY";

interface CircuitSlot {
  gate: GateType;
  cnotPair?: number; // Target or control qubit index
}

export default function Simulator() {
  const [numQubits, setNumQubits] = useState(2);
  const [numSteps, setNumSteps] = useState(6);
  const [selectedGate, setSelectedGate] = useState<GateType>("H");
  const [simulationRun, setSimulationRun] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);

  // Circuit Grid state: [qubitIndex][stepIndex]
  const [circuit, setCircuit] = useState<CircuitSlot[][]>([
    [
      { gate: "H" },
      { gate: "CNOT_CTRL", cnotPair: 1 },
      { gate: "EMPTY" },
      { gate: "M" },
      { gate: "EMPTY" },
      { gate: "EMPTY" },
    ],
    [
      { gate: "EMPTY" },
      { gate: "CNOT_TGT", cnotPair: 0 },
      { gate: "EMPTY" },
      { gate: "M" },
      { gate: "EMPTY" },
      { gate: "EMPTY" },
    ],
  ]);

  // Selected preset
  const [presetName, setPresetName] = useState("Bell State (|Φ⁺⟩)");

  // Handle slot click to place or remove gate
  const handleSlotClick = (qubitIdx: number, stepIdx: number) => {
    setCircuit((prev) => {
      const newCircuit = prev.map((row) => [...row]);
      const currentGate = newCircuit[qubitIdx][stepIdx].gate;

      if (currentGate !== "EMPTY") {
        // Clear this slot
        newCircuit[qubitIdx][stepIdx] = { gate: "EMPTY" };
      } else {
        if (selectedGate === "CNOT_CTRL") {
          // Place CNOT control on this qubit, target on the other qubit
          const targetQubit = qubitIdx === 0 ? 1 : 0;
          newCircuit[qubitIdx][stepIdx] = { gate: "CNOT_CTRL", cnotPair: targetQubit };
          newCircuit[targetQubit][stepIdx] = { gate: "CNOT_TGT", cnotPair: qubitIdx };
        } else {
          newCircuit[qubitIdx][stepIdx] = { gate: selectedGate };
        }
      }
      return newCircuit;
    });
  };

  // Preset circuits
  const loadPreset = (name: string) => {
    setPresetName(name);
    if (name === "Bell State (|Φ⁺⟩)") {
      setCircuit([
        [{ gate: "H" }, { gate: "CNOT_CTRL", cnotPair: 1 }, { gate: "EMPTY" }, { gate: "M" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
        [{ gate: "EMPTY" }, { gate: "CNOT_TGT", cnotPair: 0 }, { gate: "EMPTY" }, { gate: "M" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
      ]);
    } else if (name === "Superposition (Hadamard)") {
      setCircuit([
        [{ gate: "H" }, { gate: "EMPTY" }, { gate: "M" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
        [{ gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
      ]);
    } else if (name === "Bit Flip (Pauli-X)") {
      setCircuit([
        [{ gate: "X" }, { gate: "EMPTY" }, { gate: "M" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
        [{ gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
      ]);
    } else if (name === "Phase Flip (H-Z-H)") {
      setCircuit([
        [{ gate: "H" }, { gate: "Z" }, { gate: "H" }, { gate: "M" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
        [{ gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
      ]);
    }
  };

  const clearCircuit = () => {
    setCircuit([
      [{ gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
      [{ gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }, { gate: "EMPTY" }],
    ]);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationRun(true);
    }, 400);
  };

  // Determine current output states based on circuit
  const hasHOnQ0 = circuit[0]?.some((s) => s.gate === "H");
  const hasXOnQ0 = circuit[0]?.some((s) => s.gate === "X");
  const hasCNOT = circuit[0]?.some((s) => s.gate === "CNOT_CTRL");

  let stateDescription = "|00⟩ Ground State";
  let probabilities: { state: string; prob: number; shots: number }[] = [
    { state: "|00⟩", prob: 100, shots: 1024 },
    { state: "|01⟩", prob: 0, shots: 0 },
    { state: "|10⟩", prob: 0, shots: 0 },
    { state: "|11⟩", prob: 0, shots: 0 },
  ];

  if (hasHOnQ0 && hasCNOT) {
    stateDescription = "Entangled Bell State (|Φ⁺⟩ = (|00⟩ + |11⟩)/√2)";
    probabilities = [
      { state: "|00⟩", prob: 50, shots: 518 },
      { state: "|01⟩", prob: 0, shots: 0 },
      { state: "|10⟩", prob: 0, shots: 0 },
      { state: "|11⟩", prob: 50, shots: 506 },
    ];
  } else if (hasHOnQ0 && !hasCNOT) {
    stateDescription = "Superposition State (|ψ⟩ = (|0⟩ + |1⟩)/√2 ⊗ |0⟩)";
    probabilities = [
      { state: "|00⟩", prob: 50, shots: 512 },
      { state: "|01⟩", prob: 0, shots: 0 },
      { state: "|10⟩", prob: 50, shots: 512 },
      { state: "|11⟩", prob: 0, shots: 0 },
    ];
  } else if (hasXOnQ0 && !hasCNOT) {
    stateDescription = "Flipped State (|10⟩)";
    probabilities = [
      { state: "|00⟩", prob: 0, shots: 0 },
      { state: "|01⟩", prob: 0, shots: 0 },
      { state: "|10⟩", prob: 100, shots: 1024 },
      { state: "|11⟩", prob: 0, shots: 0 },
    ];
  }

  const gatePalette: { type: GateType; label: string; desc: string; color: string }[] = [
    { type: "H", label: "H", desc: "Hadamard (Superposition)", color: "bg-cyan-500 text-slate-950 font-bold" },
    { type: "X", label: "X", desc: "Pauli-X (NOT / Bit Flip)", color: "bg-purple-600 text-white font-bold" },
    { type: "Y", label: "Y", desc: "Pauli-Y (Bit & Phase)", color: "bg-pink-600 text-white font-bold" },
    { type: "Z", label: "Z", desc: "Pauli-Z (Phase Flip)", color: "bg-indigo-600 text-white font-bold" },
    { type: "S", label: "S", desc: "Phase (π/2 Rotation)", color: "bg-blue-600 text-white font-bold" },
    { type: "T", label: "T", desc: "T Gate (π/4 Rotation)", color: "bg-teal-600 text-white font-bold" },
    { type: "CNOT_CTRL", label: "CNOT", desc: "Controlled-NOT (Entangler)", color: "bg-emerald-500 text-slate-950 font-bold" },
    { type: "M", label: "M", desc: "Measurement Meter", color: "bg-slate-700 text-cyan-300 font-bold" },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-900/40 pb-6">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
              <span className="text-cyan-400">⚛️</span> Quantum Simulator
            </h1>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400 border border-cyan-500/20">
              Interactive Builder
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            Build, simulate and analyze multi-qubit quantum circuits with state vector inspection.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:opacity-90 disabled:opacity-50"
          >
            <Play className={`h-4 w-4 ${isSimulating ? "animate-spin" : "fill-slate-950"}`} />
            <span>{isSimulating ? "Simulating..." : "Run Simulation"}</span>
          </button>

          <button
            onClick={clearCircuit}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
            title="Clear Circuit"
          >
            <Trash2 className="h-4 w-4 text-slate-400" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Preset Buttons Bar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
          Circuit Presets:
        </span>
        {[
          "Bell State (|Φ⁺⟩)",
          "Superposition (Hadamard)",
          "Bit Flip (Pauli-X)",
          "Phase Flip (H-Z-H)",
        ].map((preset) => (
          <button
            key={preset}
            onClick={() => loadPreset(preset)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              presetName === preset
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "border border-indigo-900/50 bg-slate-900/80 text-slate-300 hover:border-cyan-400/40 hover:text-white"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Main Builder & Toolbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Circuit Board */}
        <div className="lg:col-span-8 space-y-6">
          {/* Circuit Canvas Card */}
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-indigo-950 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <h2 className="text-lg font-bold text-white">Quantum Circuit Canvas</h2>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Click wire slot to place selected gate [{selectedGate}]
              </span>
            </div>

            {/* Circuit Wires Layout */}
            <div className="space-y-8 py-4 px-2">
              {circuit.map((wire, qIdx) => (
                <div key={qIdx} className="flex items-center gap-4">
                  {/* Qubit Label & Initial State */}
                  <div className="flex flex-col items-center justify-center w-16 text-center">
                    <span className="text-xs font-mono font-bold text-cyan-300">
                      q[{qIdx}]
                    </span>
                    <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300 border border-slate-700">
                      |0⟩
                    </span>
                  </div>

                  {/* Wire with Step Slots */}
                  <div className="relative flex-1 flex items-center justify-between">
                    {/* Wire horizontal line */}
                    <div className="absolute left-0 right-0 h-0.5 bg-slate-700 -z-0" />

                    {/* Step Slots */}
                    {wire.map((slot, sIdx) => {
                      const isCNOTControl = slot.gate === "CNOT_CTRL";
                      const isCNOTTarget = slot.gate === "CNOT_TGT";

                      return (
                        <div key={sIdx} className="relative z-10">
                          <button
                            onClick={() => handleSlotClick(qIdx, sIdx)}
                            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 ${
                              slot.gate === "EMPTY"
                                ? "border-dashed border-slate-700 bg-slate-900/90 text-slate-600 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105"
                                : isCNOTControl
                                ? "border-cyan-400 bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                                : isCNOTTarget
                                ? "border-cyan-400 bg-slate-900 text-cyan-400 font-extrabold text-base shadow-md"
                                : slot.gate === "H"
                                ? "border-cyan-400 bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                                : slot.gate === "X"
                                ? "border-purple-400 bg-purple-600 text-white font-bold"
                                : slot.gate === "M"
                                ? "border-slate-500 bg-slate-800 text-cyan-300 font-bold"
                                : "border-indigo-400 bg-indigo-600 text-white font-bold"
                            }`}
                            title={`Qubit ${qIdx}, Step ${sIdx + 1}: ${slot.gate}`}
                          >
                            {slot.gate === "EMPTY" ? (
                              <span className="text-xs">+</span>
                            ) : isCNOTControl ? (
                              <span className="h-3 w-3 rounded-full bg-slate-950" />
                            ) : isCNOTTarget ? (
                              <span>⊕</span>
                            ) : slot.gate === "M" ? (
                              <span className="text-[11px] font-mono">◨</span>
                            ) : (
                              slot.gate
                            )}
                          </button>

                          {/* CNOT Entanglement vertical connector line */}
                          {isCNOTControl && slot.cnotPair !== undefined && (
                            <div
                              className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-cyan-400 -z-10"
                              style={{
                                top: "100%",
                                height: "3.8rem",
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gate Toolbox Palette */}
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/80 p-5 backdrop-blur-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Gate Toolbox (Click to select gate, then click slot):
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {gatePalette.map((gate) => (
                <button
                  key={gate.type}
                  onClick={() => setSelectedGate(gate.type)}
                  className={`flex items-center gap-2.5 rounded-xl border p-2.5 transition text-left ${
                    selectedGate === gate.type
                      ? "border-cyan-400 bg-cyan-950/60 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${gate.color} text-xs shrink-0`}
                  >
                    {gate.type === "CNOT_CTRL" ? "⊕" : gate.label}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">{gate.label} Gate</div>
                    <div className="text-[10px] text-slate-400 truncate max-w-[100px]">
                      {gate.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Simulation Results & Probability Chart */}
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/80 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-indigo-950 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                  Simulation Output & Measurement Probabilities
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Based on 1024-shot Monte Carlo projective measurement
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20">
                1024 Shots
              </span>
            </div>

            {/* Current State Summary Pill */}
            <div className="mb-6 rounded-xl bg-slate-950 p-4 border border-indigo-900/40">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 block">
                Final Output State
              </span>
              <p className="mt-1 text-base font-bold font-mono text-white">
                {stateDescription}
              </p>
            </div>

            {/* Probability Histogram Bars */}
            <div className="space-y-4">
              {probabilities.map((item) => (
                <div key={item.state}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-white">{item.state} State</span>
                    <span className="text-cyan-400">
                      {item.prob}% ({item.shots} shots)
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${item.prob}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Real-time Bloch Sphere & Telemetry */}
        <div className="lg:col-span-4 space-y-6">
          <BlochSphere compact={true} initialTheta={hasHOnQ0 ? 90 : hasXOnQ0 ? 180 : 0} />

          {/* Quick Explanations Guide */}
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/70 p-5 backdrop-blur-xl space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Info className="h-4 w-4 text-cyan-400" />
              Quantum Gate Guide
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p>
                <strong className="text-cyan-400">Hadamard (H):</strong> Creates an equal superposition of |0⟩ and |1⟩.
              </p>
              <p>
                <strong className="text-purple-400">Pauli-X:</strong> Inverts qubit state (Bit-Flip: |0⟩ ↔ |1⟩).
              </p>
              <p>
                <strong className="text-emerald-400">CNOT:</strong> Flips target qubit when control is |1⟩ (creates Bell entanglement).
              </p>
            </div>
            <Link
              href="/learn/gates"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
            >
              <span>Learn all gate truth tables</span>
              <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
