import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import css from "../styles/Home.module.css";
import { Keyboard } from 'components/keyboard'
import { Monitor } from 'components/monitor'
import { Vector3 } from 'three';

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        shadows={true}
        className={css.canvas}
        camera={{ position: [0, 30, 100] }}
      >
        <Monitor
          groupPos={new Vector3(-41, 15, -20)}

        />
        <Keyboard />
        <ambientLight intensity={0.2} />
        <directionalLight
          intensity={0.5}
          color={0xc7cac5}
          position={[0, 1000, 1000]}
        />
        <OrbitControls
          position={[0, 0, 0]}
          minDistance={1}
          minZoom={0.1}
          maxDistance={100}
        />
      </Canvas>
    </div>
  )
}
