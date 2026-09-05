"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Atom, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  Bot, 
  Trophy, 
  Globe, 
  ArrowRight, 
  Activity, 
  Play, 
  CheckCircle2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Compass,
  Code2
} from "lucide-react";
import BlochSphere from "@/components/BlochSphere";

export default function Home() {
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  const handleOpenAITutor = () => {
    window.dispatchEvent(new CustomEvent("open-ai-tutor"));
  };

  const featureCards = [
    {
      id: "learning",
      title: "Quantum Learning",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-600",
      borderGlow: "group-hover:border-cyan-400/50",
      description: "Understand qubits, superposition, entanglement and quantum gates.",
      tag: "Interactive Modules",
      link: "/learn",
    },
    {
      id: "circuit",
      title: "Circuit Builder",
      icon: Atom,
      color: "from-indigo-500 to-purple-600",
      borderGlow: "group-hover:border-indigo-400/50",
      description: "Create quantum circuits using an interactive drag-and-drop interface.",
      tag: "Visual Builder",
      link: "/simulator",
    },
    {
      id: "simulator",
      title: "Quantum Simulator",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      borderGlow: "group-hover:border-purple-400/50",
      description: "Run your circuits and observe quantum measurement results.",
      tag: "1024 Shots",
      link: "/simulator",
    },
    {
      id: "bloch",
      title: "Bloch Sphere",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      borderGlow: "group-hover:border-cyan-400/50",
      description: "Visualize the state of a qubit using an interactive 3D representation.",
      tag: "3D State Vector",
      link: "#bloch-section",
    },
    {
      id: "tutor",
      title: "AI Quantum Tutor",
      icon: Bot,
      color: "from-teal-500 to-emerald-600",
      borderGlow: "group-hover:border-teal-400/50",
      description: "Ask questions and receive simple, intelligent explanations while learning.",
      tag: "Real-time AI",
      action: handleOpenAITutor,
    },
    {
      id: "quizzes",
      title: "Quizzes & Challenges",
      icon: Trophy,
      color: "from-amber-500 to-orange-600",
      borderGlow: "group-hover:border-amber-400/50",
      description: "Test your knowledge, earn points and unlock achievements.",
      tag: "XP Rewards",
      link: "/learn/quiz",
    },
  ];

  const roadmapSteps = [
    {
      num: "01",
      title: "Qubits",
      desc: "The fundamental unit of quantum information and basis states |0⟩ and |1⟩.",
      link: "/learn/qubits",
      status: "Foundation",
      formula: "|ψ⟩ = α|0⟩ + β|1⟩",
    },
    {
      num: "02",
      title: "Superposition",
      desc: "How qubits exist in linear combinations before collapsing via observation.",
      link: "/learn/superposition",
      status: "Core Principle",
      formula: "|+⟩ = (|0⟩ + |1⟩)/√2",
    },
    {
      num: "03",
      title: "Quantum Gates",
      desc: "Unitary transformations like Pauli-X, Hadamard, and Phase rotations.",
      link: "/learn/gates",
      status: "Operations",
      formula: "H|0⟩ = |+⟩, X|0⟩ = |1⟩",
    },
    {
      num: "04",
      title: "Entanglement",
      desc: "Non-local quantum correlations and Bell state generation.",
      link: "/learn/entanglement",
      status: "Advanced",
      formula: "|Φ⁺⟩ = (|00⟩ + |11⟩)/√2",
    },
    {
      num: "05",
      title: "Quantum Circuits",
      desc: "Chaining multi-qubit gates and building quantum algorithms.",
      link: "/simulator",
      status: "Practical",
      formula: "CNOT (q0, q1)",
    },
    {
      num: "06",
      title: "Measurement",
      desc: "Projective measurements and probabilistic wave function collapse.",
      link: "/learn/measurement",
      status: "Analysis",
      formula: "P(0) = |α|², P(1) = |β|²",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Small Glowing Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-4 py-1.5 shadow-[0_0_18px_rgba(6,182,212,0.25)] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase">
                ⚛️ AI-POWERED QUANTUM LEARNING
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Explore the World of{" "}
              <span className="gradient-text-cyan font-black block sm:inline">
                Quantum Computing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Learn quantum concepts, build quantum circuits, run simulations and test your knowledge in an interactive learning environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/learn"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/40 hover:from-cyan-400 hover:to-blue-500"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/simulator"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <Cpu className="h-4 w-4 text-cyan-400" />
                <span>Explore Simulator</span>
              </Link>
            </div>

            {/* Telemetry Stats Ticker */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-indigo-900/40 w-full">
              <div>
                <div className="text-2xl font-black text-white font-mono">6+</div>
                <div className="text-xs text-slate-400">Core Modules</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">1024</div>
                <div className="text-xs text-slate-400">Simulation Shots</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400 font-mono">24/7</div>
                <div className="text-xs text-slate-400">AI Quantum Tutor</div>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Quantum Visualization Component */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl -z-10" />

            <div className="w-full rounded-2xl border border-indigo-500/30 bg-[#090f2d]/90 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Header inside HUD */}
              <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider">
                    Qubit HUD Telemetry
                  </span>
                </div>
                <span className="rounded-md bg-indigo-950 px-2 py-0.5 text-[10px] font-mono text-indigo-300 border border-indigo-500/30">
                  |ψ⟩ = α|0⟩ + β|1⟩
                </span>
              </div>

              {/* Quantum Orbit Sphere Graphic */}
              <div className="relative h-60 w-full flex items-center justify-center my-2">
                {/* Concentric Rotating Quantum Orbital Rings */}
                <div className="absolute h-52 w-52 rounded-full border border-cyan-500/20 animate-spin-slow border-dashed" />
                <div className="absolute h-40 w-40 rounded-full border border-indigo-500/30 animate-spin-reverse" />
                <div className="absolute h-28 w-28 rounded-full border border-purple-500/40 animate-pulse-glow" />

                {/* Center Core Qubit Node */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 shadow-[0_0_35px_rgba(6,182,212,0.6)]">
                  <Atom className="h-9 w-9 text-white animate-spin-slow" />
                </div>

                {/* Floating Qubit Basis Badges */}
                <div className="absolute top-2 left-6 rounded-lg bg-slate-900/90 border border-cyan-500/40 px-2.5 py-1 text-xs font-mono text-cyan-300 shadow-md">
                  |0⟩ Ground
                </div>
                <div className="absolute bottom-3 right-6 rounded-lg bg-slate-900/90 border border-purple-500/40 px-2.5 py-1 text-xs font-mono text-purple-300 shadow-md">
                  |1⟩ Excited
                </div>
                <div className="absolute top-1/2 left-2 -translate-y-1/2 rounded-lg bg-slate-900/90 border border-indigo-500/40 px-2 py-1 text-[11px] font-mono text-indigo-300 shadow-md">
                  H-Gate
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-slate-900/90 border border-teal-500/40 px-2 py-1 text-[11px] font-mono text-teal-300 shadow-md">
                  CNOT ⊕
                </div>
              </div>

              {/* Mini Quantum Circuit Stream */}
              <div className="mt-4 rounded-xl bg-slate-950/80 p-3 border border-indigo-900/40">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-cyan-400">q[0] ──[ H ]────●───[ M ]</span>
                  <span className="text-emerald-400 font-bold">50% |0⟩</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mt-1.5">
                  <span className="text-indigo-400">q[1] ───────────X───[ M ]</span>
                  <span className="text-emerald-400 font-bold">50% |1⟩</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURE CARDS SECTION ("What You Can Explore") */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Comprehensive Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What You Can Explore
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered with modern pedagogical tools to simplify complex quantum mechanics and make hands-on circuit experimentation intuitive.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feat) => {
            const Icon = feat.icon;
            const CardWrapper = feat.link ? Link : "div";
            return (
              <CardWrapper
                key={feat.id}
                href={feat.link || "#"}
                onClick={feat.action}
                className={`group relative flex flex-col justify-between rounded-2xl border border-indigo-900/40 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_12px_30px_rgba(6,182,212,0.15)] cursor-pointer`}
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${feat.color} shadow-md shadow-indigo-950/50 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-slate-700/60 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Module</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* 3. LEARNING ROADMAP SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-indigo-900/40 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Curriculum Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Quantum Learning Roadmap
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Master quantum computation step-by-step from foundational basis vectors to multi-qubit algorithm circuits.
              </p>
            </div>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 shadow-md shadow-cyan-500/20"
            >
              <span>Continue Learning</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Connected Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roadmapSteps.map((step, idx) => (
              <Link
                key={step.num}
                href={step.link}
                className="group relative flex flex-col justify-between rounded-xl border border-indigo-900/50 bg-[#090e29]/90 p-5 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-mono font-black text-cyan-400/70 group-hover:text-cyan-300">
                      {step.num}
                    </span>
                    <span className="rounded-md bg-indigo-950/80 px-2 py-0.5 text-[10px] font-mono text-indigo-300 border border-indigo-500/20">
                      {step.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-indigo-950 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="text-[11px] text-slate-400 font-sans">{step.formula}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Start <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUANTUM VISUALIZATION (BLOCH SPHERE SECTION) */}
      <section id="bloch-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Interactive 3D Representation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Visualize Quantum States
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Bloch Sphere represents the state of a single qubit as a point on a unit sphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main 3D Component */}
          <div className="lg:col-span-8">
            <BlochSphere />
          </div>

          {/* Educational Explanatory Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass className="h-5 w-5 text-cyan-400" />
                How the Bloch Sphere Works
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                The state of any pure qubit can be written as:
              </p>
              <div className="my-3 rounded-lg bg-slate-950 p-3 font-mono text-xs text-cyan-300 border border-indigo-500/20">
                |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400">• North Pole (Z = +1):</span>
                  <span>Pure computational state |0⟩</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400">• South Pole (Z = -1):</span>
                  <span>Pure computational state |1⟩</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">• Equator (θ = 90°):</span>
                  <span>Equal superposition states (|+⟩, |-⟩, |i⟩, |-i⟩)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-tr from-cyan-950/40 to-indigo-950/40 p-6 backdrop-blur-xl">
              <h4 className="text-sm font-bold text-white">
                Quantum Gate Rotations
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Quantum logic gates act as 3D rotations on this sphere. For instance, the Hadamard gate rotates the vector by 180° around the X+Z diagonal axis.
              </p>
              <Link
                href="/simulator"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                <span>Simulate Gate Rotations</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CIRCUIT BUILDER PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-indigo-900/40 bg-gradient-to-br from-slate-900/80 via-[#070d2b]/90 to-slate-900/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 border border-purple-500/20">
                <Code2 className="h-3.5 w-3.5" />
                Drag-and-Drop Circuit Workspace
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Interactive Quantum Circuit Builder
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Construct multi-qubit algorithms using standard quantum gates such as <strong className="text-cyan-400">H</strong>, <strong className="text-purple-400">X</strong>, <strong className="text-emerald-400">Y</strong>, <strong className="text-pink-400">Z</strong>, and <strong className="text-indigo-400">CNOT</strong>. Run 1024-shot simulations to inspect probability wave collapse in real-time.
              </p>

              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:scale-[1.02]"
              >
                <span>Open Circuit Builder →</span>
              </Link>
            </div>

            {/* Right: Technical Circuit Schematic */}
            <div className="lg:col-span-7 rounded-2xl border border-cyan-500/30 bg-[#05091d] p-6 shadow-inner">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-950">
                <span className="text-xs font-mono font-bold text-slate-400">
                  CIRCUIT: Bell-State Generator (|Φ⁺⟩)
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Ready • 2 Qubits
                </span>
              </div>

              {/* Wire Lines Schematic */}
              <div className="space-y-6 py-2">
                {/* Qubit 0 Line */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-cyan-400 w-8">
                    q[0]
                  </span>
                  <div className="relative flex-1 flex items-center">
                    <div className="h-0.5 w-full bg-slate-700" />
                    
                    {/* H Gate */}
                    <div className="absolute left-[20%] -translate-x-1/2 rounded-md bg-cyan-500 px-3 py-1.5 text-xs font-mono font-bold text-slate-950 shadow-md">
                      H
                    </div>

                    {/* CNOT Control Node */}
                    <div className="absolute left-[55%] -translate-x-1/2 flex flex-col items-center">
                      <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30" />
                      <div className="w-0.5 h-12 bg-cyan-400 mt-1" />
                    </div>

                    {/* Measurement Gate */}
                    <div className="absolute left-[85%] -translate-x-1/2 rounded-md bg-slate-800 border border-slate-600 px-2.5 py-1 text-xs font-mono font-bold text-slate-300">
                      [ M ]
                    </div>
                  </div>
                </div>

                {/* Qubit 1 Line */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-purple-400 w-8">
                    q[1]
                  </span>
                  <div className="relative flex-1 flex items-center">
                    <div className="h-0.5 w-full bg-slate-700" />

                    {/* CNOT Target Node */}
                    <div className="absolute left-[55%] -translate-x-1/2 flex items-center justify-center h-6 w-6 rounded-full border-2 border-cyan-400 bg-slate-900 text-cyan-400 text-xs font-bold font-mono">
                      ⊕
                    </div>

                    {/* Measurement Gate */}
                    <div className="absolute left-[85%] -translate-x-1/2 rounded-md bg-slate-800 border border-slate-600 px-2.5 py-1 text-xs font-mono font-bold text-slate-300">
                      [ M ]
                    </div>
                  </div>
                </div>
              </div>

              {/* Circuit Gates Legend */}
              <div className="mt-6 pt-4 border-t border-indigo-950/60 flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-400 mr-2">Available Gates:</span>
                {["H", "X", "Y", "Z", "S", "T", "CNOT", "SWAP"].map((gate) => (
                  <span
                    key={gate}
                    className="rounded bg-slate-800/80 px-2 py-0.5 text-slate-300 border border-slate-700"
                  >
                    {gate}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI QUANTUM TUTOR SHOWCASE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              <Bot className="h-3.5 w-3.5" />
              Real-Time AI Companion
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Meet Your AI Quantum Tutor
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Your intelligent companion for understanding quantum computing. Ask questions, clarify difficult equations, and receive clear, step-by-step guidance while building circuits.
            </p>

            <button
              onClick={handleOpenAITutor}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:opacity-95 hover:scale-[1.02]"
            >
              <Bot className="h-4 w-4" />
              <span>Ask the Tutor →</span>
            </button>
          </div>

          {/* Right: Modern AI Chat Preview Mockup */}
          <div className="lg:col-span-7 rounded-2xl border border-teal-500/30 bg-[#090e29] p-5 shadow-2xl backdrop-blur-xl">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-indigo-950 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">AI Quantum Tutor</span>
                  <span className="text-[10px] text-emerald-400">Active • Quantum Knowledge Engine</span>
                </div>
              </div>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
                Interactive Preview
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-4 text-sm">
              {/* Student Query */}
              <div className="flex flex-col items-end">
                <span className="text-[11px] text-slate-400 mb-1">Student</span>
                <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2.5 text-white shadow-md">
                  What is superposition?
                </div>
              </div>

              {/* AI Tutor Response */}
              <div className="flex flex-col items-start">
                <span className="text-[11px] text-teal-400 flex items-center gap-1 mb-1">
                  <Sparkles className="h-3 w-3" /> AI Quantum Tutor
                </span>
                <div className="rounded-2xl rounded-tl-sm border border-teal-500/30 bg-slate-900/90 px-4 py-3 text-slate-200 shadow-md leading-relaxed max-w-[92%]">
                  Superposition means a qubit can exist in a combination of |0⟩ and |1⟩ states until it is measured. Mathematically, it is described as |ψ⟩ = α|0⟩ + β|1⟩, where |α|² and |β|² represent the probability amplitudes of each state.
                </div>
              </div>
            </div>

            {/* Click to launch interactive chat */}
            <div className="mt-4 pt-3 border-t border-indigo-950 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Want to ask another question?
              </span>
              <button
                onClick={handleOpenAITutor}
                className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1"
              >
                <span>Launch Chat</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INNOVATION SHOWCASE BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-indigo-950/50 to-purple-950/40 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/30">
              Interactive Innovation Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Master Quantum Computing?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Start with foundational qubit lessons, build circuits in the simulator, and test your skills in the quiz arena.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-3">
              <Link
                href="/learn"
                className="rounded-xl bg-cyan-500 px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 shadow-md shadow-cyan-500/25"
              >
                Start Learning Now
              </Link>
              <Link
                href="/dashboard"
                className="rounded-xl border border-indigo-400/40 bg-slate-900/80 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
