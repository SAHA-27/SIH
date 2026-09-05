"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  BarChart2, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Cpu, 
  RotateCcw, 
  Play 
} from "lucide-react";

export default function Measurement() {
  const [measuredOutcome, setMeasuredOutcome] = useState<"0" | "1" | null>(null);
  const [shotsCount, setShotsCount] = useState({ total: 0, zeros: 0, ones: 0 });
  const [isMeasuring, setIsMeasuring] = useState(false);

  // Perform single measurement on superposition |+> (50/50 probability)
  const performMeasurement = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "0" : "1";
      setMeasuredOutcome(outcome);
      setShotsCount((prev) => ({
        total: prev.total + 1,
        zeros: outcome === "0" ? prev.zeros + 1 : prev.zeros,
        ones: outcome === "1" ? prev.ones + 1 : prev.ones,
      }));
      setIsMeasuring(false);
    }, 200);
  };

  const resetStats = () => {
    setMeasuredOutcome(null);
    setShotsCount({ total: 0, zeros: 0, ones: 0 });
  };

  const zeroPercent = shotsCount.total > 0 ? Math.round((shotsCount.zeros / shotsCount.total) * 100) : 50;
  const onePercent = shotsCount.total > 0 ? 100 - zeroPercent : 50;

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-900/40 pb-5">
        <Link
          href="/learn/entanglement"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous: Entanglement
        </Link>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-500/20">
            Module 06 of 06
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            Final Lesson
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quantum Measurement & Wave Collapse
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Learn how projective measurement extracts classical information from a quantum system and collapses its wave function.
        </p>
      </div>

      {/* Section 1: The Born Rule */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BarChart2 className="h-5 w-5 text-cyan-400" />
          The Born Rule Probability Principle
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          When a quantum state |ψ⟩ = α|0⟩ + β|1⟩ is measured in the computational basis (|0⟩, |1⟩), quantum mechanics cannot predict with certainty which outcome will occur. Instead, it yields probabilistic outcomes governed by the <strong className="text-cyan-400">Born Rule</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl bg-slate-950 p-4 border border-cyan-500/30 text-center">
            <span className="text-xs font-mono text-cyan-400">Outcome 0 Probability</span>
            <div className="mt-1 text-2xl font-mono font-bold text-white">P(0) = |α|²</div>
            <p className="mt-1 text-[11px] text-slate-400">Wave function collapses to |0⟩</p>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 border border-purple-500/30 text-center">
            <span className="text-xs font-mono text-purple-400">Outcome 1 Probability</span>
            <div className="mt-1 text-2xl font-mono font-bold text-white">P(1) = |β|²</div>
            <p className="mt-1 text-[11px] text-slate-400">Wave function collapses to |1⟩</p>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Measurement Simulator */}
      <section className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Interactive Measurement Simulator
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Target state: Equal Superposition |+⟩ = (|0⟩ + |1⟩)/√2
            </p>
          </div>

          <button
            onClick={resetStats}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Shots</span>
          </button>
        </div>

        {/* Live Measurement Result Box */}
        <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Observed Classical Outcome
          </span>

          <div className="flex items-center justify-center h-24">
            {isMeasuring ? (
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xl animate-pulse">
                <span>Measuring wave collapse...</span>
              </div>
            ) : measuredOutcome === null ? (
              <span className="text-slate-500 font-mono text-lg">
                [ Click &apos;Perform Measurement&apos; below ]
              </span>
            ) : (
              <div className="flex flex-col items-center animate-fade-in">
                <span className="text-5xl font-black font-mono text-cyan-300">
                  {measuredOutcome === "0" ? "|0⟩ State" : "|1⟩ State"}
                </span>
                <span className="text-xs font-mono text-emerald-400 mt-1">
                  ✓ Classical bit {measuredOutcome} registered
                </span>
              </div>
            )}
          </div>

          <button
            onClick={performMeasurement}
            disabled={isMeasuring}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90 disabled:opacity-50"
          >
            {isMeasuring ? "Observing..." : "⚡ Perform Measurement Shot"}
          </button>
        </div>

        {/* Statistics Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>Total Measurement Shots: {shotsCount.total}</span>
            <span>
              |0⟩: {shotsCount.zeros} ({zeroPercent}%) | |1⟩: {shotsCount.ones} ({onePercent}%)
            </span>
          </div>

          <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
            <div
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${zeroPercent}%` }}
              title={`|0⟩: ${zeroPercent}%`}
            />
            <div
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${onePercent}%` }}
              title={`|1⟩: ${onePercent}%`}
            />
          </div>
        </div>
      </section>

      {/* Completion Banner */}
      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900/90 to-cyan-950/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
            <Trophy className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              🎉 Congratulations! You&apos;ve completed all 6 modules!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Put your knowledge to the test in the Quantum Quiz arena or construct circuits in the simulator.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/learn/quiz"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-cyan-400"
          >
            <Trophy className="h-4 w-4" />
            <span>Take Final Quiz</span>
          </Link>
          <Link
            href="/simulator"
            className="flex items-center gap-2 rounded-xl border border-indigo-400/40 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-slate-800 transition"
          >
            <Cpu className="h-4 w-4" />
            <span>Open Simulator</span>
          </Link>
        </div>
      </div>
    </div>
  );
}