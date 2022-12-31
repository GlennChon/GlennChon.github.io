import { Color, Euler, Group, Mesh, Vector3 } from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { GLTF } from 'three-stdlib'
import Mplus from '../fonts/Mplus_Round.json'
extend({ TextGeometry })

type GLTFResult = GLTF
    & {
        nodes: Record<string, THREE.Mesh>

        materials: {
            Material: THREE.MeshStandardMaterial
        }
    }

type KeyCapProps = {
    char?: string[],
    children?: any,
    color?: {
        [key: string]: Color;
    },
    capType?: string,
    capPos?: Vector3,
    capRot?: Euler,
    groupScale?: Vector3,
    groupPos?: Vector3,
    textOptions?: {
        font: typeof font,
        size: number,
        height: number,
    },
    textOptions2?: {
        font?: typeof font,
        size?: number,
        height?: number,
    } | undefined,
    primaryText?: string,
    primaryTextPos?: Vector3,
    primaryTextRot?: Euler,
    primaryTextScale?: Vector3,
    secondaryText?: string | undefined,
    secondaryTextPos?: Vector3,
    secondaryTextRot?: Euler,
    secondaryTextScale?: Vector3,
    isPressed?: boolean
} & typeof defaultProps
// Font
const font = new FontLoader().parse(Mplus)
const defaultTextOpts = {
    font: font,
    size: .33,
    height: .01,
}
// Colors
let defaultProps = {
    color: {
        primary: new Color("#fff"),
        secondary: new Color("#000"),
    },
    groupPos: new Vector3(0, 0, 0),
    groupScale: new Vector3(100, 100, 100),
    capType: "R1_100",
    capPos: new Vector3(0, 0, 0),
    capRot: new Euler(0, 0, 0),
    textOptions: defaultTextOpts,
    primaryText: "",
    primaryTextPos: new Vector3(-0.35, 0.31, -0.25),
    primaryTextRot: new Euler(Math.PI / 180 * -90, 0, 0),
    primaryTextScale: new Vector3(.1, .1, .1),
    secondaryText: "",
    secondaryTextPos: new Vector3(-0.35, 0.31, 0.3),
    secondaryTextRot: new Euler(Math.PI / 180 * -90, 0, 0),
    secondaryTextScale: new Vector3(.1, .1, .1),
}
export const KeyCap = (
    props: KeyCapProps
) => {
    const { nodes, materials } = useGLTF('./components/keyboard/keycaps.glb') as unknown as GLTFResult

    const keyCap = useRef<Group>(null)
    const capMesh = useRef<Mesh>(null)
    const charMesh = useRef<Mesh>(null)
    const [textGeo, setTextGeo] = useState<TextGeometry[]>([
        new TextGeometry(props.primaryText, props.textOptions),
        // @ts-ignore
        new TextGeometry(props.secondaryText, props.textOptions2 || props.textOptions)
    ])
    const [isDualChar, setIsDualChar] = useState(false)
    useFrame(() => {
        const { secondaryText, isPressed } = props
        if (typeof secondaryText !== 'undefined' || secondaryText !== "") {
            setIsDualChar(true)
        }
        isPressed ?
            keyCap.current?.position.setY(props.groupPos.y - 0.5)
            :
            keyCap.current?.position.setY(props.groupPos.y)
    })

    return (
        <group
            ref={keyCap}
            position={props.groupPos}
            scale={props.groupScale}
            dispose={null}>
            {/* Cap */}
            <mesh
                ref={capMesh}
                receiveShadow
                castShadow
                position={props.capPos}
                rotation={props.capRot}
                scale={nodes[`${props.capType}`].scale}
                geometry={nodes[`${props.capType}`].geometry}
            >
                <meshStandardMaterial
                    attach="material"
                    color={props?.color?.primary} />
            </mesh>
            {/* Character*/}
            <mesh
                ref={charMesh}
                geometry={textGeo[0]}
                position={props.primaryTextPos}
                rotation={props.primaryTextRot}
                scale={props.primaryTextScale}
            >
                <meshStandardMaterial
                    attach="material"
                    color={props?.color?.secondary} />
            </mesh>
            {
                isDualChar && (<mesh
                    ref={charMesh}
                    geometry={textGeo[1]}
                    position={props.secondaryTextPos}
                    rotation={props.secondaryTextRot}
                    scale={props.secondaryTextScale}
                >
                    <meshStandardMaterial
                        attach="material"
                        color={props?.color?.secondary} />
                </mesh>)
            }
        </group >
    )
}

KeyCap.defaultProps = defaultProps;
useGLTF.preload('./components/keyboard/keycaps.glb')