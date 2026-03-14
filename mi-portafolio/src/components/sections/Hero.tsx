const Hero = () => {
  return (
    <section id="home" className="flex min-h-[90vh] items-center">
      <div className="w-full">
        
        {/* Texto principal */}
        <p className="mb-4 text-sm uppercase tracking-widest text-slate-400">
          Desarrollador de Software
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Hola, soy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Evandher</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-400">
          Desarrollador Full Stack con experiencia en aplicaciones empresariales, 
          arquitectura backend y despliegue en la nube. Me especializo en crear 
          soluciones modernas, eficientes y escalables.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Contactarme
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;