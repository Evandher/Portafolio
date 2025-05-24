import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TerminalInput from '../components/TerminalInput'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  const [logs, setLogs] = useState([])
  const navigate = useNavigate()

 const handleCommand = (cmd) => {
  const command = cmd.toLowerCase()
  let response

  if (command === 'show projects') {
    response = 'Redirigiendo a /projects...'
    setLogs([...logs, `> ${cmd}`, response])
    setTimeout(() => navigate('/projects'), 1000)
    return
  }

  if (command === 'open skills') {
    response = 'Redirigiendo a /skills...'
    setLogs([...logs, `> ${cmd}`, response])
    setTimeout(() => navigate('/skills'), 1000)
    return
  }

  if (command === 'open experience') {
    response = 'Redirigiendo a /experience...'
    setLogs([...logs, `> ${cmd}`, response])
    setTimeout(() => navigate('/experience'), 1000)
    return
  }

  if (command === 'whoami') {
    response = 'Eres la versión humana de este portafolio.'
  } else if (command === 'clear') {
    setLogs([])
    return
  } else {
    response = `Comando no reconocido: ${cmd}`
  }

  setLogs([...logs, `> ${cmd}`, response])
}

  return (
    <MainLayout>
      <div className="text-soft-white text-sm space-y-2">
        <p className="text-neon-cyan">Bienvenido a la terminal de <strong>@user</strong></p>

        {/* Mostrar historial tipo consola */}
        {logs.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}

        {/* Input tipo terminal */}
        <TerminalInput onCommand={handleCommand} />

        {/* Botón con estilo neon para probar comando */}
        <button
          className="mt-4 px-4 py-2 border border-neon-magenta text-neon-magenta font-mono rounded 
                     hover:bg-neon-magenta hover:text-bg-dark transition-all duration-300 shadow-md
                     hover:shadow-[0_0_10px_#FF00FF,0_0_20px_#FF00FF]"
          onClick={() => handleCommand('show projects')}
        >
          Ejecutar comando sugerido: <span className="underline">show projects</span>
        </button>
      </div>
    </MainLayout>
  )
}
