"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Atom, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Zap, 
  HelpCircle 
} from "lucide-react";

export default function Basics() {
  const [activeTab, setActiveTab] = useState<"bit" | "qubit">("qubit");

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Modules
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 01 of 06
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            Beginner Level
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quantum Basics
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Understand what quantum computing is and how it revolutionizes classical information theory.
        </p>
      </div>

      {/* Section 1: What is Quantum Computing? */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Atom className="h-5 w-5 text-cyan-400" />
          What is Quantum Computing?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          Quantum computing is a rapidly-emerging technology that harnesses the unique laws of quantum mechanics to solve complex computational problems beyond the reach of even the most powerful classical supercomputers.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          While classical computers rely on transistors processing binary bits (strictly <strong className="text-cyan-400">0</strong> or <strong className="text-cyan-400">1</strong>), quantum computers use <strong className="text-cyan-400">quantum bits (qubits)</strong> capable of exploiting superposition, entanglement, and quantum interference.
        </p>
      </section>

      {/* Section 2: Interactive Bit vs Qubit Visualizer */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Classical Bit vs Quantum Qubit
          </h2>
          {/* Interactive Toggle */}
          <div className="flex rounded-lg border border-indigo-900/60 bg-slate-950 p-1">
            <button
              onClick={() => setActiveTab("bit")}
              className={`rounded px-3 py-1 text-xs font-semibold transition ${
                activeTab === "bit"
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Classical Bit
            </button>
            <button
              onClick={() => setActiveTab("qubit")}
              className={`rounded px-3 py-1 text-xs font-semibold transition ${
                activeTab === "qubit"
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Quantum Qubit
            </button>
          </div>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`rounded-xl border p-5 transition ${
              activeTab === "bit"
                ? "border-cyan-400/50 bg-slate-950/90 shadow-md"
                : "border-slate-800 bg-slate-950/40 opacity-70"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-bold text-slate-200">Classical Bit</h3>
            </div>
            <div className="my-3 rounded-lg bg-slate-900 p-3 text-center font-mono font-bold text-lg text-slate-300">
              State: [ 0 ] OR [ 1 ]
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>• Stores a single binary state (high/low voltage)</li>
              <li>• Deterministic and predictable</li>
              <li>• $N$ bits can represent only 1 of $2^N$ states at once</li>
            </ul>
          </div>

          <div
            className={`rounded-xl border p-5 transition ${
              activeTab === "qubit"
                ? "border-cyan-400 bg-cyan-950/20 shadow-lg shadow-cyan-950/40"
                : "border-slate-800 bg-slate-950/40 opacity-70"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚛️</span>
              <h3 className="text-lg font-bold text-cyan-300">Quantum Qubit</h3>
            </div>
            <div className="my-3 rounded-lg bg-slate-900 p-3 text-center font-mono font-bold text-lg text-cyan-400 border border-cyan-500/30">
              |ψ⟩ = α|0⟩ + β|1⟩
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>• Exists in a continuous superposition of $|0\rangle$ and $|1\rangle$</li>
              <li>• Explores exponential state space ($2^N$ states simultaneously)</li>
              <li>• Collapses into a classical bit upon observation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum Overview */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-purple-400" />
          What You Will Learn in this Curriculum
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            { icon: "⚛️", title: "02. Qubits", desc: "Dirac bra-ket notation and state vectors" },
            { icon: "🌌", title: "03. Superposition", desc: "Wavefunction mathematics and Hadamard transformations" },
            { icon: "🔲", title: "04. Quantum Gates", desc: "Pauli-X, Y, Z and Unitary matrices" },
            { icon: "🔗", title: "05. Entanglement", desc: "Bell states and non-local correlations" },
            { icon: "📊", title: "06. Measurement", desc: "Born rule probabilities and state collapse" },
            { icon: "🏆", title: "Assessment", desc: "Quizzes and interactive circuit simulations" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl bg-slate-950/60 p-3.5 border border-indigo-900/30"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-900/40">
        <Link
          href="/learn"
          className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          Back to Modules
        </Link>
        <Link
          href="/learn/qubits"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          <span>Next Lesson: Qubits</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}