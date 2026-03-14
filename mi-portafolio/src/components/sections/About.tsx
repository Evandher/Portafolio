import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionTitle
            label="Sobre mí"
            title="Desarrollador Full Stack"
            description="Construyo aplicaciones modernas, eficientes y escalables, combinando frontend, backend, bases de datos y despliegues en la nube."
          />

          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Tengo experiencia trabajando con React, Node.js, TypeScript, SQL,
            MongoDB y despliegues en Azure y AWS. También he trabajado en
            sistemas empresariales utilizando GeneXus, lo que me ha permitido
            participar en soluciones reales orientadas a negocio.
          </p>
        </div>

        <GlassCard>
          <h3
            className="mb-6 text-lg font-semibold"
            style={{ color: "var(--heading)" }}
          >
            Información rápida
          </h3>

          <ul className="space-y-4" style={{ color: "var(--muted)" }}>
            <li>
              <span className="font-semibold" style={{ color: "var(--heading)" }}>
                Ubicación:
              </span>{" "}
              Panamá
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--heading)" }}>
                Rol:
              </span>{" "}
              Full Stack Developer
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--heading)" }}>
                Stack:
              </span>{" "}
              React, Node.js, TypeScript
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--heading)" }}>
                Intereses:
              </span>{" "}
              Cloud, SaaS, herramientas para desarrolladores
            </li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;