import ParticleBackground from "../components/ParticleBackground"

export default function MainLayout({ children }) {
  return (
    <div className="relative bg-bg-dark text-soft-white font-mono min-h-screen overflow-hidden">
      <ParticleBackground />
      <main className="relative z-10 w-full">{children}</main>
    </div>
  )
}
