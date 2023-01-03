import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Euler, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three'
import { updatePosition, updateRotation, updateScale } from 'utils/transform'

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
    const { nodes } = useGLTF('assets/models/desk.glb') as unknown as GLTFResult
    const groupRef = useRef<Group>(null!)
    const defaultMeshScale = new Vector3(100, 100, 100)
    const defaultMeshRotation = new Euler(0, 0, 0)

    const [DeskMesh] = useState(nodes.desk)

    useEffect(() => {
        updatePosition(groupRef, props.groupPos)
        updateRotation(groupRef, props.groupRot)
        updateScale(groupRef, props.groupScale)
    }, [props.groupPos, props.groupRot, props.groupScale])

    return (
        <group ref={groupRef}>
            {
                DeskMesh.children.map((child: Mesh, index) => {
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
        </group >
    )
}


Desk.defaultProps = defaultProps;
useGLTF.preload('assets/models/desk.glb')