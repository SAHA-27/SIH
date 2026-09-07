"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Atom, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  GraduationCap, 
  Microscope, 
  School,
  Zap,
  KeyRound,
  X
} from "lucide-react";

type RoleType = "student" | "researcher" | "educator";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<RoleType>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }
    setErrorMsg("");
    setIsLoading(true);

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  const handleDemoLogin = (demoRole: RoleType = "student") => {
    setRole(demoRole);
    setEmail(
      demoRole === "student"
        ? "student.explorer@quantum.edu"
        : demoRole === "researcher"
        ? "researcher@quantum-lab.org"
        : "prof.quantum@university.edu"
    );
    setPassword("QuantumExplorer2026!");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
      setForgotModalOpen(false);
      setForgotEmail("");
    }, 2500);
  };

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-indigo-900/40 bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Left Column: Quantum Identity & Security Showcase */}
          <div className="lg:col-span-5 relative flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-[#0a1238]/90 via-[#070d2b]/95 to-[#050814]/90 border-b lg:border-b-0 lg:border-r border-indigo-900/40">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-10 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl -z-10" />

            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>⚛️ QUANTUM IDENTITY PORTAL</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Welcome to <br />
                  <span className="gradient-text-cyan">Quantum Explorer</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Your gateway to building quantum circuits, simulating state vectors, and mastering quantum physics with AI tutoring.
                </p>
              </div>

              {/* Quantum Telemetry Mini HUD */}
              <div className="rounded-2xl border border-indigo-500/20 bg-slate-950/70 p-4 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono border-b border-indigo-950 pb-2">
                  <span className="text-slate-400">Security Layer</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> QKD Encrypted
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Multi-qubit circuit builder & simulator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>24/7 AI Quantum Tutor Assistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Personalized learning telemetry & badges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote & Credits */}
            <div className="pt-6 border-t border-indigo-950/60 text-[11px] text-slate-400">
              <span className="text-slate-300 font-medium">SIH 2026 College Project Platform</span>
              <p className="text-slate-400 mt-0.5">Empowering next-generation quantum innovators.</p>
            </div>
          </div>

          {/* Right Column: Interactive Login Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Sign In</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Choose your role and sign in to resume your learning roadmap.
                </p>
              </div>

              {/* Role Selection Tabs */}
              <div>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Select User Role:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "student", label: "Student", icon: GraduationCap },
                    { id: "researcher", label: "Researcher", icon: Microscope },
                    { id: "educator", label: "Educator", icon: School },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = role === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRole(item.id as RoleType)}
                        className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-semibold transition-all ${
                          isSelected
                            ? "border border-cyan-400/80 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                            : "border border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isSelected ? "text-cyan-400" : "text-slate-500"}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Error Message if any */}
              {errorMsg && (
                <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-3 text-xs text-red-300 animate-fade-in">
                  {errorMsg}
                </div>
              )}

              {/* Sign In Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Academic / Institutional Email
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student.explorer@quantum.edu"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setForgotModalOpen(true)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 transition"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-slate-400 hover:text-slate-200 transition"
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-400 accent-cyan-500"
                    />
                    <span>Remember this session</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Atom className="h-4 w-4 animate-spin text-slate-950" />
                      <span>Authenticating Quantum Node...</span>
                    </div>
                  ) : (
                    <>
                      <span>Sign In to Quantum Portal</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* 1-Click Fast Demo Login for SIH Evaluators */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin(role)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 py-2.5 text-xs font-bold text-amber-300 transition hover:bg-amber-500/20 hover:border-amber-400 shadow-sm"
                >
                  <Zap className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>⚡ 1-Click Demo Login (SIH 2026 Presentation Fast Pass)</span>
                </button>
              </div>

              {/* Social / Academic Single Sign-On */}
              <div className="space-y-3 pt-2 border-t border-indigo-950">
                <span className="text-[11px] text-center block text-slate-400">
                  Or authenticate with Academic SSO:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("student")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("researcher")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>GitHub</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("educator")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>ORCID</span>
                  </button>
                </div>
              </div>

              {/* Switch to Sign Up */}
              <div className="text-center pt-2 text-xs text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  Create Account →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setForgotModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-cyan-500/30 bg-[#0a1033] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-indigo-950 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <KeyRound className="h-5 w-5 text-cyan-400" />
                <h4 className="font-bold text-white">Reset Quantum Access Key</h4>
              </div>
              <button
                onClick={() => setForgotModalOpen(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {forgotSent ? (
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto animate-bounce" />
                <h5 className="font-bold text-white text-sm">Recovery Link Sent!</h5>
                <p className="text-xs text-slate-300">
                  Please check your academic email for the secure reset link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enter your registered institutional email address. We will send you a secure one-time quantum cryptographic verification link.
                </p>
                <div>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="student.explorer@quantum.edu"
                    required
                    className="w-full rounded-xl border border-indigo-500/30 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-500 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition"
                >
                  Send Verification Link
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
