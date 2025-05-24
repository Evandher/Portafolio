import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TerminalInput from '../components/TerminalInput'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  const [logs, setLogs] = useState([])
  const [shake, setShake] = useState(false)
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
      setShake(true)
      setTimeout(() => setShake(false), 300)
    }

    setLogs([...logs, `> ${cmd}`, response])
  }

  const isEmpty = logs.length === 0

  return (
    <MainLayout>
      <div
        className={`text-soft-white text-sm max-w-3xl w-full px-4 mx-auto transition-all duration-300 ${
          isEmpty
            ? 'min-h-screen flex flex-col justify-center items-center text-center'
            : 'pt-16 pb-12'
        } ${shake ? 'shake' : ''}`}
      >
        <h1 className="glitch text-2xl sm:text-3xl mb-4" data-text="Bienvenido a la terminal de @Evandher">
          Bienvenido a la terminal de @Evandher
        </h1>

        {isEmpty && (
          <p className="text-neon-cyan mb-6">Escribe un comando o usa los sugeridos abajo.</p>
        )}

        <div className="space-y-2 mb-6 w-full text-left">
          {logs.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <TerminalInput onCommand={handleCommand} />

        <div className={`mt-6 ${isEmpty ? '' : 'text-left'}`}>
          <button
            className="px-4 py-2 border border-neon-cyan text-neon-cyan font-mono rounded 
                       hover:bg-neon-cyan hover:text-bg-dark transition-all duration-300 shadow-md
                       hover:shadow-[0_0_10px_#00FFFF,0_0_20px_#00FFFF]"
            onClick={() => handleCommand('show projects')}
          >
            Ejecutar comando sugerido: <span className="underline">show projects</span>
          </button>
        </div>
      </div>
    </MainLayout>
  )
}
