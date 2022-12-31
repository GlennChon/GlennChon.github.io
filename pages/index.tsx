import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import css from "../styles/Home.module.css";
import { Keyboard } from '../components/keyboard'



export default function Home() {

  return (
    <div className={css.scene}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        shadows={true}
        className={css.canvas}
        camera={{ position: [-15, 45, 10] }}
      >
        <Keyboard />
        {/* <Environment preset="city" blur={0} /> */}
        <ambientLight intensity={.1} />
        <directionalLight
          intensity={0.4}
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
      <div>test3</div>
    </div>
  )
}
