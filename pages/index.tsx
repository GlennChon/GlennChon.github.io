import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import css from "../styles/Home.module.css";
import { Keyboard } from './components/keyboard'



export default function Home() {

  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{ position: [0, 90, 15] }}
      >
        <Keyboard />
        <ambientLight intensity={.07} />
        <directionalLight
          intensity={0.3}
          color={0xFFFFFF}
          position={[30, 1000, 30]}
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
