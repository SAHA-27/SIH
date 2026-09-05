"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  ChevronRight,
  LogIn,
  UserPlus,
  LogOut,
  User as UserIcon,
  ChevronDown
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if student is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
    router.push("/login");
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Atom },
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard?tab=profile", icon: UserIcon },
    { name: "Simulator", href: "/simulator", icon: Cpu },
    { name: "Quiz", href: "/learn/quiz", icon: Trophy },
  ];

  const handleOpenAITutor = () => {
    window.dispatchEvent(new CustomEvent("open-ai-tutor"));
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.includes("?tab=profile")) return pathname === "/dashboard" && typeof window !== "undefined" && window.location.search.includes("tab=profile");
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

        {/* Right CTA Actions: Login, Signup, Streak & AI Tutor */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Daily Streak Counter */}
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
            <Flame className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>5 Streak</span>
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* AI Tutor Button */}
          <button
            onClick={handleOpenAITutor}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 px-3 py-2 text-sm font-semibold text-cyan-300 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-500/25 hover:text-white cursor-pointer"
          >
            <Bot className="h-4 w-4 text-cyan-400" />
            <span>AI Tutor</span>
            <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
          </button>

          {/* Student Auth / Profile Section with Logout Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2.5 rounded-xl border border-indigo-500/30 bg-slate-900/90 p-1.5 pr-3 hover:border-cyan-400/50 transition cursor-pointer"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-xs font-bold text-slate-950">
                  {user.name ? user.name.slice(0, 2).toUpperCase() : "ST"}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">{user.name || "Student"}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Student Profile</span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-indigo-900/50 bg-[#090f2d] p-2 shadow-2xl backdrop-blur-2xl z-50">
                  <div className="px-3 py-2 border-b border-indigo-950">
                    <p className="text-xs font-bold text-white truncate">{user.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                  </div>

                  <Link
                    href="/dashboard?tab=profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition mt-1"
                  >
                    <UserIcon className="h-3.5 w-3.5 text-cyan-400" />
                    <span>My Student Profile</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-red-300 hover:bg-red-950/60 transition cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5 text-red-400" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 pl-1 border-l border-indigo-900/50">
              {/* Login Button */}
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-cyan-400 hover:bg-slate-800 hover:text-white"
              >
                <LogIn className="h-3.5 w-3.5 text-cyan-400" />
                <span>Log In</span>
              </Link>

              {/* Sign Up Button */}
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition hover:opacity-95 hover:scale-[1.02]"
              >
                <UserPlus className="h-3.5 w-3.5 text-white" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-950/40 px-2.5 py-1.5 text-xs font-bold text-red-300"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-bold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Login</span>
            </Link>
          )}

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

          <div className="pt-3 grid grid-cols-2 gap-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl border border-red-500/40 bg-red-950/60 py-2.5 text-xs font-bold text-red-300"
              >
                <LogOut className="h-4 w-4 text-red-400" />
                <span>Log Out ({user.name})</span>
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 py-2.5 text-xs font-bold text-slate-200"
                >
                  <LogIn className="h-4 w-4 text-cyan-400" />
                  <span>Log In</span>
                </Link>

                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-2.5 text-xs font-bold text-slate-950"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
