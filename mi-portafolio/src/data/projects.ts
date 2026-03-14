import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Portafolio Personal",
    description: "Sitio personal para mostrar mis habilidades, experiencia y proyectos.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "/images/portfolio-preview.png",
    githubUrl: "https://github.com/tuusuario/mi-portafolio",
    liveUrl: "https://tu-portafolio.vercel.app"
  },
  {
    title: "Sistema de Inventario",
    description: "Aplicación para gestión de inventario enfocada en PYMEs.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/inventory-preview.png",
    githubUrl: "https://github.com/tuusuario/inventario"
  }
];