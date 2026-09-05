export default function Superposition() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn/qubits"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Previous Lesson
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Superposition
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Learn how a qubit can exist in a combination of quantum states.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is Superposition?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Superposition is a fundamental concept in quantum
            computing. It allows a qubit to exist in a combination
            of the |0⟩ and |1⟩ states.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Simple Example
          </h2>

          <div className="mt-5 rounded-lg bg-slate-800 p-6 text-center">
            <p className="text-2xl text-cyan-400">
              |ψ⟩ = α|0⟩ + β|1⟩
            </p>

            <p className="mt-4 text-slate-300">
              A qubit can be represented as a combination of
              the |0⟩ and |1⟩ states.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Why is it Useful?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Superposition allows quantum computers to process
            information in ways that are different from classical
            computers.
          </p>
        </section>

        <div className="mt-8 flex gap-4">

  <a
    href="/learn/qubits"
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
    href="/learn/gates"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    Next Lesson →
  </a>

</div>

      </div>
    </main>
  );
}
