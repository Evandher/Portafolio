import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

const projectList = [
  {
    name: '💼 Eskema Cloud',
    description: 'ERP para talleres, repuestos y contabilidad.',
    tech: ['GeneXus', 'SQL Server', 'Azure'],
    year: 2025,
  },
  {
    name: '📊 ControlGastos',
    description: 'App personal para registrar ingresos y gastos.',
    tech: ['React', 'MongoDB', 'Tailwind'],
    year: 2024,
  },
  {
    name: '🚆 CargoRail Monitor',
    description: 'Sistema para monitoreo de cargas ferroviarias.',
    tech: ['.NET', 'SQL Server', 'IIS + Akamai'],
    year: 2023,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <MainLayout>
      <h2 className="text-neon-cyan text-lg mb-4">📁 Proyectos disponibles</h2>

      <div className="space-y-2">
        {projectList.map((proj, index) => (
          <div
            key={index}
            onClick={() => setSelected(proj)}
            className="cursor-pointer hover:text-neon-magenta transition duration-150"
          >
            $ ls -la {proj.name.toLowerCase().replace(/\s/g, '_')}
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-6 p-4 border border-neon-purple bg-bg-deep rounded shadow-lg text-sm">
          <h3 className="text-neon-purple text-lg mb-2">{selected.name}</h3>
          <p>{selected.description}</p>
          <p className="mt-2 text-soft-white">
            <strong>Tecnologías:</strong> {selected.tech.join(', ')}
          </p>
          <p><strong>Año:</strong> {selected.year}</p>
          <button
            className="mt-4 text-xs text-neon-red hover:underline"
            onClick={() => setSelected(null)}
          >
            [ cerrar ]
          </button>
        </div>
      )}
    </MainLayout>
  )
}
