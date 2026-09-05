"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Bot, 
  Send, 
  Sparkles, 
  X, 
  Atom, 
  Lightbulb, 
  RefreshCw, 
  User, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "tutor";
  text: string;
  timestamp: string;
  suggestedFollowUp?: string[];
}

const KNOWLEDGE_BASE: Record<string, { answer: string; followUps: string[] }> = {
  superposition: {
    answer:
      "Superposition is a fundamental principle of quantum mechanics. Unlike a classical bit that must strictly be either 0 or 1, a qubit in superposition can exist in a linear combination of both states simultaneously: |ψ⟩ = α|0⟩ + β|1⟩, where |α|² + |β|² = 1. When measured, it collapses into either 0 or 1 with probability determined by these amplitudes.",
    followUps: ["How does the Hadamard gate create superposition?", "What happens during measurement?", "Can we clone a superposition state?"],
  },
  qubit: {
    answer:
      "A qubit (quantum bit) is the basic unit of quantum information. While a classical bit can store a single binary state (0 or 1), a qubit is a two-level quantum mechanical system described as a point on the 3D Bloch Sphere. Qubits enable quantum parallelism and exponential state representation across multiple qubits (2ⁿ states).",
    followUps: ["What is the Bloch Sphere?", "How do multi-qubit systems work?", "What are physical qubits made of?"],
  },
  entanglement: {
    answer:
      "Quantum entanglement is a phenomenon where two or more qubits become inextricably interconnected such that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them. For example, in the Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2, measuring the first qubit instantly determines the state of the second.",
    followUps: ["How do we create a Bell state?", "What did Einstein mean by 'spooky action at a distance'?", "How is entanglement used in Quantum Teleportation?"],
  },
  gate: {
    answer:
      "Quantum gates are unitary operators that manipulate the quantum states of qubits. Common gates include:\n• X Gate (Bit Flip): Inverts |0⟩ ↔ |1⟩ (Quantum NOT)\n• H Gate (Hadamard): Creates equal superposition (|0⟩ → |+⟩)\n• Z Gate (Phase Flip): Changes the sign of |1⟩ (|1⟩ → -|1⟩)\n• CNOT (Controlled-NOT): Flips the target qubit if the control qubit is |1⟩, generating entanglement.",
    followUps: ["What is the CNOT gate?", "Why must quantum gates be reversible?", "What is a universal quantum gate set?"],
  },
  bloch: {
    answer:
      "The Bloch Sphere is a geometrical representation of the pure state space of a 2-level quantum mechanical system (qubit). The North pole represents |0⟩, the South pole represents |1⟩, and the equator represents superpositions with equal probabilities (like |+⟩ and |-⟩). The angles θ (polar) and φ (azimuthal) define the state vector |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩.",
    followUps: ["How do gates rotate the state on the Bloch Sphere?", "What is the meaning of theta and phi?", "Can multi-qubit systems use a Bloch Sphere?"],
  },
  cnot: {
    answer:
      "The CNOT (Controlled-NOT) gate is a 2-qubit gate. If the control qubit is |0⟩, the target qubit remains unchanged. If the control qubit is |1⟩, the target qubit is flipped (NOT applied). When combined with a Hadamard gate on the control qubit, CNOT generates maximum entanglement (Bell States).",
    followUps: ["How does CNOT generate Bell States?", "Is CNOT reversible?", "What is the truth table of CNOT?"],
  },
  measurement: {
    answer:
      "Quantum measurement is the irreversible process of observing a quantum state. According to the Born rule, measuring a qubit |ψ⟩ = α|0⟩ + β|1⟩ yields outcome 0 with probability |α|² and outcome 1 with probability |β|², causing the quantum wave function to immediately collapse into that measured basis state.",
    followUps: ["Why does measurement collapse the state?", "Can we measure without destroying superposition?", "What is the computational basis?"],
  },
};

