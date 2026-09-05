export default function Entanglement() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn/gates"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Previous Lesson
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Quantum Entanglement
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Learn how qubits can become strongly connected with each other.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is Entanglement?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Quantum entanglement is a quantum phenomenon where
            two or more qubits share a connected quantum state.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The state of one qubit is related to the state of
            another, even when they are considered separately.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Simple Example
          </h2>

          <div className="mt-5 rounded-lg bg-slate-800 p-6 text-center">
            <p className="text-2xl text-cyan-400">
              Two Entangled Qubits
            </p>

            <p className="mt-4 text-slate-300">
              When two qubits are entangled, their measurement
              outcomes can show strong correlations.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Why is it Important?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>🔗 Quantum communication</li>
            <li>⚛️ Quantum computing</li>
            <li>🔐 Quantum cryptography</li>
            <li>🔬 Quantum research</li>
          </ul>
        </section>

        <div className="mt-8 flex gap-4">

  <a
    href="/learn/gates"
    className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400"
  >
    ← Previous
  </a>

  <a
    href="/learn"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Back to Modules
  </a>

  <a
    href="/learn/measurement"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Next Lesson →
  </a>

</div>

      </div>
    </main>
  );
}
