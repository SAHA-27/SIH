export default function Basics() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Learning
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Quantum Basics
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Learn the basic ideas behind quantum computing.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is Quantum Computing?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Quantum computing is a type of computing that uses
            quantum principles to process information.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            Unlike classical computers that use bits, quantum
            computers use quantum bits called qubits.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Classical Bit vs Qubit
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-lg bg-slate-800 p-5">
              <h3 className="text-xl font-semibold text-cyan-400">
                Classical Bit
              </h3>
              <p className="mt-3 text-slate-300">
                A classical bit can have either 0 or 1.
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-5">
              <h3 className="text-xl font-semibold text-cyan-400">
                Qubit
              </h3>
              <p className="mt-3 text-slate-300">
                A qubit can exist in a quantum superposition
                of 0 and 1.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What You Will Learn
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>⚛️ Qubits</li>
            <li>🌌 Superposition</li>
            <li>🔲 Quantum Gates</li>
            <li>🔗 Entanglement</li>
            <li>📊 Measurement</li>
          </ul>
        </section>

       <div className="mt-8">
  <a
    href="/learn"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Back to Modules
  </a>
</div>

<div className="mt-6">
  <a
    href="/learn/qubits"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Next Lesson →
  </a>
</div>


      </div>
    </main>
  );
}