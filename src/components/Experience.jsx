import { Center, Environment, Float, PresentationControls, Text3D } from '@react-three/drei'

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 8, 5]}
        intensity={2}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-top={8}
        shadow-camera-right={8}
        shadow-camera-bottom={-8}
        shadow-camera-left={-8}
      />
      <Environment preset="city" />

      <PresentationControls
        global
        cursor
        snap
        speed={1.2}
        rotation={[0.1, 0, 0]}
        polar={[-0.2, 0.3]}
        azimuth={[-0.7, 0.7]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={0.85}
              height={0.25}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.03}
              bevelSize={0.02}
              bevelSegments={4}
              castShadow
            >
              Taran Pal Singh
              <meshStandardMaterial color="#f4f2ee" metalness={0.4} roughness={0.25} />
            </Text3D>
          </Center>
        </Float>
      </PresentationControls>
    </>
  )
}
