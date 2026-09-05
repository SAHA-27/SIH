const modules = [
  {
    title: "Quantum Basics",
    description:
      "Learn what quantum computing is and how it is different from classical computing.",
    level: "Beginner",
    icon: "⚛️",
    link: "/learn/basics",
  },
  {
    title: "Qubits",
    description:
      "Understand qubits, the basic unit of quantum information.",
    level: "Beginner",
    icon: "🔵",
    link: "/learn/qubits",
  },
  {
    title: "Superposition",
    description:
      "Learn how a qubit can exist in a combination of states.",
    level: "Beginner",
    icon: "🌌",
    link: "/learn/superposition",
  },
  {
    title: "Quantum Gates",
    description:
      "Explore X, Y, Z, H and other important quantum gates.",
    level: "Intermediate",
    icon: "🔲",
    link: "/learn/gates",
  },
  {
    title: "Entanglement",
    description:
      "Discover how quantum particles can become connected.",
    level: "Intermediate",
    icon: "🔗",
    link: "/learn/entanglement",
  },
  {
    title: "Measurement",
    description:
      "Understand how quantum states are measured.",
    level: "Intermediate",
    icon: "📊",
    link: "/learn/measurement",
  },
];

export default function Learn() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          Quantum Learning
        </h1>

        <p className="mt-3 text-slate-400">
          Learn quantum computing step by step.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500"
            >

              <div className="text-4xl">
                {module.icon}
              </div>

              <h2 className="mt-4 text-xl font-bold">
                {module.title}
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                {module.description}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                  {module.level}
                </span>

                <a
                  href={module.link}
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950"
                >
                  Start
                </a>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 text-center">
          <a
            href="/learn/quiz"
            className="inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
          >
            🧠 Take Quantum Quiz
          </a>
        </div>

      </div>

    </main>
  );
}
