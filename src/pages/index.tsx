import { useRef } from 'react'
import css from "../styles/Home.module.css"
import { Canvas } from '@react-three/fiber'
import { Euler, Group, Vector3 } from 'three'
import { Keyboard } from 'components'
import { degToRad } from 'three/src/math/MathUtils'
import { BakeShadows, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import { Models } from 'components/models'
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js"

export default function Home() {
  const groupMesh = useRef<Group>(null)
  RectAreaLightUniformsLib.init();
  // TODO: Camera move to click locations
  // https://codesandbox.io/s/bounds-and-makedefault-rz2g0
  // https://codesandbox.io/s/basic-clerping-example-qh8vhf?file=/src/Scene.js
  // Route transitions https://codesandbox.io/s/router-transitions-4j2q2

  return (
    <div className={css.scene}>
      <Canvas
        frameloop="demand"
        className={css.canvas}
        camera={{ position: [0, 0, 500], fov: 25 }}
        dpr={[1, 1.5]}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
      >
        <color attach="background" args={['black']} />
        {/* Lights */}
        {/* <ambientLight intensity={.15} color="white" /> */}
        <hemisphereLight intensity={.3} groundColor="black" />
        <spotLight position={new Vector3(-150, 500, 500)} angle={45} penumbra={1} intensity={.2} castShadow shadow-mapSize={1024} />
        <rectAreaLight
          castShadow
          intensity={.5}
          width={1000}
          height={500}
          position={new Vector3(-180, -50, 200)} />
        {/* Controls */}
        <OrbitControls
          position={[0, 0, 0]}
          minDistance={1}
          minZoom={0.1}
          maxDistance={800}
        />
        <group ref={groupMesh} rotation={[0, degToRad(35), 0]}>
          {/* model lights */}
          {/* monitor Light */}
          <rectAreaLight
            color={0x003990}
            intensity={8}
            width={100}
            height={33}
            position={[0, 40, -18]}
            rotation={[0, degToRad(180), 0]} />

          {/* laptop front light */}
          <rectAreaLight
            color={0x0057dc}
            intensity={8}
            width={36}
            height={0.5}
            // position={[-65, 2, -11]}
            position={[-62.2, -7, 17]}
            rotation={[degToRad(0), degToRad(-148), degToRad(0)]}
          />
          {/* laptop rear light */}
          <rectAreaLight
            color={0x0057dc}
            intensity={8}
            width={32}
            height={0.5}
            // position={[-65, 2, -11]}
            position={[-75.2, -7, -4]}
            rotation={[degToRad(0), degToRad(32), degToRad(0)]}
          />
          {/* laptop left light */}
          <rectAreaLight
            color={0x0057dc}
            intensity={8}
            width={10}
            height={0.5}
            // position={[-65, 2, -11]}
            position={[-79.8, -7, 22.5]}
            rotation={[degToRad(0), degToRad(122), degToRad(0)]}
          />
          {/* laptop right light */}
          <rectAreaLight
            color={0x0057dc}
            intensity={8}
            width={10}
            height={0.5}
            // position={[-65, 2, -11]}
            position={[-49.25, -7, 4]}
            rotation={[degToRad(0), degToRad(-58), degToRad(0)]}
          />
          <Models
            castShadow
            receiveShadow
            position={new Vector3(0, 0, 0)}
            scale={new Vector3(.5, .5, .5)}
          />
          <Keyboard
            groupScale={new Vector3(1.15, 1.15, 1.15)}
            groupPos={new Vector3(-8, -7, 10)}
            groupRot={new Euler(0, degToRad(-13), 0)} />
        </group>
        <mesh receiveShadow position={new Vector3(0, -82, 0)} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={.6}
            mirror={5}
          />
        </mesh>
        <BakeShadows />
      </Canvas>
    </div >
  )
}