import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Boot() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-2xl font-mono">
      <h1 className="glitch" data-text="Inicializando portafolio...">
        Inicializando portafolio...
      </h1>
    </div>
  )
}
