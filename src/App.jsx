import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Bhoomika Gautam. All rights reserved.
          </p>
          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
