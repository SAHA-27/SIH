"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Compass, 
  Atom 
} from "lucide-react";

export default function Entanglement() {
  const [selectedBellState, setSelectedBellState] = useState<"phi_plus" | "phi_minus" | "psi_plus" | "psi_minus">("phi_plus");

  const bellStates = {
    phi_plus: {
      name: "|Φ⁺⟩ (Phi Plus)",
      formula: "(|00⟩ + |11⟩) / √2",
      circuit: "q0: H ──●\nq1: ────X",
      desc: "Maximum correlation: Measuring q0 as 0 guarantees q1 is 0; measuring q0 as 1 guarantees q1 is 1.",
    },
    phi_minus: {
      name: "|Φ⁻⟩ (Phi Minus)",
      formula: "(|00⟩ - |11⟩) / √2",
      circuit: "q0: H ── Z ──●\nq1: ─────────X",
      desc: "Opposite phase correlation with identical bit outcomes.",
    },
    psi_plus: {
      name: "|Ψ⁺⟩ (Psi Plus)",
      formula: "(|01⟩ + |10⟩) / √2",
      circuit: "q0: H ──●\nq1: X ──X",
      desc: "Anti-correlated outcomes: Measuring q0 as 0 guarantees q1 is 1, and vice-versa.",
    },
    psi_minus: {
      name: "|Ψ⁻⟩ (Psi Minus / Singlet)",
      formula: "(|01⟩ - |10⟩) / √2",
      circuit: "q0: H ── Z ──●\nq1: X ───────X",
      desc: "The famous singlet state with total spin zero and rotational invariance.",
    },
  };

  const activeBell = bellStates[selectedBellState];

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn/gates"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous: Quantum Gates
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 05 of 06
          </span>
          <span className="rounded-full bg-indigo-500/10 px-3 py-0.5 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            Intermediate Level
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quantum Entanglement
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Learn how qubits can become fundamentally interconnected such that observing one instantly influences the other.
        </p>
      </div>

      {/* Section 1: What is Entanglement? */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Atom className="h-5 w-5 text-pink-400" />
          What is Quantum Entanglement?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          Quantum entanglement occurs when a pair or group of particles are generated, interact, or share spatial proximity such that the quantum state of each particle cannot be described independently of the state of the others, even when the particles are separated by vast distances.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          Albert Einstein famously referred to this non-local property as <em className="text-cyan-300">&quot;spooky action at a distance&quot;</em>. Today, entanglement forms the bedrock of quantum computing, quantum cryptography (QKD), and quantum teleportation protocols.
        </p>
      </section>

      {/* Section 2: The Four Bell States Interactive Inspector */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            The 4 Maximally Entangled Bell States
          </h2>
          <span className="text-xs text-slate-400 font-mono">2-Qubit Basis</span>
        </div>

        {/* State Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["phi_plus", "phi_minus", "psi_plus", "psi_minus"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedBellState(key)}
              className={`rounded-xl px-3 py-2 text-xs font-mono font-bold transition ${
                selectedBellState === key
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25"
                  : "border border-indigo-900/60 bg-slate-950 text-slate-300 hover:border-pink-400"
              }`}
            >
              {bellStates[key].name}
            </button>
          ))}
        </div>

        {/* Selected Bell State Inspection Box */}
        <div className="rounded-2xl border border-pink-500/30 bg-slate-950/80 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              State Vector Formula
            </span>
            <span className="text-xs font-mono text-emerald-400">P(|00⟩)=50% • P(|11⟩)=50%</span>
          </div>

          <div className="text-2xl font-mono font-extrabold text-pink-300 text-center py-2">
            {activeBell.formula}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeBell.desc}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">
              Generation Circuit:
            </span>
            <pre className="rounded-lg bg-slate-900 p-3 font-mono text-xs text-cyan-300 border border-slate-800">
              {activeBell.circuit}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: Applications */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white">
          Key Applications of Entanglement
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="rounded-xl bg-slate-950/60 p-4 border border-indigo-900/30">
            <h3 className="text-sm font-bold text-cyan-400">Quantum Teleportation</h3>
            <p className="text-xs text-slate-300 mt-1">
              Transmitting an unknown qubit state across space using a shared entangled pair and classical communications.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4 border border-indigo-900/30">
            <h3 className="text-sm font-bold text-purple-400">Superdense Coding</h3>
            <p className="text-xs text-slate-300 mt-1">
              Sending two classical bits of information by transmitting only a single physical qubit using prior entanglement.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4 border border-indigo-900/30">
            <h3 className="text-sm font-bold text-emerald-400">Quantum Cryptography (QKD)</h3>
            <p className="text-xs text-slate-300 mt-1">
              Unbreakable encryption keys using the E91 protocol, where eavesdropping destroys the entanglement signature.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4 border border-indigo-900/30">
            <h3 className="text-sm font-bold text-pink-400">Quantum Error Correction</h3>
            <p className="text-xs text-slate-300 mt-1">
              Distributing quantum information across entangled physical qubits to detect and correct decoherence errors.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-900/40">
        <Link
          href="/learn/gates"
          className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          ← Previous: Quantum Gates
        </Link>
        <Link
          href="/learn/measurement"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          <span>Next: Measurement</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
