import { ArrowDown, ArrowRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden px-5 py-24 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to entry-level opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300 sm:text-base">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {portfolio.name}
            <span className="text-violet-400">.</span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-zinc-300 sm:text-4xl">
            {portfolio.role}
            <span className="text-violet-400"> &amp; </span>
            Problem Solver
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I turn raw data into meaningful insights through interactive
            dashboards, analytical thinking, and technology-driven solutions.
            My work spans business analytics, healthcare reporting, and AI
            applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-400"
            >
              Explore my work <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-violet-400 hover:bg-white/5"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <span className="h-5 w-px bg-white/15" />

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              Discover more <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
