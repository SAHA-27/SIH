"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Atom, Mail, Lock, User, ArrowRight, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      // Backend API URL (defaults to http://localhost:5000)
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
      
      const res = await fetch(`${backendUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      // Store token & user data in localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess(isLogin ? "Welcome back! Redirecting..." : "Account created successfully! Redirecting...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    } catch (err: any) {
      setError(err.message || "Failed to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md relative">
        {/* Background Ambient Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 blur-xl opacity-30 -z-10" />

        <div className="rounded-3xl border border-indigo-900/50 bg-[#090f2d]/90 p-8 shadow-2xl backdrop-blur-2xl">
          {/* Header Icon & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 mb-4">
              <Atom className="h-8 w-8 text-slate-950 animate-spin-slow" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isLogin ? "Student Login" : "Create Student Account"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {isLogin
                ? "Access your QuantumXplore circuits, progress & quizzes"
                : "Join QuantumXplore & start your quantum computing journey"}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-950 p-1 mb-6 border border-indigo-950">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setError("");
                setSuccess("");
              }}
              className={`rounded-lg py-2.5 text-xs font-bold transition-all ${
                isLogin
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setError("");
                setSuccess("");
              }}
              className={`rounded-lg py-2.5 text-xs font-bold transition-all ${
                !isLogin
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          {/* Alert Messages */}
          {error && (
            <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-950/40 p-3 text-xs text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>{success}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Physicist Student"
                    className="w-full rounded-xl border border-indigo-900/60 bg-slate-950/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@quantumxplore.edu"
                  className="w-full rounded-xl border border-indigo-900/60 bg-slate-950/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-indigo-900/60 bg-slate-950/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-indigo-900/60 bg-slate-950/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>{isLogin ? "Sign In to Account" : "Create Student Account"}</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-indigo-950 text-center">
            <p className="text-xs text-slate-400">
              {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                  setSuccess("");
                }}
                className="font-bold text-cyan-400 hover:underline cursor-pointer"
              >
                {isLogin ? "Sign Up here" : "Log In here"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
