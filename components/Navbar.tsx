"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Atom, 
  BookOpen, 
  LayoutDashboard, 
  Cpu, 
  Trophy, 
  Bot, 
  Menu, 
  X, 
  Flame, 
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Atom },
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Simulator", href: "/simulator", icon: Cpu },
    { name: "Quiz", href: "/learn/quiz", icon: Trophy },
  ];

  const handleOpenAITutor = () => {
    window.dispatchEvent(new CustomEvent("open-ai-tutor"));
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-indigo-900/40 bg-[#050814]/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <Atom className="h-6 w-6 text-white animate-spin-slow" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-sm -z-10 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Quantum<span className="text-cyan-400">xplore</span>
              </span>
              <span className="hidden sm:inline-block rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-400 border border-cyan-500/30">
              </span>
            </div>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Quantum & AI Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-slate-900/60 p-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-cyan-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Daily Streak Counter */}
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
            <Flame className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>5 Streak</span>
          </div>

          {/* AI Tutor Button */}
          <button
            onClick={handleOpenAITutor}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 px-3.5 py-2 text-sm font-semibold text-cyan-300 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-500/25 hover:text-white"
          >
            <Bot className="h-4 w-4 text-cyan-400" />
            <span>AI Tutor</span>
            <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
          </button>

          {/* Student Profile Avatar */}
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 rounded-xl border border-indigo-500/20 bg-slate-900/80 p-1.5 pr-3 hover:border-cyan-400/40 transition"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-xs font-bold text-slate-950">
              QE
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white leading-tight">Student</span>
              <span className="text-[10px] text-cyan-400 font-mono">1,450 XP</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleOpenAITutor}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
            title="Open AI Tutor"
          >
            <Bot className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-indigo-900/50 bg-[#070c24] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                  active
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${active ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{link.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-500" />
              </Link>
            );
          })}

          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenAITutor();
              }}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-2.5 text-sm font-semibold text-slate-950"
            >
              <Bot className="h-4 w-4" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
