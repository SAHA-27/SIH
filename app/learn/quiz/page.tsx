"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Trophy, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  BookOpen, 
  HelpCircle
} from "lucide-react";
import confetti from "canvas-confetti";

interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topic: string;
}

const questions: Question[] = [
  {
    question: "What is the basic unit of quantum information?",
    options: ["Bit", "Qubit", "Byte", "Pixel"],
    answer: "Qubit",
    explanation:
      "A qubit (quantum bit) is the physical or mathematical two-level system that forms the foundational unit of quantum computation.",
    difficulty: "Beginner",
    topic: "Qubits",
  },
  {
    question: "Which concept allows a qubit to be in a linear combination of states simultaneously?",
    options: ["Encryption", "Superposition", "Compilation", "Networking"],
    answer: "Superposition",
    explanation:
      "Superposition enables a quantum state |ψ⟩ = α|0⟩ + β|1⟩ to exist in a linear combination until projective measurement occurs.",
    difficulty: "Beginner",
    topic: "Superposition",
  },
  {
    question: "Which quantum gate flips |0⟩ to |1⟩ and |1⟩ to |0⟩ (Quantum NOT)?",
    options: ["H Gate", "Z Gate", "X Gate", "Y Gate"],
    answer: "X Gate",
    explanation:
      "The Pauli-X gate acts as a bit-flip operator: X|0⟩ = |1⟩ and X|1⟩ = |0⟩, rotating the state by π radians around the X-axis of the Bloch Sphere.",
    difficulty: "Intermediate",
    topic: "Quantum Gates",
  },
  {
    question: "What is quantum entanglement?",
    options: [
      "A type of classical bit",
      "A non-local connection between quantum states",
      "A programming language",
      "A computer memory",
    ],
    answer: "A non-local connection between quantum states",
    explanation:
      "Entangled particles exhibit correlated physical properties such that the quantum state of each particle cannot be described independently.",
    difficulty: "Intermediate",
    topic: "Entanglement",
  },
  {
    question: "What does quantum measurement give us?",
    options: [
      "A classical result",
      "A new qubit",
      "A quantum gate",
      "A programming language",
    ],
    answer: "A classical result",
    explanation:
      "Measurement in the computational basis collapses the quantum superposition into a definitive classical bit (0 or 1) with probabilities |α|² and |β|².",
    difficulty: "Intermediate",
    topic: "Measurement",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    { question: string; selected: string; correct: string; isCorrect: boolean; explanation: string }[]
  >([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Timer countdown per question
  useEffect(() => {
    if (finished || isAnswered) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current, isAnswered, finished]);

  // Handle timeout
  const handleTimeout = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption("Time Out");
    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: "Timed Out",
        correct: questions[current].answer,
        isCorrect: false,
        explanation: questions[current].explanation,
      },
    ]);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === questions[current].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: option,
        correct: questions[current].answer,
        isCorrect,
        explanation: questions[current].explanation,
      },
    ]);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(30);
    } else {
      setFinished(true);
      // Trigger celebratory confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#a855f7", "#6366f1", "#10b981"],
      });
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setFinished(false);
    setTimeLeft(30);
  };

  const currentQ = questions[current];
  const progressPercent = ((current + 1) / questions.length) * 100;
  const accuracy = Math.round((score / questions.length) * 100);

  // Results Screen
  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto w-full">
        <div className="w-full rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl text-center">
          {/* Trophy Header */}
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-lg shadow-cyan-500/30">
            <Trophy className="h-10 w-10 text-white" />
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-amber-300 animate-bounce" />
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white">
            🎉 Quiz Completed!
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            You have successfully completed the Quantum Explorer Knowledge Assessment.
          </p>

          {/* Score Stats Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-indigo-900/50 bg-slate-950/70 p-4">
              <span className="text-xs text-slate-400">Total Score</span>
              <div className="mt-1 text-3xl font-black text-cyan-400 font-mono">
                {score} / {questions.length}
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-900/50 bg-slate-950/70 p-4">
              <span className="text-xs text-slate-400">Accuracy</span>
              <div className="mt-1 text-3xl font-black text-emerald-400 font-mono">
                {accuracy}%
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-900/50 bg-slate-950/70 p-4">
              <span className="text-xs text-slate-400">XP Earned</span>
              <div className="mt-1 text-3xl font-black text-amber-400 font-mono">
                +{score * 25} XP
              </div>
            </div>
          </div>

          {/* Achievement Unlocked Card */}
          {accuracy >= 80 && (
            <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 max-w-xl mx-auto">
              <Award className="h-7 w-7 text-amber-400 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                  Achievement Unlocked!
                </span>
                <span className="text-sm font-semibold text-white">
                  Quantum Prodigy • Mastered foundational concepts with &gt;80% accuracy
                </span>
              </div>
            </div>
          )}

          {/* Answer Breakdown & Explanations */}
          <div className="mt-8 text-left border-t border-indigo-950 pt-6">
            <h3 className="text-base font-bold text-white mb-4">
              Detailed Answer Review
            </h3>
            <div className="space-y-4">
              {userAnswers.map((ans, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border p-4 ${
                    ans.isCorrect
                      ? "border-emerald-500/30 bg-emerald-950/20"
                      : "border-red-500/30 bg-red-950/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">
                      {idx + 1}. {ans.question}
                    </h4>
                    {ans.isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 shrink-0">
                        <CheckCircle2 className="h-4 w-4" /> Correct
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-semibold text-red-400 shrink-0">
                        <XCircle className="h-4 w-4" /> Incorrect
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-xs space-y-1 text-slate-300">
                    <div>
                      <span className="text-slate-400">Your Answer:</span>{" "}
                      <span className={ans.isCorrect ? "text-emerald-300 font-semibold" : "text-red-300 font-semibold"}>
                        {ans.selected}
                      </span>
                    </div>
                    {!ans.isCorrect && (
                      <div>
                        <span className="text-slate-400">Correct Answer:</span>{" "}
                        <span className="text-emerald-300 font-semibold">{ans.correct}</span>
                      </div>
                    )}
                    <p className="mt-1 text-slate-400 leading-relaxed italic">
                      💡 {ans.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-slate-900 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-slate-800 transition"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retake Quiz</span>
            </button>

            <Link
              href="/learn"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20"
            >
              <BookOpen className="h-4 w-4" />
              <span>Back to Learning Modules</span>
            </Link>

            <Link
              href="/simulator"
              className="flex items-center gap-2 rounded-xl border border-purple-500/40 bg-slate-900 px-6 py-3 text-sm font-semibold text-purple-300 hover:bg-slate-800 transition"
            >
              <span>Test in Simulator</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Question Screen
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8 py-10 max-w-3xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Learning
        </Link>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-indigo-500/10 px-3 py-0.5 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            {currentQ.topic}
          </span>
          <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
            {currentQ.difficulty}
          </span>
        </div>
      </div>

      {/* Progress & Timer Bar */}
      <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/60 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
          <span>Question {current + 1} of {questions.length}</span>
          <span className="flex items-center gap-1 text-cyan-400 font-mono">
            <Clock className="h-3.5 w-3.5" /> {timeLeft}s remaining
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl border border-indigo-900/50 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Topic: {currentQ.topic}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQ.answer;

            let buttonStyle = "border-slate-800 bg-slate-950/60 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/80";

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = "border-emerald-500 bg-emerald-950/50 text-emerald-200 shadow-md shadow-emerald-950/50";
              } else if (isSelected) {
                buttonStyle = "border-red-500 bg-red-950/50 text-red-200";
              } else {
                buttonStyle = "border-slate-800 bg-slate-950/30 text-slate-500 opacity-60";
              }
            }

            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                disabled={isAnswered}
                className={`w-full flex items-center justify-between rounded-xl border p-4 text-left font-medium transition duration-200 ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-xs font-mono font-bold text-cyan-400">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base">{option}</span>
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Explanation Feedback */}
        {isAnswered && (
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-4 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <Sparkles className="h-4 w-4" />
              <span>Explanation & Key Insight</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Next Question / Finish Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
            >
              <span>{current + 1 < questions.length ? "Next Question" : "Complete Quiz"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
