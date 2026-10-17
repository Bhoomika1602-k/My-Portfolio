import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const contactLinks = [
  {
    label: 'Email',
    value: portfolio.social.email,
    href: `mailto:${portfolio.social.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: portfolio.social.linkedin,
    icon: ArrowUpRight,
  },
  {
    label: 'GitHub',
    value: 'Explore my repositories',
    href: portfolio.social.github,
    icon: ArrowUpRight,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Get in touch
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Let's create
                <br />
                <span className="text-zinc-500">something meaningful.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                I'm interested in entry-level opportunities where I can apply
                my analytical skills, contribute to meaningful projects, and
                continue learning. Feel free to connect with me.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
                <MapPin size={18} className="text-violet-300" />
                {portfolio.location}
              </div>

              <a
                href={`mailto:${portfolio.social.email}`}
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-400"
              >
                Send me an email <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
                >
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-1 break-words text-sm text-zinc-400">
                      {value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
