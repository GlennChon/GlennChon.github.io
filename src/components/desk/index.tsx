import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { updatePosition, updateRotation, updateScale } from 'utils/transform'
import { Euler, Group, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector3 } from 'three'

import { degToRad } from 'three/src/math/MathUtils'

type GLTFResult = GLTF
    & {
        nodes: Record<string, Mesh>

        materials: {
            Material: MeshStandardMaterial
        }
    }

type DeskProps = {
    children?: any,
    groupPos?: Vector3,
    groupRot?: Euler,
    groupScale?: Vector3,
}

let defaultProps = {
    groupPos: new Vector3(0, 0, 0),
    groupRot: new Euler(0, 0, 0),
    groupScale: new Vector3(1, 1, 1),
}

export const Desk = (
    props: DeskProps
) => {
    const { nodes } = useGLTF('assets/models/desk_set.glb') as unknown as GLTFResult
    const mouse = useGLTF('assets/models/mouse.glb') as unknown as GLTFResult
    const mousepadTexture = useLoader(TextureLoader, 'assets/textures/black-squared-fabric-texture.jpg');

    const groupRef = useRef<Group>(null!)
    const defaultMeshScale = new Vector3(100, 100, 100)
    const defaultMeshRotation = new Euler(0, 0, 0)

    const [DeskMesh] = useState(nodes.desk)
    const [MousePadMesh] = useState(nodes.mousepad)
    const [MouseMesh] = useState(mouse.nodes["deathadder-v2-pro-3d"])

    const repeatX = 150;
    const repeatY = 150;
    mousepadTexture.wrapS = RepeatWrapping;
    mousepadTexture.wrapT = RepeatWrapping;
    mousepadTexture.repeat.set(repeatX, repeatY);

    useEffect(() => {
        updatePosition(groupRef, props.groupPos)
        updateRotation(groupRef, props.groupRot)
        updateScale(groupRef, props.groupScale)
    }, [props.groupPos, props.groupRot, props.groupScale])

    return (
        <group ref={groupRef}>
            {
                DeskMesh.children.map((child: Mesh, index: number) => {
                    return (
                        <mesh
                            key={index}
                            receiveShadow={true}
                            castShadow={true}
                            scale={defaultMeshScale}
                            position={child.position}
                            rotation={defaultMeshRotation}
                            geometry={child.geometry}
                            material={child.material}
                        />
                    )
                })
            }
            {
                MousePadMesh.children.map((child: Mesh, index: number) => {
                    return (
                        <mesh
                            key={index}
                            receiveShadow={true}
                            castShadow={true}
                            scale={defaultMeshScale}
                            position={new Vector3(0, -.2, -5)}
                            rotation={defaultMeshRotation}
                            geometry={child.geometry}
                        >
                            <meshStandardMaterial
                                map={mousepadTexture}
                            />
                        </mesh>
                    )
                })
            }
            <mesh
                receiveShadow={true}
                castShadow={true}
                scale={new Vector3(.1, .1, .1)}
                position={new Vector3(30, 74.55, 3)}
                rotation={new Euler(0, degToRad(180), 0)}
                geometry={MouseMesh.geometry}
                material={MouseMesh.material}
            />
        </group >
    )
}


Desk.defaultProps = defaultProps;
useGLTF.preload('assets/models/desk_set.glb')
useGLTF.preload('assets/models/mouse.glb')
useLoader.preload(TextureLoader, 'assets/textures/black-squared-fabric-texture.jpg')