import ParticleBackground from '../components/ParticleBackground'

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-bg-dark text-soft-white font-mono p-4 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
