"use client";

import { useEffect, useRef } from "react";

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes representing quantum entanglement network
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      color: string;
    }[] = [];

    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#06b6d4"];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.4 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw entangled connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha + Math.sin(time + i) * 0.1;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050814] dark:bg-[#050814] light:bg-[#f8fafc] transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-60 light:opacity-20" />

      {/* Layered Radial Glow Orbs */}
      <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-cyan-600/10 dark:bg-cyan-600/10 light:bg-cyan-500/5 blur-[130px]" />
      <div className="absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/10 light:bg-indigo-500/5 blur-[150px]" />
      <div className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/10 light:bg-purple-500/5 blur-[140px]" />

      {/* Subtle Quantum Wave Curve */}
      <svg
        className="absolute top-0 left-0 h-full w-full opacity-15 dark:opacity-15 light:opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,224L60,208C120,192,240,160,360,176C480,192,600,256,720,266.7C840,277,960,235,1080,218.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="url(#wave-gradient)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-100 dark:opacity-100 light:opacity-40" />
    </div>
  );
}
