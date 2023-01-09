import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh
    edge: THREE.Mesh
    thread: THREE.Mesh
    group_11: THREE.Mesh
    ID244002: THREE.Mesh
    ID244002_1: THREE.Mesh
    ID252002: THREE.Mesh
    ID252002_1: THREE.Mesh
    ID262002: THREE.Mesh
    ID262002_1: THREE.Mesh
    ID319002: THREE.Mesh
    ID319002_1: THREE.Mesh
    ID331002: THREE.Mesh
    ID331002_1: THREE.Mesh
    ID381002: THREE.Mesh
    ID381002_1: THREE.Mesh
    ID381002_2: THREE.Mesh
    ID389002: THREE.Mesh
    ID389002_1: THREE.Mesh
    ID389002_2: THREE.Mesh
    ID399002: THREE.Mesh
    ID399002_1: THREE.Mesh
    ID407002: THREE.Mesh
    ID407002_1: THREE.Mesh
    ID415002: THREE.Mesh
    ID415002_1: THREE.Mesh
    ID415002_2: THREE.Mesh
    ID428002: THREE.Mesh
    ID428002_1: THREE.Mesh
    ID436002: THREE.Mesh
    ID436002_1: THREE.Mesh
    ID444002: THREE.Mesh
    ID444002_1: THREE.Mesh
    group_2: THREE.Mesh
    group_3: THREE.Mesh
    ID28002: THREE.Mesh
    ID28002_1: THREE.Mesh
    ID28002_2: THREE.Mesh
    ID75002: THREE.Mesh
    ID75002_1: THREE.Mesh
    group_8001: THREE.Mesh
    group_8002: THREE.Mesh
    ID101002: THREE.Mesh
    ID101002_1: THREE.Mesh
    ID116002: THREE.Mesh
    ID116002_1: THREE.Mesh
    group_8005: THREE.Mesh
    group_8006: THREE.Mesh
    ID142002: THREE.Mesh
    ID142002_1: THREE.Mesh
    ID150002: THREE.Mesh
    ID150002_1: THREE.Mesh
    ID158002: THREE.Mesh
    ID158002_1: THREE.Mesh
    ID166002: THREE.Mesh
    ID166002_1: THREE.Mesh
    ID176002: THREE.Mesh
    ID176002_1: THREE.Mesh
    group_8012: THREE.Mesh
    ID194002: THREE.Mesh
    ID194002_1: THREE.Mesh
    ID47002: THREE.Mesh
    ID47002_1: THREE.Mesh
    group_9001: THREE.Mesh
    ID63002: THREE.Mesh
    ID63002_1: THREE.Mesh
    image_0: THREE.Mesh
    image_1: THREE.Mesh
    image_2: THREE.Mesh
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cube_5: THREE.Mesh
    Cube_6: THREE.Mesh
    Cube_7: THREE.Mesh
    Cube_8: THREE.Mesh
    Cube_9: THREE.Mesh
    Cube002: THREE.Mesh
    Cube002_1: THREE.Mesh
    Cube002_2: THREE.Mesh
    mouse: THREE.Mesh
  }
  materials: {
    ['Soft Black Fabric.001']: THREE.MeshStandardMaterial
    ['light.001']: THREE.MeshStandardMaterial
    ['black.001']: THREE.MeshStandardMaterial
    ['_0136_Charcoal.002']: THREE.MeshStandardMaterial
    ['material.002']: THREE.MeshStandardMaterial
    ['_0137_Black.002']: THREE.MeshStandardMaterial
    ['_34UC89G_Product_image_06_Desk.002']: THREE.MeshStandardMaterial
    ['Color_M08.002']: THREE.MeshStandardMaterial
    ['_2017-04-24_325417346.JPG.fe8288208c85a39f8134662cf90bbed6.002']: THREE.MeshStandardMaterial
    ['material_0.002']: THREE.MeshStandardMaterial
    ['Color_A05.002']: THREE.MeshStandardMaterial
    ['material_1.002']: THREE.MeshStandardMaterial
    ['material_2.002']: THREE.MeshStandardMaterial
    ['material_3.002']: THREE.MeshStandardMaterial
    Rubbery: THREE.MeshStandardMaterial
    Fullblack: THREE.MeshStandardMaterial
    Trackpad: THREE.MeshStandardMaterial
    Rugged: THREE.MeshStandardMaterial
    ['Power button']: THREE.MeshStandardMaterial
    Led: THREE.MeshStandardMaterial
    Grid: THREE.MeshStandardMaterial
    Pés: THREE.MeshStandardMaterial
    Keyboard: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshPhysicalMaterial
    ['Black_Metal_Paint']: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
  }
}


