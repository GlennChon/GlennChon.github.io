import { Desk } from 'components/desk'
import { Euler, Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import { Monitor } from 'components/monitor'
import css from "../styles/Home.module.css"
import { Keyboard } from 'components/keyboard'
import { OrbitControls } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}

        shadows={true}
        className={css.canvas}
        camera={{ position: [0, 30, 100], fov: 100 }}
      >
        <Monitor
          groupPos={new Vector3(-41, 15, -20)}
        />
        <Keyboard
          groupPos={new Vector3(-8, 0.3, 0)}
          groupRot={new Euler(0, degToRad(-13), 0)} />
        {/* TODO: xl MousePad, Mouse */}
        <Desk
          groupScale={new Vector3(0.8, 0.75, 0.75)}
          groupPos={new Vector3(0, -56.1, 0)}
        />
        <ambientLight intensity={.2} color={0xc7cac5} />
        <directionalLight
          intensity={.7}
          color={0xc7cac5}
          position={new Vector3(0, 15, 10)}
        />
        <hemisphereLight intensity={.5} />
        <OrbitControls
          position={[0, 0, 0]}
          minDistance={1}
          minZoom={0.1}
          maxDistance={100}
        />
      </Canvas>
    </div >
  )
}
