import Link from "next/link";
import { Atom, ShieldCheck, Sparkles, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-indigo-900/40 bg-[#040612]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20">
                <Atom className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Quantum<span className="text-cyan-400">Explorer</span>
              </span>
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-400 border border-cyan-500/30">
                Active Platform
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An AI-powered Quantum Computing Learning Platform designed to make quantum mechanics, qubit manipulation, and circuit simulation accessible and interactive for students and researchers.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">Quantum Core: Online</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">1024-Shot State Simulator Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-slate-400 hover:text-cyan-400 transition">
                  Quantum Learning Roadmap
                </Link>
              </li>
              <li>
                <Link href="/simulator" className="text-slate-400 hover:text-cyan-400 transition">
                  Circuit Builder & Simulator
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-cyan-400 transition">
                  Student Learning Dashboard
                </Link>
              </li>
              <li>
                <Link href="/learn/quiz" className="text-slate-400 hover:text-cyan-400 transition">
                  Quantum Quizzes & Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Topics
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/learn/qubits" className="text-slate-400 hover:text-cyan-400 transition">
                  Qubit Foundations & Basis
                </Link>
              </li>
              <li>
                <Link href="/learn/superposition" className="text-slate-400 hover:text-cyan-400 transition">
                  Superposition & Wave Functions
                </Link>
              </li>
              <li>
                <Link href="/learn/gates" className="text-slate-400 hover:text-cyan-400 transition">
                  Quantum Logic Gates (X, H, CNOT)
                </Link>
              </li>
              <li>
                <Link href="/learn/entanglement" className="text-slate-400 hover:text-cyan-400 transition">
                  Entanglement & Bell States
                </Link>
              </li>
              <li>
                <Link href="/learn/measurement" className="text-slate-400 hover:text-cyan-400 transition">
                  Measurement & Wave Collapse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-indigo-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-300">
              Quantum Explorer Platform
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Learn • Build • Simulate • Explore
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="rounded-md bg-slate-900 px-2.5 py-1 border border-slate-800 text-slate-300">
              Next.js 16 • React 19
            </span>
            <span className="rounded-md bg-slate-900 px-2.5 py-1 border border-slate-800 text-slate-300">
              Tailwind CSS v4
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
