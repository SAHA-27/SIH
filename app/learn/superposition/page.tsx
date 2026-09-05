"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Sliders, 
  Zap, 
  CheckCircle2 
} from "lucide-react";

export default function Superposition() {
  const [alphaRatio, setAlphaRatio] = useState(50); // 0 to 100

  // Calculate amplitudes and probabilities
  const p0 = alphaRatio;
  const p1 = 100 - alphaRatio;
  const alpha = Math.sqrt(p0 / 100).toFixed(3);
  const beta = Math.sqrt(p1 / 100).toFixed(3);

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn/qubits"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous: Qubits
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 03 of 06
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            Beginner Level
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quantum Superposition
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Discover how a qubit exists in a simultaneous combination of quantum states before measurement.
        </p>
      </div>

      {/* Section 1: Core Concept */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          What is Superposition?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          Superposition is the principle that allows quantum systems to exist across a linear combination of mutually exclusive states. In classical computing, a coin lying on a table is definitively heads (0) or tails (1). A spinning quantum coin in superposition is both heads and tails until caught and observed.
        </p>
        <div className="rounded-xl bg-slate-950 p-4 border border-indigo-500/30 text-center font-mono text-lg text-cyan-300">
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>
      </section>

      {/* Section 2: Interactive Superposition State Mixer */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sliders className="h-5 w-5 text-purple-400" />
            Interactive Superposition Mixer
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            |α|² + |β|² = 1.000
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Slide the ratio below to adjust the probability amplitude distribution between |0⟩ and |1⟩:
        </p>

        {/* Amplitude Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono font-bold text-slate-300">
            <span className="text-cyan-400">|0⟩ Ground ({p0}%)</span>
            <span className="text-purple-400">|1⟩ Excited ({p1}%)</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={alphaRatio}
            onChange={(e) => setAlphaRatio(Number(e.target.value))}
            className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-slate-950 accent-cyan-400"
          />
        </div>

        {/* Dynamic Formula Display */}
        <div className="rounded-xl bg-slate-950 p-5 border border-cyan-500/30 text-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Computed Wave Function
          </span>
          <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
            |ψ⟩ = <span className="text-cyan-400">{alpha}</span>|0⟩ +{" "}
            <span className="text-purple-400">{beta}</span>|1⟩
          </div>
        </div>

        {/* Probability Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-950 p-4 border border-indigo-900/40">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-cyan-300 font-bold">P(Outcome 0) = |α|²</span>
              <span className="text-cyan-400 font-bold">{p0}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-200"
                style={{ width: `${p0}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 border border-indigo-900/40">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-purple-300 font-bold">P(Outcome 1) = |β|²</span>
              <span className="text-purple-400 font-bold">{p1}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-purple-400 transition-all duration-200"
                style={{ width: `${p1}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Equal Superposition (The |+> State) */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white">
          Equal Superposition: The Hadamard State (|+⟩)
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Applying a Hadamard gate (H) to |0⟩ creates an equal superposition where both outcomes are equally probable:
        </p>
        <div className="rounded-xl bg-slate-950 p-4 border border-indigo-500/30 text-center font-mono text-base sm:text-lg text-cyan-300">
          |+⟩ = H|0⟩ = (|0⟩ + |1⟩) / √2
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-900/40">
        <Link
          href="/learn/qubits"
          className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          ← Previous: Qubits
        </Link>
        <Link
          href="/learn/gates"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          <span>Next: Quantum Gates</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
