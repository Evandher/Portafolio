import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'

const projectList = [
  {
    name: '💼 Eskema Cloud',
    slug: '_eskema_cloud',
    description: 'ERP para talleres, repuestos y contabilidad.',
    tech: ['GeneXus', 'SQL Server', 'Azure'],
    year: 2025,
  },
  {
    name: '📊 ControlGastos',
    slug: '_controlgastos',
    description: 'App personal para registrar ingresos y gastos.',
    tech: ['React', 'MongoDB', 'Tailwind'],
    year: 2024,
  },
  {
    name: '🚆 CargoRail Monitor',
    slug: '_cargorail_monitor',
    description: 'Sistema para monitoreo de cargas ferroviarias.',
    tech: ['.NET', 'SQL Server', 'IIS + Akamai'],
    year: 2023,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [typedCommand, setTypedCommand] = useState('')

  useEffect(() => {
    if (!selected) {
      setTypedCommand('')
      return
    }

    const fullCommand = `./${selected.slug} --info`
    let index = 0

    const interval = setInterval(() => {
      setTypedCommand(fullCommand.slice(0, index + 1))
      index++
      if (index === fullCommand.length) clearInterval(interval)
    }, 50)

    return () => clearInterval(interval)
  }, [selected])

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-3xl border border-neon-cyan bg-bg-deep/70 rounded-lg p-6 shadow-neon font-mono text-sm text-soft-white">
          <h2 className="text-neon-cyan text-lg mb-4">> Proyectos disponibles</h2>

          <div className="mb-2">$ ls -la</div>
          <div className="space-y-1 mb-6">
            {projectList.map((proj, index) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelected(proj)}
                className="group cursor-pointer hover:text-neon-magenta transition-all duration-150"
              >
                ├── <span className="group-hover:underline">{proj.slug}</span>
              </motion.div>
            ))}
          </div>

          {selected && (
            <>
              <div className="mb-2 text-neon-cyan">
                $ <span>{typedCommand}</span><span className="animate-blink">_</span>
              </div>

              {typedCommand === `./${selected.slug} --info` && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/40 border border-neon-purple rounded p-4 shadow-inner mb-4"
                >
                  <p><span className="text-neon-purple">Nombre:</span> {selected.name}</p>
                  <p><span className="text-neon-purple">Descripción:</span> {selected.description}</p>
                  <p><span className="text-neon-purple">Tecnologías:</span> {selected.tech.join(', ')}</p>
                  <p><span className="text-neon-purple">Año:</span> {selected.year}</p>
                </motion.div>
              )}

              <button
                className="text-neon-red text-xs hover:underline"
                onClick={() => setSelected(null)}
              >
                [ cerrar output ]
              </button>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
