import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { RiCodeView } from "react-icons/ri";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare className="h-8 w-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8" /> },
      { name: "React", icon: <FaReact className="h-8 w-8" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-8 w-8" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8" /> },
      { name: "GeneXus", icon: <RiCodeView className="h-8 w-8" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8" /> },
      { name: "SQL Server", icon: <DiMsqlServer className="h-8 w-8" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="h-8 w-8" /> },
      { name: "AWS", icon: <FaAws className="h-8 w-8" /> },
      { name: "Azure", icon: <VscAzure className="h-8 w-8" /> },
      { name: "Git", icon: <FaGitAlt className="h-8 w-8" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle
        label="Skills"
        title="Tecnologías con las que trabajo"
        description="Estas son algunas de las herramientas y tecnologías que uso para construir soluciones modernas, escalables y mantenibles."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <GlassCard key={group.title}>
            <h3
              className="mb-6 text-lg font-semibold"
              style={{ color: "var(--heading)" }}
            >
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center rounded-xl p-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/30"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--muted)",
                  }}
                >
                  <div className="mb-3 text-cyan-400 text-2xl">{skill.icon}</div>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;