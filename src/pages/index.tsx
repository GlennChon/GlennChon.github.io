import { Suspense, useRef, useState } from 'react'
import css from "../styles/Home.module.css"
import { Canvas } from '@react-three/fiber'
import {
  DirectionalLight,
  Euler,
  Group,
  Object3D,
  Vector3
} from 'three'
import { Keyboard } from 'components'
import { degToRad } from 'three/src/math/MathUtils'
import { BakeShadows, ContactShadows, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Models } from 'components/models'
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js"

const Lights = () => {
  let dirLight = useRef<DirectionalLight>(null)
  const [o] = useState(() => new Object3D())

  // useHelper(dirLight, DirectionalLightHelper)
  // useHelper(shadowCameraRef, CameraHelper)

  return (
    <>
      <ambientLight intensity={.1} color="0xfff" />
      <hemisphereLight castShadow intensity={.2} groundColor="#262626" />
      <directionalLight
        ref={dirLight}
        target={o}
        color={"#fff"}
        intensity={.6}
        position={[70, 150, 70]}
        shadow-mapSize={1024}
      />
      {/* Monitor */}
      <rectAreaLight
        color={0x003990}
        intensity={10}
        width={36}
        height={16.5}
        position={[0, 10, -5]}
        rotation={[0, degToRad(215), 0]} />
      {/* laptop screen */}
      <rectAreaLight
        color={0x173267}
        intensity={30}
        width={12}
        height={30}
        position={[-30, 15, 20]}
        rotation={[0, degToRad(-112), 0]} />
      {/* laptop front light */}
      <rectAreaLight
        color={0x0057dc}
        intensity={12}
        width={18}
        height={0.25}
        // position={[-65, 2, -11]}
        position={[-62.2, -7, 17]}
        rotation={[degToRad(0), degToRad(-148), degToRad(0)]}
      />
      {/* laptop rear light */}
      <rectAreaLight
        color={0x0057dc}
        intensity={12}
        width={16}
        height={0.25}
        // position={[-65, 2, -11]}
        position={[-75.2, -7, -4]}
        rotation={[degToRad(0), degToRad(32), degToRad(0)]}
      />
      {/* laptop left light */}
      <rectAreaLight
        color={0x0057dc}
        intensity={12}
        width={5}
        height={0.25}
        // position={[-65, 2, -11]}
        position={[-79.8, -7, 22.5]}
        rotation={[degToRad(0), degToRad(122), degToRad(0)]}
      />
      {/* laptop right light */}
      <rectAreaLight
        color={0x0057dc}
        intensity={12}
        width={5}
        height={0.25}
        // position={[-65, 2, -11]}
        position={[-49.25, -7, 4]}
        rotation={[degToRad(0), degToRad(-58), degToRad(0)]}
      />
    </>
  )
}


export default function Home() {
  const groupMesh = useRef<Group>(null)
  RectAreaLightUniformsLib.init()
  // TODO: Camera move to click locations
  // https://codesandbox.io/s/bounds-and-makedefault-rz2g0
  // https://codesandbox.io/s/basic-clerping-example-qh8vhf?file=/src/Scene.js
  // Route transitions https://codesandbox.io/s/router-transitions-4j2q2


  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{ position: [0, 60, 400], fov: 25, }}
        dpr={[1, 1.5]}
        gl={{ logarithmicDepthBuffer: true, antialias: true }}
      >
        <fog attach="fog" args={['#101010', 0, 1000]} />
        <color attach="background" args={['#262626']} />
        {/* Lights */}
        <Lights />
        {/* Controls */}
        <OrbitControls
          position={[0, 0, 0]}
          minDistance={1}
          minZoom={0.1}
          maxDistance={400}
        />
        <Suspense fallback={null}>
          <group ref={groupMesh} rotation={[0, degToRad(35), 0]} scale={new Vector3(.5, .5, .5)} castShadow>
            {/* model lights */}
            {/* monitor Light */}
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
            <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
            <mesh receiveShadow renderOrder={-2} rotation={[-Math.PI / 2, 0, 0]} position={new Vector3(0, -82, 0)}>
              <planeGeometry args={[350, 350]} />
              <MeshReflectorMaterial
                blur={[512, 512]}
                resolution={1024}
                mixBlur={1}
                mixContrast={1.5}
                mixStrength={20}
                opacity={2}
                depthScale={1}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.25}
                roughness={1}
                color="#262626"
                mirror={1}
              />
            </mesh>
          </group>
          <BakeShadows />
        </Suspense>
        {/* Postprocessing */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={2} />
        </EffectComposer>
      </Canvas>
    </div >
  )
}