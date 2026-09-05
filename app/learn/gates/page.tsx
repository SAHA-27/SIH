export default function Gates() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn/superposition"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Previous Lesson
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Quantum Gates
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Learn how quantum gates change the state of qubits.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What are Quantum Gates?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Quantum gates are operations that change the state
            of one or more qubits. They are similar to logic
            gates in classical computing.
          </p>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-400">
              X Gate
            </h2>
            <p className="mt-3 text-slate-300">
              The X gate flips a qubit. It changes |0⟩ to |1⟩
              and |1⟩ to |0⟩.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-400">
              H Gate
            </h2>
            <p className="mt-3 text-slate-300">
              The Hadamard gate can create a superposition
              of |0⟩ and |1⟩.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-400">
              Y Gate
            </h2>
            <p className="mt-3 text-slate-300">
              The Y gate changes the state of a qubit with
              a rotation around the Y-axis.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-cyan-400">
              Z Gate
            </h2>
            <p className="mt-3 text-slate-300">
              The Z gate changes the phase of a qubit state.
            </p>
          </div>

        </section>

        <div className="mt-8 flex gap-4">

  <a
    href="/learn/superposition"
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
    href="/learn/entanglement"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Next Lesson →
  </a>

</div>
      </div>
    </main>
  );
}