export const Models = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('assets/models/models.glb') as unknown as GLTFResult
  const mousepadTexture = useLoader(THREE.TextureLoader, 'assets/textures/black-squared-fabric-texture.jpg')

  const textRef = useRef<any>()
  const rand = Math.random() * 100
  useFrame((state) => (textRef.current.position.x = 1 + Math.sin(rand + state.clock.elapsedTime / 4) * 8))

  useLayoutEffect(() => {
    const repeatX = 150
    const repeatY = 150
    mousepadTexture.wrapS = THREE.RepeatWrapping
    mousepadTexture.wrapT = THREE.RepeatWrapping
    mousepadTexture.repeat.set(repeatX, repeatY)
  })

  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <mesh castShadow receiveShadow geometry={nodes.mouse.geometry} material={materials.material_0} />
      <mesh castShadow receiveShadow geometry={nodes.base.geometry}  >
        <meshStandardMaterial
          map={mousepadTexture}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.edge.geometry} material={materials['light.001']} />
      <mesh castShadow receiveShadow geometry={nodes.thread.geometry} material={materials['black.001']} />
      <mesh castShadow receiveShadow geometry={nodes.group_11.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_2.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_3.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_8001.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_8002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_8005.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_8006.geometry} material={materials['_34UC89G_Product_image_06_Desk.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_8012.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.group_9001.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.image_0.geometry} material={materials['material_1.002']} />
      <mesh castShadow receiveShadow geometry={nodes.image_1.geometry} material={materials['material_2.002']} />
      <mesh castShadow receiveShadow geometry={nodes.image_2.geometry} material={materials['material_3.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID244002.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID244002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID252002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID252002_1.geometry} material={materials['_34UC89G_Product_image_06_Desk.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID262002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID262002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID319002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID319002_1.geometry} material={materials['Color_M08.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID331002.geometry} material={materials['_0136_Charcoal.002']} />
      {/* <mesh castShadow receiveShadow geometry={nodes.ID331002_1.geometry} material={materials['_2017-04-24_325417346.JPG.fe8288208c85a39f8134662cf90bbed6.002']} /> */}
      <mesh geometry={nodes.ID331002_1.geometry}>
        <meshBasicMaterial toneMapped={true}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} />
            <mesh castShadow receiveShadow attach={"background"} material={materials['_2017-04-24_325417346.JPG.fe8288208c85a39f8134662cf90bbed6.002']} />
            <Text
              font={"assets/fonts/PermanentMarker.woff"}
              characters="abcdefghijklmnopqrstuvwxyz0123456789!"
              position={[0, 1.2, 0]}
              rotation={[degToRad(180), 0, 0]}
              ref={textRef}
              fontSize={3}
              letterSpacing={0}
              color={'rgba(0, 57, 144, 0.5)'}>
              Glenn Chon
            </Text>
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.ID381002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID381002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID381002_2.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID389002.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID389002_1.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID389002_2.geometry} material={materials['Color_A05.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID399002.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID399002_1.geometry} material={materials['Color_A05.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID407002.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID407002_1.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID415002.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID415002_1.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID415002_2.geometry} material={materials['Color_A05.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID428002.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID428002_1.geometry} material={materials['Color_A05.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID436002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID436002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID444002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID444002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID28002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID28002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID28002_2.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID75002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID75002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID101002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID101002_1.geometry} material={materials['_34UC89G_Product_image_06_Desk.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID116002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID116002_1.geometry} material={materials['material_0.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID142002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID142002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID150002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID150002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID158002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID158002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID166002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID166002_1.geometry} material={materials['_34UC89G_Product_image_06_Desk.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID176002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID176002_1.geometry} material={materials['_34UC89G_Product_image_06_Desk.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID194002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID194002_1.geometry} material={materials['_0137_Black.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID47002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID47002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID63002.geometry} material={materials['_0136_Charcoal.002']} />
      <mesh castShadow receiveShadow geometry={nodes.ID63002_1.geometry} material={materials['material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Rubbery} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Fullblack} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Trackpad} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.Rugged} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials['Power button']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_5.geometry} material={materials.Led} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_6.geometry} material={materials.Grid} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_7.geometry} material={materials.Pés} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_8.geometry} material={materials.Keyboard} >

        {/* right fan light */}
        {/* 14 height */}
        {/* -15, -55, ? */}

      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Cube_9.geometry} material={materials.Screen} >
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials['Material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials['Black_Metal_Paint']} />
    </group>
  )
}

useGLTF.preload('assets/models/models.glb')
useLoader.preload(THREE.TextureLoader, 'assets/textures/black-squared-fabric-texture.jpg')