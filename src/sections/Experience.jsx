import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          Professional journey
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Experience &
          <br />
          <span className="text-zinc-500">real-world learning.</span>
        </h2>

        <div className="mt-12 space-y-6">
          {portfolio.experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-violet-400/40 sm:p-9"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="h-fit w-fit rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4 text-violet-300">
                  <BriefcaseBusiness size={28} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {item.role}
                    </h3>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-2 text-lg text-violet-300">
                    {item.company}
                  </p>

                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500">
                    <CalendarDays size={16} aria-hidden="true" />
                    {item.duration}
                  </p>

                  <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      'Data Analysis',
                      'Data Visualization',
                      'Reporting',
                      'Analytical Problem-Solving',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
