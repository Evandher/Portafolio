import { useState } from 'react'

export default function TerminalInput({ onCommand }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    onCommand(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center">
        <span className="text-neon-cyan mr-2">{'>_'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-soft-white font-mono placeholder-gray-500"
          placeholder="Escribe un comando..."
          autoFocus
        />
      </div>
    </form>
  )
}
