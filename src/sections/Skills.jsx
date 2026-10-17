import {
  ChartNoAxesCombined,
  Code2,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Data Analytics',
    description: 'Transforming raw data into business insights',
    icon: ChartNoAxesCombined,
    skills: ['Power BI', 'Tableau', 'Advanced Excel', 'DAX', 'KPI Design'],
  },
  {
    title: 'Programming',
    description: 'Working with data and application logic',
    icon: Code2,
    skills: ['Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Data Fundamentals',
    description: 'Preparing, exploring, and understanding data',
    icon: Database,
    skills: ['Data Cleaning', 'EDA', 'Data Visualization', 'Data Warehousing'],
  },
  {
    title: 'AI & Computer Vision',
    description: 'Building AI-powered application experiences',
    icon: BrainCircuit,
    skills: ['DeepFace', 'OpenCV', 'Flask', 'Classification'],
  },
  {
    title: 'Tools & Workflow',
    description: 'Tools used to develop and manage projects',
    icon: Wrench,
    skills: ['GitHub', 'GitHub Codespaces', 'VS Code', 'Google Colab'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Technical toolkit
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills that turn
            <br />
            <span className="text-zinc-500">data into direction.</span>
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            My technical toolkit combines analytics, programming, visualization,
            and application development to solve practical problems.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, description, icon: Icon, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div className="mb-5 inline-flex rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
                <Icon size={23} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-white">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
