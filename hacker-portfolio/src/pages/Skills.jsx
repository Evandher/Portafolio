import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'

const skills = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'HTML/CSS', level: 95 },
  ],
  Backend: [
    { name: 'Node.js', level: 70 },
    { name: 'GeneXus', level: 92 },
    { name: 'SQL Server', level: 88 },
  ],
  Infraestructura: [
    { name: 'Azure', level: 80 },
    { name: 'AWS', level: 65 },
    { name: 'IIS / Windows Server', level: 78 },
  ],
}

export default function Skills() {
  return (
    <MainLayout>
      <h2 className="text-neon-cyan text-lg mb-6">🧠 Conocimientos técnicos</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-neon-purple mb-2">{category}</h3>
          <div className="space-y-2">
            {items.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span className="text-soft-white">{skill.name}</span>
                  <span className="text-neon-magenta">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-bg-deep rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full bg-neon-blue"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainLayout>
  )
}
