import { GraduationCap, Database, ChartNoAxesCombined, Code2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Strong academic foundation',
    description: `BCA graduate from IILM University with a CGPA of ${portfolio.cgpa}.`,
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Business intelligence',
    description: 'Build interactive dashboards, define KPIs, and communicate insights using Power BI and Tableau.',
  },
  {
    icon: Database,
    title: 'Data analytics',
    description: 'Work with SQL, Python, and Excel for data cleaning, exploration, and analysis.',
  },
  {
    icon: Code2,
    title: 'Technology-driven solutions',
    description: 'Combine programming and web technologies to develop practical applications.',
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            About me
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Curious mind.
            <br />
            <span className="text-zinc-500">Analytical thinking.</span>
          </h2>

          <p className="mt-7 leading-8 text-zinc-400">
            {portfolio.summary}
          </p>

          <p className="mt-5 leading-8 text-zinc-400">
            I enjoy solving problems through data, building clear visualizations,
            and developing technology solutions that make information easier to
            understand and act on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              {portfolio.education}
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              CGPA: {portfolio.cgpa}
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.04]"
            >
              <div className="mb-5 inline-flex rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
                <Icon size={23} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-white">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
