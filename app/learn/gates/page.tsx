"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Layers, 
  Play, 
  RotateCw 
} from "lucide-react";

export default function Gates() {
  const [selectedGate, setSelectedGate] = useState<"X" | "H" | "Y" | "Z" | "S">("H");
  const [inputState, setInputState] = useState<"0" | "1">("0");

  const gateData = {
    X: {
      name: "Pauli-X (NOT / Bit Flip)",
      matrix: "[[0, 1], [1, 0]]",
      description: "Flips |0⟩ to |1⟩ and |1⟩ to |0⟩. Rotates the state vector by π radians (180°) around the X-axis.",
      output0: "|1⟩ (100% Excited)",
      output1: "|0⟩ (100% Ground)",
      color: "border-purple-400 text-purple-300",
    },
    H: {
      name: "Hadamard (H) Gate",
      matrix: "1/√2 * [[1, 1], [1, -1]]",
      description: "Creates an equal superposition state. Transforms computational basis into the X-basis (|+⟩ and |-⟩).",
      output0: "|+⟩ = (|0⟩ + |1⟩)/√2",
      output1: "|-⟩ = (|0⟩ - |1⟩)/√2",
      color: "border-cyan-400 text-cyan-300",
    },
    Y: {
      name: "Pauli-Y (Bit & Phase Flip)",
      matrix: "[[0, -i], [i, 0]]",
      description: "Performs both a bit flip and a phase flip with a complex phase factor i.",
      output0: "i|1⟩",
      output1: "-i|0⟩",
      color: "border-pink-400 text-pink-300",
    },
    Z: {
      name: "Pauli-Z (Phase Flip)",
      matrix: "[[1, 0], [0, -1]]",
      description: "Leaves |0⟩ unchanged and multiplies |1⟩ by -1. Rotates by π radians around the Z-axis.",
      output0: "|0⟩ (Unchanged)",
      output1: "-|1⟩ (Phase Inverted)",
      color: "border-indigo-400 text-indigo-300",
    },
    S: {
      name: "Phase Gate (S / √Z)",
      matrix: "[[1, 0], [0, i]]",
      description: "Applies a π/2 (90°) rotation around the Z-axis. S² = Z.",
      output0: "|0⟩",
      output1: "i|1⟩",
      color: "border-teal-400 text-teal-300",
    },
  };

  const currentGate = gateData[selectedGate];
  const outputResult = inputState === "0" ? currentGate.output0 : currentGate.output1;

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn/superposition"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous: Superposition
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 04 of 06
          </span>
          <span className="rounded-full bg-indigo-500/10 px-3 py-0.5 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            Intermediate Level
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quantum Logic Gates
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Learn how unitary transformations manipulate quantum state vectors and form quantum circuits.
        </p>
      </div>

      {/* Section 1: Interactive Gate Sandbox */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="h-5 w-5 text-cyan-400" />
            Interactive Gate Sandbox
          </h2>
          <span className="text-xs text-slate-400 font-mono">Live Matrix Transformation</span>
        </div>

        {/* Gate Selection Tabs */}
        <div className="flex flex-wrap gap-2">
          {(["H", "X", "Y", "Z", "S"] as const).map((gate) => (
            <button
              key={gate}
              onClick={() => setSelectedGate(gate)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                selectedGate === gate
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                  : "border border-indigo-900/60 bg-slate-950 text-slate-300 hover:border-cyan-400"
              }`}
            >
              {gate} Gate
            </button>
          ))}
        </div>

        {/* Gate Details & Transformation Box */}
        <div className="rounded-2xl border border-indigo-900/50 bg-slate-950/80 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
            <h3 className="text-base font-bold text-white">{currentGate.name}</h3>
            <span className="font-mono text-xs text-cyan-400">Matrix: {currentGate.matrix}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentGate.description}
          </p>

          {/* Interactive Input State Switcher */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Input State:</span>
              <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                <button
                  onClick={() => setInputState("0")}
                  className={`rounded px-3 py-1 text-xs font-mono font-bold transition ${
                    inputState === "0" ? "bg-cyan-500 text-slate-950" : "text-slate-400"
                  }`}
                >
                  |0⟩
                </button>
                <button
                  onClick={() => setInputState("1")}
                  className={`rounded px-3 py-1 text-xs font-mono font-bold transition ${
                    inputState === "1" ? "bg-purple-500 text-white" : "text-slate-400"
                  }`}
                >
                  |1⟩
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm font-mono text-white bg-slate-900/90 px-4 py-2 rounded-xl border border-indigo-500/30">
              <span className="text-slate-400">[{selectedGate}] applied to |{inputState}⟩</span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="text-emerald-400 font-bold">{outputResult}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Gate Matrix Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-indigo-900/40 bg-slate-900/70 p-5 space-y-2">
          <h3 className="text-base font-bold text-cyan-400">Hadamard (H) Gate</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fundamental for creating quantum superpositions. It maps basis state |0⟩ → (|0⟩ + |1⟩)/√2 and |1⟩ → (|0⟩ - |1⟩)/√2.
          </p>
        </div>

        <div className="rounded-xl border border-indigo-900/40 bg-slate-900/70 p-5 space-y-2">
          <h3 className="text-base font-bold text-purple-400">Pauli-X Gate</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Quantum analogue of the classical NOT gate. It inverts |0⟩ ↔ |1⟩ by rotating the state vector by π radians around the X-axis.
          </p>
        </div>

        <div className="rounded-xl border border-indigo-900/40 bg-slate-900/70 p-5 space-y-2">
          <h3 className="text-base font-bold text-pink-400">Pauli-Y Gate</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Rotates the state vector around the Y-axis. It introduces an imaginary phase factor i: Y|0⟩ = i|1⟩ and Y|1⟩ = -i|0⟩.
          </p>
        </div>

        <div className="rounded-xl border border-indigo-900/40 bg-slate-900/70 p-5 space-y-2">
          <h3 className="text-base font-bold text-emerald-400">CNOT (Controlled-NOT)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            A 2-qubit entangling gate that flips the target qubit if and only if the control qubit is |1⟩.
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-900/40">
        <Link
          href="/learn/superposition"
          className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          ← Previous: Superposition
        </Link>
        <Link
          href="/learn/entanglement"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          <span>Next: Entanglement</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}