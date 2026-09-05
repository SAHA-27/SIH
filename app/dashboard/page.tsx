"use client";

import Link from "next/link";
import { 
  BookOpen, 
  Cpu, 
  Trophy, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Award, 
  Zap, 
  Compass, 
  Layers, 
  BarChart2, 
  Play
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Overall Progress",
      value: "68%",
      change: "+12% this week",
      icon: BarChart2,
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
    },
    {
      title: "Lessons Completed",
      value: "4 / 6",
      change: "2 remaining",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-600",
      textColor: "text-indigo-400",
    },
    {
      title: "Quiz Mastery",
      value: "88%",
      change: "Top 10% student",
      icon: Trophy,
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-400",
    },
    {
      title: "Total XP",
      value: "1,450",
      change: "Level 4 Explorer",
      icon: Sparkles,
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-400",
    },
  ];

  const modules = [
    {
      id: "basics",
      title: "Quantum Basics",
      category: "Foundations",
      progress: 100,
      status: "Completed",
      link: "/learn/basics",
    },
    {
      id: "qubits",
      title: "Qubits & State Vectors",
      category: "Foundations",
      progress: 100,
      status: "Completed",
      link: "/learn/qubits",
    },
    {
      id: "superposition",
      title: "Superposition & Wavefunctions",
      category: "Core Mechanics",
      progress: 100,
      status: "Completed",
      link: "/learn/superposition",
    },
    {
      id: "gates",
      title: "Quantum Logic Gates (X, H, CNOT)",
      category: "Circuit Operations",
      progress: 100,
      status: "Completed",
      link: "/learn/gates",
    },
    {
      id: "entanglement",
      title: "Quantum Entanglement & Bell States",
      category: "Advanced Phenomena",
      progress: 45,
      status: "In Progress",
      link: "/learn/entanglement",
    },
    {
      id: "measurement",
      title: "Measurement & Wave Collapse",
      category: "Analysis",
      progress: 0,
      status: "Up Next",
      link: "/learn/measurement",
    },
  ];

  const achievements = [
    {
      title: "First Superposition",
      desc: "Constructed first |+⟩ superposition state vector",
      icon: "🌌",
      unlocked: true,
      date: "Unlocked Yesterday",
    },
    {
      title: "Gate Master",
      desc: "Simulated all 6 fundamental quantum gates",
      icon: "🔲",
      unlocked: true,
      date: "Unlocked 2 days ago",
    },
    {
      title: "Circuit Architect",
      desc: "Built a 2-qubit Bell State entangled circuit",
      icon: "⚛️",
      unlocked: true,
      date: "Unlocked 3 days ago",
    },
    {
      title: "Quiz Prodigy",
      desc: "Scored 100% on the Quantum Basics challenge",
      icon: "🏆",
      unlocked: true,
      date: "Unlocked this week",
    },
    {
      title: "Entanglement Pioneer",
      desc: "Complete the quantum entanglement interactive lab",
      icon: "🔗",
      unlocked: false,
      date: "Locked • In Progress",
    },
    {
      title: "Quantum Supremacy",
      desc: "Complete all 6 learning roadmap modules",
      icon: "👑",
      unlocked: false,
      date: "Locked • 4/6 Completed",
    },
  ];

  const recentActivity = [
    {
      type: "Circuit Simulation",
      title: "Simulated Bell State (|Φ⁺⟩) circuit with 1024 shots",
      time: "25 minutes ago",
      icon: Cpu,
    },
    {
      type: "Lesson Finished",
      title: "Completed Quantum Logic Gates module",
      time: "2 hours ago",
      icon: CheckCircle2,
    },
    {
      type: "Quiz Attempt",
      title: "Scored 5/5 on Quantum Basics Quiz",
      time: "Yesterday",
      icon: Trophy,
    },
    {
      type: "AI Tutor Chat",
      title: "Asked AI Tutor about Hadamard transformation matrix",
      time: "2 days ago",
      icon: Sparkles,
    },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      {/* Welcome Banner */}
      <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-indigo-950/50 to-[#070e2f]/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-cyan-500/20 px-3 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-400/30">
                Student Portal • SIH 2026
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-amber-300">
                <Flame className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                5 Day Streak
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              Welcome back, Quantum Explorer 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              You are making stellar progress! You’ve completed 4 of 6 modules. Continue your journey to master quantum computing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/learn/entanglement"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              <Play className="h-4 w-4 fill-slate-950" />
              <span>Resume Lesson</span>
            </Link>
            <Link
              href="/simulator"
              className="flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition"
            >
              <Cpu className="h-4 w-4 text-cyan-400" />
              <span>Circuit Studio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Key Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400">{stat.title}</span>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${stat.color} shadow-md`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
              <div className={`mt-2 text-xs font-semibold ${stat.textColor}`}>
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid: Modules Breakdown + Achievements & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Learning Roadmap Modules */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-indigo-950 pb-4 mb-5">
              <div>
                <h2 className="text-lg font-bold text-white">Module Progression</h2>
                <p className="text-xs text-slate-400">Track your completed and active quantum topics</p>
              </div>
              <Link
                href="/learn"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>View All Modules</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-xl border border-indigo-900/30 bg-slate-950/60 p-4 transition hover:border-cyan-500/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">
                        {mod.category}
                      </span>
                      <h3 className="text-sm font-bold text-white">{mod.title}</h3>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        mod.status === "Completed"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : mod.status === "In Progress"
                          ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          mod.progress === 100
                            ? "bg-emerald-500"
                            : "bg-gradient-to-r from-cyan-500 to-indigo-500"
                        }`}
                        style={{ width: `${mod.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {mod.progress}%
                    </span>
                    <Link
                      href={mod.link}
                      className="rounded-lg bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition"
                    >
                      {mod.progress === 100 ? "Review" : "Continue"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Learning Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/learn/quiz"
              className="flex items-center gap-4 rounded-2xl border border-indigo-900/40 bg-gradient-to-br from-indigo-950/40 to-slate-900/80 p-5 hover:border-cyan-500/40 transition group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300">Take Quantum Quiz</h4>
                <p className="text-xs text-slate-400 mt-0.5">Test your comprehension & earn 50 XP</p>
              </div>
            </Link>

            <Link
              href="/simulator"
              className="flex items-center gap-4 rounded-2xl border border-indigo-900/40 bg-gradient-to-br from-purple-950/40 to-slate-900/80 p-5 hover:border-purple-500/40 transition group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300">Open Circuit Studio</h4>
                <p className="text-xs text-slate-400 mt-0.5">Design multi-qubit quantum circuits</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Achievements & Activity Stream */}
        <div className="lg:col-span-5 space-y-6">
          {/* Achievements Grid */}
          <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-indigo-950 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Achievement Badges</h3>
              </div>
              <span className="text-xs font-mono text-amber-400">4 / 6 Unlocked</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className={`rounded-xl border p-3 flex flex-col justify-between text-left transition ${
                    ach.unlocked
                      ? "border-amber-500/30 bg-amber-500/5 shadow-sm"
                      : "border-slate-800 bg-slate-950/40 opacity-50"
                  }`}
                >
                  <div className="text-2xl mb-2">{ach.icon}</div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{ach.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{ach.desc}</p>
                  </div>
                  <span className="text-[9px] font-mono text-amber-400/90 mt-2 block">
                    {ach.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Log */}
          <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/70 p-6 backdrop-blur-xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              Recent Learning Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl bg-slate-950/50 p-3 border border-indigo-900/20"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-cyan-400 shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase">
                          {act.type}
                        </span>
                        <span className="text-[10px] text-slate-400">{act.time}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-200 mt-0.5 leading-snug">
                        {act.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
