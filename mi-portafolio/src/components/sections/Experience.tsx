import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const experience = [
  {
    title: "Analista Programador",
    company: "Kbits Internacional S.A.",
    period: "2024 - Present",
    description: [
      "Desarrollo de aplicaciones web empresariales con GeneXus.",
      "Participación en el ciclo completo de desarrollo: análisis, construcción, implementación y mantenimiento.",
      "Trabajo con bases de datos y soluciones orientadas a negocio.",
      "Apoyo en despliegues e infraestructura en entornos cloud.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle
        label="Experiencia"
        title="Experiencia Profesional"
        description="Mi experiencia trabajando en soluciones empresariales y proyectos reales."
      />

      <div className="relative space-y-10">
        {experience.map((exp, index) => (
          <div key={`${exp.title}-${index}`} className="relative grid gap-4 md:grid-cols-[40px_1fr]">
            {/* Línea + punto */}
            <div className="relative hidden md:block">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400" />
            </div>

            {/* Contenido */}
            <GlassCard className="hover:-translate-y-1">
              <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--heading)" }}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-cyan-400">{exp.company}</p>
                </div>

                <span
                  className="inline-flex w-fit rounded-full px-3 py-1 text-sm"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--muted)",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <ul
                className="mt-4 space-y-3 pl-5"
                style={{ color: "var(--muted)" }}
              >
                {exp.description.map((item) => (
                  <li key={item} className="list-disc leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;