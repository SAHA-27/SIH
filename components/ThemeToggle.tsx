"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-500/30 bg-slate-900/80 text-cyan-400 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-white cursor-pointer shadow-sm"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400 animate-spin-slow" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-600" />
      )}
    </button>
  );
}
