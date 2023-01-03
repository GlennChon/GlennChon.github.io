// take ref and update vector3 position
import { MutableRefObject } from 'react'
import { Euler, Group, Mesh, Vector3 } from 'three'

export const updatePosition = (ref: MutableRefObject<Group | Mesh >, position: Vector3) => {
    ref.current.position.x = position.x
    ref.current.position.y = position.y
    ref.current.position.z = position.z
}

export const updateRotation = (ref: MutableRefObject<Group | Mesh>, rotation: Euler) => {
    ref.current.rotation.x = rotation.x
    ref.current.rotation.y = rotation.y
    ref.current.rotation.z = rotation.z
}

export const updateScale = (ref: MutableRefObject<Group | Mesh>, scale: Vector3) => {
    ref.current.scale.x = scale.x
    ref.current.scale.y = scale.y
    ref.current.scale.z = scale.z
}

