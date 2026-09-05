export default function Simulator() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        <a
          href="/"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl font-bold text-cyan-400">
          ⚛️ Quantum Simulator
        </h1>

        <p className="mt-3 text-slate-400">
          Build and explore simple quantum circuits.
        </p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Quantum Circuit
          </h2>

          <div className="mt-6 rounded-lg bg-slate-800 p-8 text-center">
            <p className="text-slate-400">
              Qubit 0
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="rounded-lg border border-cyan-500 px-6 py-3 text-cyan-400">
                |0⟩
              </span>

              <span className="text-2xl">→</span>

              <span className="rounded-lg border border-purple-500 px-6 py-3 text-purple-400">
                H
              </span>

              <span className="text-2xl">→</span>

              <span className="rounded-lg border border-green-500 px-6 py-3 text-green-400">
                Measure
              </span>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Simulation Result
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-800 p-5">
              <p className="text-slate-400">State</p>
              <p className="mt-2 text-2xl font-bold text-cyan-400">
                Superposition
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-5">
              <p className="text-slate-400">Measurement</p>
              <p className="mt-2 text-2xl font-bold text-cyan-400">
                0 / 1
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
