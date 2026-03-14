import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const featuredProject = {
  title: "Sistema de Avaluos Inmobiliarios",
    description:
      "Sistema desarrollado con GeneXus para gestionar avalúos inmobiliarios, propiedades, clientes y generación de reportes.",
    tech: ["GeneXus", "SQL Server", "Web"],
    github: "#",
    demo: "#",
};

const projects = [
  {
   title: "MoneyFlow",
    description:
      "Aplicación para gestionar finanzas personales con dashboards, análisis de gastos y visualización de datos financieros. Diseñada para ayudar a los usuarios a entender y optimizar sus hábitos financieros.",
    tech: ["React", "PostgreSQL", "Charts"],
    github: "#",
    demo: "#", 
  },
  {
    title: "Discord ChatGPT Bot",
    description:
      "Bot de Discord que integra ChatGPT para responder preguntas, moderar chats y ofrecer automatizaciones dentro del servidor.",
    tech: ["Node.js", "Discord API"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle
        label="Proyectos"
        title="Algunas cosas que he construido"
        description="Una selección de proyectos personales y profesionales que reflejan mi experiencia en frontend, backend y soluciones empresariales."
      />

      {/* Proyecto destacado */}
      <GlassCard className="mb-10 hover:-translate-y-1">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
              Proyecto destacado
            </span>

            <h3
              className="mb-4 text-2xl font-semibold"
              style={{ color: "var(--heading)" }}
            >
              {featuredProject.title}
            </h3>

            <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
              {featuredProject.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md px-2 py-1 text-xs"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={featuredProject.github}
                className="text-sm text-cyan-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={featuredProject.demo}
                className="text-sm text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Espacio para screenshot del proyecto */}
          <div className="flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 text-sm text-slate-400">
            Screenshot del proyecto
          </div>
        </div>
      </GlassCard>

      {/* Grid de proyectos */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.title} className="hover:-translate-y-1">
            <h3
              className="mb-3 text-xl font-semibold"
              style={{ color: "var(--heading)" }}
            >
              {project.title}
            </h3>

            <p className="mb-4" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md px-2 py-1 text-xs"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-sm text-cyan-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="text-sm text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;