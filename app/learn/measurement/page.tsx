export default function Measurement() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/learn/entanglement"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Previous Lesson
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          Quantum Measurement
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Learn how we observe the state of a qubit.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is Measurement?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Quantum measurement is the process of observing
            a quantum state and obtaining a classical result.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            When a qubit is measured in the computational basis,
            the result is usually either 0 or 1.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Measurement Results
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-lg bg-slate-800 p-5 text-center">
              <div className="text-4xl">0️⃣</div>
              <h3 className="mt-3 text-xl font-semibold text-cyan-400">
                Result 0
              </h3>
              <p className="mt-2 text-slate-300">
                The qubit is measured as the |0⟩ state.
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-5 text-center">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-3 text-xl font-semibold text-cyan-400">
                Result 1
              </h3>
              <p className="mt-2 text-slate-300">
                The qubit is measured as the |1⟩ state.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Why is Measurement Important?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Measurement converts quantum information into a
            classical result that a computer can record and use.
          </p>
        </section>

        <div className="mt-8 flex gap-4">

  <a
    href="/learn/entanglement"
    className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400"
  >
    ← Previous
  </a>

  <a
    href="/learn"
    className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
  >
    🎉 Finish Learning
  </a>

</div>
      </div>
    </main>
  );
}