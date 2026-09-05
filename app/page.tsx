export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          Quantum Explorer
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-400">
            Home
          </a>
          <a href="/learn" className="hover:text-cyan-400">
            Learn
          </a>
          <a href="/dashboard" className="hover:text-cyan-400">
            Dashboard
          </a>
          <a href="/simulator" className="hover:text-cyan-400">
            Simulator
          </a>
          <a href="/learn/quiz" className="hover:text-cyan-400">
            Quiz
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-cyan-400 text-lg">
          🚀 Learn • Build • Simulate • Explore
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight">
          Explore the World of
          <span className="text-cyan-400"> Quantum Computing</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Learn quantum concepts, build quantum circuits,
          run simulations and test your knowledge in an
          interactive learning platform.
        </p>

        <div className="mt-8 flex gap-4">
          <a
  href="/learn"
  className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
           >
  Start Learning
</a>
          <a
  href="/simulator"
  className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
>
  Explore Simulator
</a>

        </div>

      </section>

      {/* Features */}
      <section className="px-8 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold">
          What You Can Explore
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

          <Feature
            emoji="📚"
            title="Quantum Learning"
            description="Understand qubits, superposition, entanglement and quantum gates."
          />

          <Feature
            emoji="⚛️"
            title="Circuit Builder"
            description="Create quantum circuits using an interactive drag-and-drop interface."
          />

          <Feature
            emoji="🔬"
            title="Quantum Simulator"
            description="Run your circuits and observe quantum measurement results."
          />

          <Feature
            emoji="🌐"
            title="Bloch Sphere"
            description="Visualize the state of a qubit in an interactive 3D representation."
          />

          <Feature
            emoji="🤖"
            title="AI Quantum Tutor"
            description="Ask questions and get simple explanations while learning."
          />

          <Feature
            emoji="🏆"
            title="Quizzes & Challenges"
            description="Test your knowledge, earn points and unlock achievements."
          />

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        Quantum Explorer • SIH 2026
      </footer>

    </main>
  );
}

function Feature({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}
