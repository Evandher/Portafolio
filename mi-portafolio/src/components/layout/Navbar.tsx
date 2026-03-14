import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-4 backdrop-blur-xl">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight text-white transition hover:text-cyan-400"
          >
            Evandher.dev
          </a>

          <div className="flex items-center gap-4">
            <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <li>
                <a href="#about" className="transition hover:text-white">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#skills" className="transition hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;