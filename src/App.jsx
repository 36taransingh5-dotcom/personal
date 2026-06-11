import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

export default function App() {
  return (
    <div className="relative h-full w-full bg-background">
      {/* Fixed full-screen 3D layer */}
      <div className="canvas-container fixed inset-0 h-screen w-screen">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0.6, 7], fov: 45 }}
        >
          <Experience />
        </Canvas>
      </div>

      {/* 2D DOM overlay — pointer-events pass through to the canvas */}
      <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-end pb-[12vh]">
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/80 md:text-base">
          Full-Stack Software Engineer
        </p>
        <p className="mt-3 text-xs text-accent">drag to explore</p>
      </div>
    </div>
  )
}
