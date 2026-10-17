import { GraduationCap, Award, CalendarDays } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IILM University, Greater Noida',
    period: '2023 – 2026',
    result: `CGPA: ${portfolio.cgpa}`,
  },
  {
    degree: 'Class 10th & 12th — Science Stream',
    institution: 'Sun Valley International School',
    period: 'School education',
    result: 'Class 10th: 92% · Class 12th: 75%',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Academic background
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education &
            <br />
            <span className="text-zinc-500">continuous learning.</span>
          </h2>

          <div className="mt-10 space-y-5">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex gap-4">
                  <div className="h-fit rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <GraduationCap size={23} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      {item.institution}
                    </p>

                    <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.period}
                    </p>

                    <p className="mt-3 text-sm font-medium text-violet-300">
                      {item.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Certifications
          </p>

          <h3 className="mt-5 text-3xl font-bold tracking-tight text-white">
            Building practical knowledge.
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            Courses that complement my academic background and technical skills.
          </p>

          <div className="mt-8 space-y-3">
            {portfolio.certifications.map((certification) => (
              <div
                key={certification}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/30"
              >
                <div className="rounded-lg bg-violet-400/10 p-2 text-violet-300">
                  <Award size={20} aria-hidden="true" />
                </div>

                <p className="pt-1 text-sm font-medium leading-6 text-zinc-200">
                  {certification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
