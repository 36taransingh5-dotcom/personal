import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

export default function App() {
  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', background: '#16181d' }}>
      <div className="canvas-container" style={{ position: 'fixed', inset: 0 }}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0.6, 7], fov: 45 }}
        >
          <Experience />
        </Canvas>
      </div>

      <div style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '12vh'
      }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f4f2eecc' }}>
          Full-Stack Software Engineer
        </p>
        <p style={{ marginTop: '12px', fontSize: '0.75rem', color: '#b8f135' }}>
          drag to explore
        </p>
      </div>
    </div>
  )
}
