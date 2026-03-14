import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center">
      <div className="w-full max-w-3xl">

        {/* Glow decorativo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Rol */}
        <p
          className="mb-4 text-sm uppercase tracking-widest"
          style={{ color: "var(--muted)" }}
        >
          Desarrollador de Software
        </p>

        {/* Nombre */}
        <h1
          className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          style={{ color: "var(--heading)" }}
        >
          Hola, soy{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Evandher Abad
          </span>
        </h1>

        {/* Descripción */}
        <p
          className="mb-8 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--muted)" }}
        >
          Desarrollador Full Stack con experiencia en aplicaciones empresariales,
          arquitectura backend y despliegue en la nube. Me especializo en crear
          soluciones modernas, eficientes y escalables.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          <Button href="#projects">Ver proyectos</Button>

          <Button href="#contact" variant="secondary">
            Contactarme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;