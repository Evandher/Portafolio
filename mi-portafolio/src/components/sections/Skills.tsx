import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { RiCodeView } from "react-icons/ri";

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
      { name: "Python", icon: <FaPython className="h-8 w-8" /> },
      { name: "GeneXus", icon: <RiCodeView className="h-8 w-8" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8" /> },
      { name: "SQLServer", icon: <DiMsqlServer className="h-8 w-8" /> },
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
      <div className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Tecnologías con las que trabajo
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Estas son algunas de las herramientas y tecnologías que uso para
          construir soluciones modernas, escalables y mantenibles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">{group.title}</h3>

            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
                >
                  <div className="mb-3 text-cyan-400">{skill.icon}</div>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;