import { useEffect, useRef, useState } from 'react'
import { Desk } from 'components/desk'
import css from "../styles/Home.module.css"
import { Canvas } from '@react-three/fiber'
import { Monitor } from 'components/monitor'
import { Euler, Group, Vector3 } from 'three'
import { Keyboard } from 'components/keyboard'
import { OrbitControls } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'

export default function Home() {
  const groupMesh = useRef<Group>(null)

  // https://codesandbox.io/s/basic-clerping-example-qh8vhf?file=/src/Scene.js

  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{ position: [0, 27, 200], fov: 50 }}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
      >
        <group ref={groupMesh} rotation={[0, degToRad(45), 0]}>
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
        </group>
        <ambientLight intensity={.2} color={0xc7cac5} />
        <directionalLight
          castShadow
          intensity={.3}
          color={0xc7cac5}
          position={new Vector3(0, 15, 10)}
          rotation={new Euler(degToRad(45), degToRad(45), 0)}
        />
        <hemisphereLight intensity={.5} />
        <OrbitControls
          position={[0, 0, 0]}
          minDistance={1}
          minZoom={0.1}
          maxDistance={200}
        />
      </Canvas>
    </div >
  )
}
