"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Atom, 
  Sparkles, 
  Trophy, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Compass, 
  Zap 
} from "lucide-react";

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Beginner" | "Intermediate">("All");

  const modules = [
    {
      num: "01",
      title: "Quantum Basics",
      description: "Learn what quantum computing is and how it fundamentally differs from classical bit-based architecture.",
      level: "Beginner",
      duration: "10 mins",
      xp: "+50 XP",
      icon: "⚛️",
      link: "/learn/basics",
      color: "from-cyan-500 to-blue-600",
      topics: ["Bits vs Qubits", "Quantum Supremacy", "Physical Realization"],
    },
    {
      num: "02",
      title: "Qubits & State Vectors",
      description: "Understand qubits, Dirac notation |0⟩ and |1⟩, and state vectors on the 3D unit sphere.",
      level: "Beginner",
      duration: "15 mins",
      xp: "+60 XP",
      icon: "🔵",
      link: "/learn/qubits",
      color: "from-blue-500 to-indigo-600",
      topics: ["Basis States", "Bloch Coordinates", "State Amplitudes"],
    },
    {
      num: "03",
      title: "Superposition",
      description: "Discover how quantum particles exist in simultaneous states described by complex probability amplitudes.",
      level: "Beginner",
      duration: "15 mins",
      xp: "+75 XP",
      icon: "🌌",
      link: "/learn/superposition",
      color: "from-indigo-500 to-purple-600",
      topics: ["Linear Combinations", "Hadamard Transformation", "Wave Function"],
    },
    {
      num: "04",
      title: "Quantum Logic Gates",
      description: "Explore unitary matrix transformations: Pauli-X, Y, Z, Hadamard (H), and Phase (S, T) gates.",
      level: "Intermediate",
      duration: "20 mins",
      xp: "+100 XP",
      icon: "🔲",
      link: "/learn/gates",
      color: "from-purple-500 to-pink-600",
      topics: ["Pauli Matrices", "Reversibility", "Matrix Multiplication"],
    },
    {
      num: "05",
      title: "Quantum Entanglement",
      description: "Discover non-local quantum correlations, Bell states (|Φ⁺⟩), and the Einstein-Podolsky-Rosen paradox.",
      level: "Intermediate",
      duration: "25 mins",
      xp: "+120 XP",
      icon: "🔗",
      link: "/learn/entanglement",
      color: "from-pink-500 to-rose-600",
      topics: ["Bell States", "CNOT Operator", "Quantum Teleportation"],
    },
    {
      num: "06",
      title: "Quantum Measurement",
      description: "Master projective measurements, the Born rule probability formula, and wave function collapse.",
      level: "Intermediate",
      duration: "15 mins",
      xp: "+80 XP",
      icon: "📊",
      link: "/learn/measurement",
      color: "from-teal-500 to-emerald-600",
      topics: ["Born Rule", "State Collapse", "Computational Basis"],
    },
  ];

  const filteredModules = activeFilter === "All" 
    ? modules 
    : modules.filter((m) => m.level === activeFilter);

  return (
    <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-indigo-900/40 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            Comprehensive Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Quantum Learning Modules
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            Step-by-step interactive lessons with intuitive visualizers, mathematical formulations, and hands-on circuit exercises.
          </p>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex items-center gap-2 rounded-xl border border-indigo-900/50 bg-slate-900/80 p-1.5 backdrop-blur-md">
          {(["All", "Beginner", "Intermediate"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeFilter === filter
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((mod) => (
          <div
            key={mod.num}
            className="group relative flex flex-col justify-between rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/40"
          >
            <div>
              {/* Header: Number, Icon, Level */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl">{mod.icon}</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    MODULE {mod.num}
                  </span>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    mod.level === "Beginner"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                  }`}
                >
                  {mod.level}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {mod.title}
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mod.description}
              </p>

              {/* Topic Chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {mod.topics.map((top, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-mono text-slate-300 border border-slate-800"
                  >
                    {top}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Action Link */}
            <div className="mt-6 pt-4 border-t border-indigo-950 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {mod.duration}
                </span>
                <span className="text-amber-400 font-mono font-semibold">
                  {mod.xp}
                </span>
              </div>

              <Link
                href={mod.link}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-slate-950 transition hover:opacity-90 shadow-md shadow-cyan-500/20"
              >
                <span>Start Lesson</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Interactive Assessment Banner */}
      <div className="rounded-3xl border border-indigo-900/50 bg-gradient-to-r from-indigo-950/50 via-slate-900/90 to-purple-950/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0">
            <Trophy className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to test your quantum comprehension?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Take the 5-question Quantum Challenge to earn XP and unlock mastery badges.
            </p>
          </div>
        </div>

        <Link
          href="/learn/quiz"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-bold text-slate-950 transition hover:opacity-95 shrink-0 shadow-lg shadow-cyan-500/20"
        >
          <Sparkles className="h-4 w-4" />
          <span>Take Quantum Quiz</span>
        </Link>
      </div>
    </div>
  );
}
