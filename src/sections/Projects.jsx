import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const projectStyles = [
  { number: '01', accent: 'from-violet-500/20 to-fuchsia-500/5' },
  { number: '02', accent: 'from-cyan-500/20 to-blue-500/5' },
  { number: '03', accent: 'from-emerald-500/20 to-teal-500/5' },
  { number: '04', accent: 'from-amber-500/20 to-orange-500/5' },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Selected work
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects with
              <br />
              <span className="text-zinc-500">purpose and impact.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-400">
            A selection of analytics dashboards and software applications
            demonstrating my approach to solving practical problems with data
            and technology.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => {
            const style = projectStyles[index] ?? projectStyles[0];

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div
                  className={`relative flex min-h-48 items-center justify-between overflow-hidden bg-gradient-to-br ${style.accent} p-8`}
                >
                  <span className="text-7xl font-bold tracking-tighter text-white/10 sm:text-8xl">
                    {style.number}
                  </span>

                  <span className="max-w-48 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-right text-xs font-medium text-zinc-200 backdrop-blur-sm">
                    {project.category}
                  </span>

                  <div className="pointer-events-none absolute -bottom-16 right-10 h-40 w-40 rounded-full border border-white/10" />
                  <div className="pointer-events-none absolute -bottom-10 right-16 h-28 w-28 rounded-full border border-white/10" />
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open GitHub for ${project.title}`}
                      className="shrink-0 rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-400/50 hover:text-white"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                  >
                    <ArrowUpRight size={16} />
                    View on GitHub
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
