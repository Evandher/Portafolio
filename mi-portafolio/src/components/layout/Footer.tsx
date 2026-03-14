import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex gap-6 text-sm text-slate-400">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        {/* Nombre */}
        <p className="text-lg font-semibold text-white">
          Evandher
        </p>

        {/* Redes */}
        <div className="flex gap-6 text-slate-400">
          <a
            href="https://github.com/Evandher"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/evandher-abad"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:evandher24@gmail.com"
            className="transition hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm text-slate-500">
             Built with React, Tailwind and a lot of coffee ☕
        </p>
        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Evandher. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;