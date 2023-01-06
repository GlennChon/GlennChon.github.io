import KeyLayout from "./keyLayout"
import { useEffect, useRef } from "react"
import KeyboardCase from "./keyboardCase"
import { Euler, Group, Vector3 } from "three"
import { memo } from "react"
import { updatePosition, updateRotation, updateScale } from "utils/transform"

type KeyboardProps = {
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

const Keyboard = (props: KeyboardProps) => {
    const groupRef = useRef<Group>(null!)

    useEffect(() => {
        updatePosition(groupRef, props.groupPos)
        updateRotation(groupRef, props.groupRot)
        updateScale(groupRef, props.groupScale)
    }, [props.groupPos, props.groupRot, props.groupScale])

    return (
        <group receiveShadow castShadow ref={groupRef}>
            <KeyboardCase />
            <KeyLayout groupPos={new Vector3(-14.25, 1.75, -4)} />
            <ambientLight castShadow intensity={.15} color="white" />
        </group>
    )
}

Keyboard.defaultProps = defaultProps
export default memo(Keyboard)