"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, RotateCw, Play, Info } from "lucide-react";

interface BlochSphereProps {
  initialTheta?: number; // In degrees
  initialPhi?: number;   // In degrees
  showControls?: boolean;
  compact?: boolean;
  onStateChange?: (state: { theta: number; phi: number; p0: number; p1: number }) => void;
}

export default function BlochSphere({
  initialTheta = 60,
  initialPhi = 45,
  showControls = true,
  compact = false,
  onStateChange,
}: BlochSphereProps) {
  const [theta, setTheta] = useState(initialTheta); // 0 to 180
  const [phi, setPhi] = useState(initialPhi);       // 0 to 360
  const [viewRotationX, setViewRotationX] = useState(20);
  const [viewRotationY, setViewRotationY] = useState(-30);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 20, rotY: -30 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate probabilities
  const thetaRad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;
  const p0 = Math.round(Math.pow(Math.cos(thetaRad / 2), 2) * 100);
  const p1 = 100 - p0;

  useEffect(() => {
    if (onStateChange) {
      onStateChange({ theta, phi, p0, p1 });
    }
  }, [theta, phi, p0, p1, onStateChange]);

  // Render 3D Bloch Sphere to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) * 0.36;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // 3D rotation math helper
    const rotXRad = (viewRotationX * Math.PI) / 180;
    const rotYRad = (viewRotationY * Math.PI) / 180;

    const project = (x: number, y: number, z: number) => {
      // Rotate around Y axis
      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const y1 = y;
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);

      // Rotate around X axis
      const x2 = x1;
      const y2 = y1 * Math.cos(rotXRad) - z1 * Math.sin(rotXRad);
      const z2 = y1 * Math.sin(rotXRad) + z1 * Math.cos(rotXRad);

      // Perspective scale
      const scale = 1 + z2 * 0.0012;
      return {
        px: centerX + x2 * scale,
        py: centerY - y2 * scale, // invert Y for screen coords
        z: z2,
      };
    };

    // Draw sphere translucent background glow
    const bgGrad = ctx.createRadialGradient(
      centerX - radius * 0.3,
      centerY - radius * 0.3,
      radius * 0.1,
      centerX,
      centerY,
      radius
    );
    bgGrad.addColorStop(0, "rgba(56, 189, 248, 0.12)");
    bgGrad.addColorStop(0.7, "rgba(99, 102, 241, 0.05)");
    bgGrad.addColorStop(1, "rgba(10, 15, 40, 0.4)");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Draw Sphere Outer Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw Latitude Rings (Equator)
    ctx.beginPath();
    for (let angle = 0; angle <= 360; angle += 4) {
      const aRad = (angle * Math.PI) / 180;
      const x = radius * Math.cos(aRad);
      const y = 0;
      const z = radius * Math.sin(aRad);
      const { px, py } = project(x, y, z);
      if (angle === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = "rgba(129, 140, 248, 0.3)";
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Coordinate Axes (X, Y, Z)
    const axes = [
      { name: "Z |0⟩", x: 0, y: radius * 1.25, z: 0, color: "#38bdf8" },
      { name: "-Z |1⟩", x: 0, y: -radius * 1.25, z: 0, color: "#a855f7" },
      { name: "X |+⟩", x: radius * 1.25, y: 0, z: 0, color: "#34d399" },
      { name: "Y |i⟩", x: 0, y: 0, z: radius * 1.25, color: "#f43f5e" },
    ];

    // Axis Lines
    axes.forEach((axis) => {
      const origin = project(0, 0, 0);
      const end = project(axis.x, axis.y, axis.z);

      ctx.beginPath();
      ctx.moveTo(origin.px, origin.py);
      ctx.lineTo(end.px, end.py);
      ctx.strokeStyle = axis.color;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Axis Label
      ctx.fillStyle = axis.color;
      ctx.font = "bold 11px sans-serif";
      ctx.fillText(axis.name, end.px + 4, end.py - 4);
    });

    // Calculate State Vector Position on Sphere
    // x = r * sin(theta) * cos(phi)
    // y = r * cos(theta) (Z-axis in standard physics is up!)
    // z = r * sin(theta) * sin(phi)
    const vx = radius * Math.sin(thetaRad) * Math.cos(phiRad);
    const vy = radius * Math.cos(thetaRad);
    const vz = radius * Math.sin(thetaRad) * Math.sin(phiRad);

    const vOrigin = project(0, 0, 0);
    const vTip = project(vx, vy, vz);
    const vEquatorProj = project(vx, 0, vz);

    // Projection dashed line to equator
    ctx.beginPath();
    ctx.moveTo(vTip.px, vTip.py);
    ctx.lineTo(vEquatorProj.px, vEquatorProj.py);
    ctx.lineTo(vOrigin.px, vOrigin.py);
    ctx.strokeStyle = "rgba(244, 114, 182, 0.4)";
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Main State Vector Arrow
    ctx.beginPath();
    ctx.moveTo(vOrigin.px, vOrigin.py);
    ctx.lineTo(vTip.px, vTip.py);
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 3;
    ctx.stroke();

    // State Vector Tip (Glowing Sphere Node)
    ctx.beginPath();
    ctx.arc(vTip.px, vTip.py, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Vector Label |ψ⟩
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("|ψ⟩", vTip.px + 10, vTip.py - 6);
  }, [theta, phi, viewRotationX, viewRotationY]);

  // Preset states handler
  const setPreset = (name: string) => {
    switch (name) {
      case "0":
        setTheta(0);
        setPhi(0);
        break;
      case "1":
        setTheta(180);
        setPhi(0);
        break;
      case "+":
        setTheta(90);
        setPhi(0);
        break;
      case "-":
        setTheta(90);
        setPhi(180);
        break;
      case "i":
        setTheta(90);
        setPhi(90);
        break;
      case "-i":
        setTheta(90);
        setPhi(270);
        break;
    }
  };

  // Mouse drag orbit controls
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: viewRotationX,
      rotY: viewRotationY,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setViewRotationY(dragStartRef.current.rotY + dx * 0.6);
    setViewRotationX(Math.max(-60, Math.min(60, dragStartRef.current.rotX - dy * 0.6)));
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className={`flex flex-col ${compact ? "gap-4" : "gap-6"} rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-2xl`}>
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">🌐</span> Interactive Bloch Sphere
            </h3>
            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-400 border border-cyan-500/20">
              Qubit State 3D
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click & drag to rotate view • Adjust angles to control qubit state vector
          </p>
        </div>

        <button
          onClick={() => {
            setViewRotationX(20);
            setViewRotationY(-30);
          }}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
          title="Reset 3D Camera"
        >
          <RotateCw className="h-4 w-4" />
        </button>
      </div>

      {/* Canvas & Telemetry Display */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* 3D Canvas Visualizer */}
        <div
          className="relative lg:col-span-7 flex items-center justify-center rounded-xl border border-indigo-500/20 bg-slate-950/60 p-4 cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <canvas
            ref={canvasRef}
            width={compact ? 320 : 380}
            height={compact ? 300 : 340}
            className="max-w-full drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          />
          <div className="absolute bottom-2 right-3 text-[10px] text-slate-400">
            Drag to Rotate View
          </div>
        </div>

        {/* State Telemetry & Probabilities */}
        <div className="lg:col-span-5 space-y-4">
          {/* Mathematical State Display */}
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              Quantum State Vector
            </span>
            <div className="mt-1 text-base sm:text-lg font-mono font-bold text-white">
              |ψ⟩ = cos({(theta / 2).toFixed(0)}°)|0⟩ + e^({phi}°i)sin({(theta / 2).toFixed(0)}°)|1⟩
            </div>
            <div className="mt-2 flex gap-4 text-xs font-mono text-slate-300">
              <span>θ = {theta}°</span>
              <span>φ = {phi}°</span>
            </div>
          </div>

          {/* Probability Breakdown */}
          <div className="space-y-3 rounded-xl border border-indigo-500/20 bg-slate-950/50 p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
              Measurement Probabilities
            </span>

            {/* |0> Probability */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-cyan-300">P(|0⟩ State)</span>
                <span className="font-mono text-cyan-400">{p0}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${p0}%` }}
                />
              </div>
            </div>

            {/* |1> Probability */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-purple-300">P(|1⟩ State)</span>
                <span className="font-mono text-purple-400">{p1}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                  style={{ width: `${p1}%` }}
                />
              </div>
            </div>
          </div>

          {/* State Presets */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Basis & Superposition Presets
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "|0⟩ (Ground)", val: "0" },
                { label: "|1⟩ (Excited)", val: "1" },
                { label: "|+⟩ (Equal +)", val: "+" },
                { label: "|-⟩ (Equal -)", val: "-" },
                { label: "|i⟩ (+Y Axis)", val: "i" },
                { label: "|-i⟩ (-Y Axis)", val: "-i" },
              ].map((preset) => (
                <button
                  key={preset.val}
                  onClick={() => setPreset(preset.val)}
                  className="rounded-lg border border-indigo-500/20 bg-indigo-950/40 px-2.5 py-1.5 text-xs font-mono text-indigo-200 transition hover:border-cyan-400 hover:bg-cyan-950/60 hover:text-cyan-200"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Angle Sliders */}
      {showControls && (
        <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-indigo-900/30">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
              <span>Polar Angle (θ - Superposition Ratio):</span>
              <span className="font-mono text-cyan-400">{theta}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="180"
              value={theta}
              onChange={(e) => setTheta(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
              <span>Azimuthal Phase (φ - Quantum Phase):</span>
              <span className="font-mono text-purple-400">{phi}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={phi}
              onChange={(e) => setPhi(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-purple-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
