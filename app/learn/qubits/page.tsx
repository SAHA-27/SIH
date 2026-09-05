export default function Qubits() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn/basics"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Previous Lesson
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Qubits
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Understand the basic unit of quantum information.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is a Qubit?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            A qubit, or quantum bit, is the basic unit of
            information in a quantum computer.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            A classical bit can be either 0 or 1. A qubit can
            represent a quantum state involving both 0 and 1.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Qubit States
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-800 p-5">
              <h3 className="text-xl font-semibold text-cyan-400">
                |0⟩ State
              </h3>
              <p className="mt-3 text-slate-300">
                Represents the basic quantum state 0.
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-5">
              <h3 className="text-xl font-semibold text-cyan-400">
                |1⟩ State
              </h3>
              <p className="mt-3 text-slate-300">
                Represents the basic quantum state 1.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Why are Qubits Important?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Qubits allow quantum computers to use quantum
            effects such as superposition and entanglement.
          </p>
        </section>

        <div className="mt-8 flex gap-4">

  <a
    href="/learn/basics"
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
    href="/learn/superposition"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Next Lesson →
  </a>

</div>


      </div>
    </main>
  );
}