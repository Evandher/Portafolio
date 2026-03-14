import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJsSquare
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";
import { RiCodeView } from "react-icons/ri";

const stack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GeneXus", icon: <RiCodeView /> },
];

const TechStack = () => {
  return (
    <section className="py-10">
      <div className="flex flex-wrap justify-center gap-4">

        {stack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition hover:-translate-y-1"
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              color: "var(--muted)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="text-cyan-400 text-lg">
              {tech.icon}
            </span>

            {tech.name}
          </div>
        ))}

      </div>
    </section>
  );
};

export default TechStack;