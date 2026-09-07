"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Atom, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  Microscope, 
  School,
  Zap,
  Award,
  BookOpen
} from "lucide-react";

type RoleType = "student" | "researcher" | "educator";

export default function SignUp() {
  const router = useRouter();
  const [role, setRole] = useState<RoleType>("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Calculate password strength entropy
  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: "None", color: "bg-slate-700" };
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;

    if (score <= 25) return { score, label: "Weak Entropy", color: "bg-red-500", text: "text-red-400" };
    if (score <= 50) return { score, label: "Moderate Entropy", color: "bg-amber-500", text: "text-amber-400" };
    if (score <= 75) return { score, label: "Strong Encryption", color: "bg-cyan-500", text: "text-cyan-400" };
    return { score, label: "Quantum-Grade Entropy", color: "bg-emerald-400", text: "text-emerald-400" };
  };

  const strength = getPasswordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }
    if (!agreeTerms) {
      setErrorMsg("Please agree to the Quantum Explorer Academic Terms.");
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  const handleDemoSignup = (demoRole: RoleType = "student") => {
    setRole(demoRole);
    setFullName(
      demoRole === "student"
        ? "Alex Chen (Student)"
        : demoRole === "researcher"
        ? "Dr. Elena Vance (Quantum Physicist)"
        : "Prof. Arthur Miller"
    );
    setEmail(
      demoRole === "student"
        ? "alex.chen@quantum.edu"
        : demoRole === "researcher"
        ? "elena.vance@quantum-lab.org"
        : "arthur.miller@university.edu"
    );
    setPassword("QuantumExplorer2026!");
    setConfirmPassword("QuantumExplorer2026!");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-indigo-900/40 bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Left Column: Quantum Curriculum & Explorer Benefits */}
          <div className="lg:col-span-5 relative flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-[#0a1238]/90 via-[#070d2b]/95 to-[#050814]/90 border-b lg:border-b-0 lg:border-r border-indigo-900/40">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl -z-10" />
            <div className="absolute bottom-1/3 right-10 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl -z-10" />

            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>⚛️ JOIN QUANTUM EXPLORER</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Begin Your <br />
                  <span className="gradient-text-cyan">Quantum Journey</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Join students, researchers, and quantum enthusiasts mastering quantum gates, superposition, and circuit simulation.
                </p>
              </div>

              {/* Curriculum Milestones */}
              <div className="space-y-3 pt-1">
                {[
                  { icon: BookOpen, title: "6 Interactive Learning Modules", desc: "Step-by-step mathematical & intuitive concepts" },
                  { icon: Atom, title: "Full Multi-Qubit Circuit Builder", desc: "1024-shot simulation with Bloch sphere inspection" },
                  { icon: Sparkles, title: "Real-Time AI Quantum Tutor", desc: "Instant intelligent explanations for complex questions" },
                  { icon: Award, title: "SIH 2026 Verified Certification", desc: "Earn badges & track weekly learning telemetry" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl bg-slate-950/60 p-3 border border-indigo-900/30"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Credits */}
            <div className="pt-6 border-t border-indigo-950/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Free Academic Tier</span>
              <span className="text-cyan-400 font-mono">SIH 2026 Edition</span>
            </div>
          </div>

          {/* Right Column: Interactive Registration Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Create Account</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Set up your quantum student profile and start exploring immediately.
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

              {/* Error Alert */}
              {errorMsg && (
                <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-3 text-xs text-red-300 animate-fade-in">
                  {errorMsg}
                </div>
              )}

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Chen"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Academic Email */}
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
                      placeholder="alex.chen@university.edu"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Password & Live Entropy Meter */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-slate-400 hover:text-slate-200 transition"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Password Entropy Meter */}
                  {password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Entropy Level:</span>
                        <span className={`font-bold ${strength.text}`}>{strength.label}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full ${strength.color} transition-all duration-300`}
                          style={{ width: `${strength.score}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat password"
                      required
                      className="w-full rounded-xl border border-indigo-500/30 bg-slate-950/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Agree to terms */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-400 accent-cyan-500"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-300 select-none">
                    I agree to the{" "}
                    <span className="text-cyan-400">Quantum Explorer Academic Terms & Ethics Guidelines</span>
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
                      <span>Provisioning Quantum Node...</span>
                    </div>
                  ) : (
                    <>
                      <span>Create Free Explorer Account</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* 1-Click Fast Demo Sign Up for SIH Evaluators */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDemoSignup(role)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 py-2.5 text-xs font-bold text-amber-300 transition hover:bg-amber-500/20 hover:border-amber-400 shadow-sm"
                >
                  <Zap className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>⚡ 1-Click Fast Registration (SIH 2026 Presentation Mode)</span>
                </button>
              </div>

              {/* Social / Academic Single Sign-On */}
              <div className="space-y-3 pt-2 border-t border-indigo-950">
                <span className="text-[11px] text-center block text-slate-400">
                  Or register with Academic SSO:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleDemoSignup("student")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoSignup("researcher")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>GitHub</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoSignup("educator")}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
                  >
                    <span>ORCID</span>
                  </button>
                </div>
              </div>

              {/* Switch to Sign In */}
              <div className="text-center pt-2 text-xs text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  Sign In →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
