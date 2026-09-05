"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is the basic unit of quantum information?",
    options: ["Bit", "Qubit", "Byte", "Pixel"],
    answer: "Qubit",
  },
  {
    question: "Which concept allows a qubit to be in a combination of states?",
    options: ["Encryption", "Superposition", "Compilation", "Networking"],
    answer: "Superposition",
  },
  {
    question: "Which gate flips |0⟩ to |1⟩?",
    options: ["H Gate", "Z Gate", "X Gate", "Y Gate"],
    answer: "X Gate",
  },
  {
    question: "What is quantum entanglement?",
    options: [
      "A type of classical bit",
      "A connection between quantum states",
      "A programming language",
      "A computer memory",
    ],
    answer: "A connection between quantum states",
  },
  {
    question: "What does measurement give us?",
    options: [
      "A classical result",
      "A new qubit",
      "A quantum gate",
      "A programming language",
    ],
    answer: "A classical result",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(option: string) {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="text-4xl font-bold text-cyan-400">
            🎉 Quiz Completed!
          </h1>

          <p className="mt-6 text-2xl">
            Your Score: {score} / {questions.length}
          </p>

          <a
            href="/learn"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
          >
            Back to Learning
          </a>

        </div>
      </main>
    );
  }

  const question = questions[current];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">

        <a
          href="/learn"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Learning
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Quantum Quiz
        </h1>

        <p className="mt-3 text-slate-400">
          Question {current + 1} of {questions.length}
        </p>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-bold">
            {question.question}
          </h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-left hover:border-cyan-500 hover:text-cyan-400"
              >
                {option}
              </button>
            ))}
          </div>

        </section>

      </div>
    </main>
  );
}