export default function AITutorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "tutor",
      text: "Hello, Quantum Explorer! ⚛️ I'm your AI Quantum Tutor. Ask me anything about qubits, superposition, quantum gates, circuits, or the Bloch Sphere.",
      timestamp: "Just now",
      suggestedFollowUp: [
        "What is superposition?",
        "How does the CNOT gate create entanglement?",
        "Explain the Bloch Sphere",
        "What happens during quantum measurement?",
      ],
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Listen for custom open event
  useEffect(() => {
    const handleOpenTutor = () => setIsOpen(true);
    window.addEventListener("open-ai-tutor", handleOpenTutor);
    return () => window.removeEventListener("open-ai-tutor", handleOpenTutor);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (queryText?: string) => {
    const query = (queryText || inputQuery).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery("");
    setIsTyping(true);

    // AI Response generation
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedKey = "";
      if (lower.includes("superposition")) matchedKey = "superposition";
      else if (lower.includes("qubit") || lower.includes("quantum bit")) matchedKey = "qubit";
      else if (lower.includes("entangle") || lower.includes("bell state")) matchedKey = "entanglement";
      else if (lower.includes("cnot") || lower.includes("controlled")) matchedKey = "cnot";
      else if (lower.includes("gate") || lower.includes("hadamard") || lower.includes("pauli")) matchedKey = "gate";
      else if (lower.includes("bloch") || lower.includes("sphere")) matchedKey = "bloch";
      else if (lower.includes("measure") || lower.includes("collapse")) matchedKey = "measurement";

      let responseText = "";
      let followUps: string[] = [];

      if (matchedKey && KNOWLEDGE_BASE[matchedKey]) {
        responseText = KNOWLEDGE_BASE[matchedKey].answer;
        followUps = KNOWLEDGE_BASE[matchedKey].followUps;
      } else {
        responseText = `In quantum computing, "${query}" connects directly to quantum mechanical principles. In our Quantum Explorer platform, you can experiment with this concept directly in the Circuit Simulator or review the step-by-step interactive modules under the Learn tab. Would you like to explore how this applies to quantum circuits or mathematical state vectors?`;
        followUps = [
          "How does this relate to quantum gates?",
          "Can I simulate this in the Circuit Builder?",
          "Show me the mathematical representation",
        ];
      }

      const tutorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "tutor",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedFollowUp: followUps,
      };

      setMessages((prev) => [...prev, tutorMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-600/90 to-indigo-600/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-cyan-400/40"
        title="Open AI Quantum Tutor"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
        </span>
        <Bot className="h-5 w-5 text-cyan-200" />
        <span className="hidden sm:inline">AI Quantum Tutor</span>
      </button>

      {/* Tutor Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-3 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Window */}
          <div className="relative z-10 flex h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#090e29] shadow-2xl shadow-cyan-950/80">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-indigo-900/50 bg-[#0c143d] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/30">
                  <Atom className="h-6 w-6 text-white animate-spin-slow" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">AI Quantum Tutor</h3>
                    <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-400/30">
                      GPT-Quantum
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online & Ready to explain quantum physics
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center gap-2 mb-1 px-1">
                    {msg.sender === "user" ? (
                      <span className="text-[11px] text-slate-400">You • {msg.timestamp}</span>
                    ) : (
                      <span className="text-[11px] text-cyan-400 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Quantum Tutor • {msg.timestamp}
                      </span>
                    )}
                  </div>

                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/40"
                        : "border border-indigo-500/20 bg-slate-900/90 text-slate-200 backdrop-blur-md shadow-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Follow-up Prompts */}
                  {msg.suggestedFollowUp && msg.suggestedFollowUp.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {msg.suggestedFollowUp.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          className="flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-950/60 px-3 py-1 text-xs text-indigo-300 transition-colors hover:border-cyan-400 hover:bg-cyan-950/60 hover:text-cyan-200"
                        >
                          <ArrowRight className="h-3 w-3 text-cyan-400" />
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1.5 rounded-2xl border border-indigo-500/20 bg-slate-900/90 px-4 py-3 text-sm text-cyan-300">
                    <Atom className="h-4 w-4 animate-spin text-cyan-400" />
                    <span>Analyzing quantum states...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="border-t border-indigo-900/40 bg-[#0c143d]/90 p-3 sm:p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask a question about quantum computing..."
                  className="flex-1 rounded-xl border border-indigo-500/30 bg-slate-900/90 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-semibold transition hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-500/20"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2 text-center text-[10px] text-slate-400">
                SIH 2026 AI Quantum Knowledge Engine • Instant Explanations
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
