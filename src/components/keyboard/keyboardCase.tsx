import { useGLTF } from '@react-three/drei'
import { memo, useRef } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Color, Euler, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three'

type GLTFResult = GLTF
    & {
        nodes: Record<string, Mesh>

        materials: {
            Material: MeshStandardMaterial
        }
    }

type KeyCaseProps = {
    char?: string[],
    children?: any,
    color?: {
        [key: string]: Color;
    },
    groupScale?: Vector3,
    groupPos?: Vector3,
    groupRot?: Euler,
    casePos?: Vector3,
    caseRot?: Euler,
    casePlatePos?: Vector3,
    casePlateRot?: Euler,
}
let defaultProps = {
    color: {
        primary: new Color("rgba(116, 116, 115, 1)"),
        secondary: new Color("rgba(138, 139, 136,1)"),
    },
    groupPos: new Vector3(0, 0, 0),
    groupScale: new Vector3(100, 100, 100),
    groupRot: new Euler(0, 0, 0),
    casePos: new Vector3(0, 0, 0),
    caseRot: new Euler(0, 0, 0),
    casePlatePos: new Vector3(0, 0.004, 0),
    casePlateRot: new Euler(0, 0, 0),
}

const KeyboardCase = (
    props: KeyCaseProps
) => {
    const { nodes } = useGLTF('assets/models/keyboardCase.glb') as unknown as GLTFResult
    const keyboardMesh = useRef<Group>(null!)
    const casePlateMesh = useRef<Mesh>(null!)
    const caseMesh = useRef<Mesh>(null!)

    return (
        <group
            ref={keyboardMesh}
            position={props.groupPos}
            rotation={props.groupRot}
            scale={props.groupScale}
            receiveShadow
            castShadow
        >
            <mesh
                receiveShadow
                castShadow
                ref={caseMesh}
                position={props.casePos}
                rotation={props.caseRot}
                scale={nodes.Case.scale}
                geometry={nodes.Case.geometry}
            >
                <meshStandardMaterial
                    attach="material"
                    color={props?.color?.primary} />
            </mesh>
            <mesh
                ref={casePlateMesh}
                receiveShadow
                castShadow
                position={props.casePlatePos}
                rotation={props.casePlateRot}
                scale={nodes.Case_Plate.scale}
                geometry={nodes.Case_Plate.geometry}
            >
                <meshStandardMaterial
                    attach="material"
                    color={props?.color?.secondary}
                />
            </mesh>
        </group >
    )
}

KeyboardCase.defaultProps = defaultProps;
useGLTF.preload('assets/models/keyboardCase.glb')
export default memo(KeyboardCase)