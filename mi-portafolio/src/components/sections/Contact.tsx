import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <GlassCard className="md:p-10">
        <SectionTitle
          label="Contacto"
          title="Hablemos"
          description="Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes donde pueda aportar valor con desarrollo web, backend y soluciones en la nube."
        />

        <div className="flex flex-wrap gap-4">
          <Button href="mailto:evandher24@gmail.com">Enviar correo</Button>

          <a
            href="https://github.com/Evandher"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition"
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              color: "var(--button-secondary-text)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/evandher-abad"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition"
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              color: "var(--button-secondary-text)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="mailto:evandher24@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition"
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              color: "var(--button-secondary-text)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Mail size={18} />
            Correo
          </a>
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;