import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 60 },
          color: { value: "#00FFFF" },
          size: { value: 2 },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.3 },
          links: { enable: true, distance: 80, color: "#00FFFF", opacity: 0.2 },
        },
      }}
    />
  )
}
