import { useState, useEffect, useMemo } from "react"
import { Particles, initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticleBackground() {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("✅ Motor de partículas cargado: Red Digital")
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "#0a0a0a" },
    fpsLimit: 60,
    particles: {
      number: { value: 60 },
      color: { value: "#00FFFF" }, // Cyan neón
      links: {
        enable: true,
        distance: 90,
        color: "#00FFFF",
        opacity: 0.1,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        outModes: { default: "out" },
      },
      opacity: { value: 0.3 },
      size: { value: 1.5 },
    },
    detectRetina: true,
  }), [])

  if (!engineReady) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={options}
    />
  )
}
