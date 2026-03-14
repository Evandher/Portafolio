import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { motion } from "framer-motion";
// import TechStack from "./components/sections/TechStack";

function App() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute left-1/3 top-225 h-96 w-96 rounded-full bg-cyan-400/5 blur-[140px]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
          {/* <TechStack /> */}
        <motion.div {...sectionAnimation}>
          <About />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Skills />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Projects />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Experience />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;