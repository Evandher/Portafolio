import { useState } from 'react'

const defaultMessages = [
  { from: 'bot', text: 'Hola, soy tu versión IA 🤖. ¿Qué quieres ver primero? Proyectos, skills o mis aventuras en Azure?' },
]

export default function BotChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(defaultMessages)
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages = [...messages, { from: 'user', text: input }]
    let response

    if (input.toLowerCase().includes('proyecto')) {
      response = 'Puedes usar el comando: show projects'
    } else if (input.toLowerCase().includes('skills')) {
      response = 'Usa el comando: open skills'
    } else if (input.toLowerCase().includes('cv')) {
      response = 'Aún no tengo un PDF de tu CV, pero pronto lo imprimiré desde la terminal 🧾'
    } else {
      response = 'Interesante... pero aún no sé cómo responder eso 😅'
    }

    setMessages([...newMessages, { from: 'bot', text: response }])
    setInput('')
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-neon-blue text-bg-dark px-4 py-2 rounded-full font-mono 
                   hover:bg-neon-magenta hover:shadow-[0_0_10px_#FF00FF,0_0_20px_#FF00FF] transition-all"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Cerrar IA 🧠' : 'Habla conmigo 💬'}
      </button>

      {/* Ventana de chat */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[60vh] bg-bg-deep border border-neon-cyan 
                        text-soft-white font-mono text-sm rounded shadow-xl overflow-hidden flex flex-col z-40">
          <div className="p-3 border-b border-neon-cyan bg-bg-dark text-neon-cyan">
            Terminal IA — Asistente
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <p key={i} className={msg.from === 'bot' ? 'text-neon-blue' : 'text-soft-white'}>
                <span className="mr-2">{msg.from === 'bot' ? '🤖>' : '>_'}</span>{msg.text}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex border-t border-neon-cyan">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-soft-white px-2 py-1 outline-none"
              placeholder="Escribe algo..."
            />
            <button type="submit" className="px-3 text-neon-magenta hover:underline">Enviar</button>
          </form>
        </div>
      )}
    </>
  )
}
