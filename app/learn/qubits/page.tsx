"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Atom, 
  Sparkles, 
  Info, 
  BookOpen, 
  Compass 
} from "lucide-react";
import BlochSphere from "@/components/BlochSphere";

export default function Qubits() {
  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn/basics"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous: Quantum Basics
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 02 of 06
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            Beginner Level
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Qubits & Quantum States
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Understand Dirac notation, basis vectors |0⟩ and |1⟩, and geometric representation on the Bloch Sphere.
        </p>
      </div>

      {/* Section 1: What is a Qubit? */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Atom className="h-5 w-5 text-cyan-400" />
          What is a Qubit?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          A <strong className="text-cyan-400">qubit</strong> (quantum bit) is the fundamental unit of quantum information. Mathematically, a pure qubit state is a two-dimensional complex vector in a Hilbert space with orthonormal basis vectors:
        </p>

        {/* Basis Vectors Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl border border-cyan-500/30 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-400">Ground State</span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">Vector [1, 0]ᵀ</span>
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-white">|0⟩</div>
            <p className="mt-2 text-xs text-slate-400">
              Analogous to classical 0. Corresponds to the North Pole of the Bloch Sphere.
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-400">Excited State</span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">Vector [0, 1]ᵀ</span>
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-white">|1⟩</div>
            <p className="mt-2 text-xs text-slate-400">
              Analogous to classical 1. Corresponds to the South Pole of the Bloch Sphere.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Mathematical Formulation */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white">
          State Vector Formulation
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Any pure single-qubit state $|\psi\rangle$ can be expressed as a linear superposition:
        </p>

        <div className="rounded-xl bg-slate-950 p-4 border border-cyan-500/30 text-center">
          <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">
            |ψ⟩ = α|0⟩ + β|1⟩
          </div>
          <div className="mt-2 text-xs font-mono text-slate-400">
            Normalization Condition: |α|² + |β|² = 1
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Here, $\alpha$ and $\beta$ are complex probability amplitudes. The probability of measuring $|0\rangle$ is $|\alpha|^2$, and the probability of measuring $|1\rangle$ is $|\beta|^2$.
        </p>
      </section>

      {/* Section 3: Interactive Bloch Sphere */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="h-5 w-5 text-cyan-400" />
            Interactive Bloch Sphere Inspection
          </h2>
          <span className="text-xs text-slate-400">Drag to rotate • Click presets</span>
        </div>
        <BlochSphere />
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-900/40">
        <Link
          href="/learn/basics"
          className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          ← Previous: Basics
        </Link>
        <Link
          href="/learn/superposition"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          <span>Next: Superposition</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}