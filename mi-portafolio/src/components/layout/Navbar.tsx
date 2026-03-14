const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
          
          {/* Logo / Nombre */}
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Evandher.dev
          </a>

          {/* Links */}
          <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
            <li><a href="#about" className="hover:text-white">Sobre mí</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;