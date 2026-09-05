const stats = [
  {
    title: "Overall Progress",
    value: "65%",
    icon: "📈",
  },
  {
    title: "Lessons Completed",
    value: "4 / 6",
    icon: "📚",
  },
  {
    title: "Quiz Score",
    value: "80%",
    icon: "🧠",
  },
  {
    title: "Total Points",
    value: "120",
    icon: "⭐",
  },
];

const recentLessons = [
  {
    title: "Quantum Basics",
    status: "Completed",
  },
  {
    title: "Qubits",
    status: "Completed",
  },
  {
    title: "Superposition",
    status: "Completed",
  },
  {
    title: "Quantum Gates",
    status: "In Progress",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          Student Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Track your quantum learning journey.
        </p>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >

              <div className="text-3xl">
                {stat.icon}
              </div>

              <p className="mt-4 text-sm text-slate-400">
                {stat.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                {stat.value}
              </h2>

            </div>
          ))}

        </div>

        {/* Progress */}

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold">
            Learning Progress
          </h2>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[65%] rounded-full bg-cyan-500"></div>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            You have completed 65% of the learning modules.
          </p>

        </section>

        {/* Recent Lessons */}

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold">
            Recent Lessons
          </h2>

          <div className="mt-5 space-y-4">

            {recentLessons.map((lesson) => (
              <div
                key={lesson.title}
                className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
              >

                <span className="font-semibold">
                  {lesson.title}
                </span>

                <span className="text-sm text-cyan-400">
                  {lesson.status}
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href="/learn"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
          >
            📚 Continue Learning
          </a>

          <a
            href="/learn/quiz"
            className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400"
          >
            🧠 Take Quiz
          </a>

        </div>

      </div>

    </main>
  );
}
