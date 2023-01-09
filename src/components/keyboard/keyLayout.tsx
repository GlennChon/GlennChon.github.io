import { memo, useCallback, useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { Color, Euler, Vector3 } from 'three'
import KeyCap from './keycap'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import Mplus from '../fonts/Mplus_Round.json'
import { capTextPos } from './keys'
import { degToRad } from 'three/src/math/MathUtils.js'

// Font
const font = new FontLoader().parse(Mplus)
const defaultTextOpts = {
    font: font,
    size: 0.033,
    height: .005
}

type KeysProps = {
    groupPos?: Vector3,
    groupRot?: Euler,
    groupScale?: Vector3
} & typeof defaultKeysProps

const defaultKeysProps = {
    groupPos: new Vector3(0, 0, 0),
    groupRot: new Euler(0, 0, 0),
    groupScale: new Vector3(1, 1, 1),
}

const KeyLayout = (props: KeysProps) => {
    const [pressedKeys, setPressedKeys] = useState<string[]>([])
    const beige = new Color("rgba(219, 204, 170, 0.8)")
    const plumPurple = new Color("rgba(102, 95, 112, 0.8)")
    const plumRed = new Color("rgba(122, 57, 65, 0.8)")
    const capColors = {
        alpha: {
            primary: beige,
            secondary: plumPurple,
        },
        mod: {
            primary: plumPurple,
            secondary: beige,
        },
        special: {
            primary: plumRed,
            secondary: beige,
        }
    }
    const autoKeyUp = (key: any, timeout: number = 5000) => {
        setTimeout(() => {
            setPressedKeys((prev) => prev.filter((i) => i !== `${key}`))
        }, timeout)
    }

    const onKeyUp = useCallback((e: KeyboardEvent) => {
        if (e.code) {
            setPressedKeys((prev) => prev.filter((i) => i !== `${e.code}`))
        }
    }, [])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.code) {
            if (!pressedKeys.includes(e.code)) {
                setPressedKeys((prev) => [...prev, `${e.code}`])
                e.code === 'Tab' ? autoKeyUp('Tab', 500) : autoKeyUp(e.code)
            }
        }
    }, [pressedKeys])

    const isKeyPressed = (keys: string[]): boolean => {
        if (!keys) return false
        return pressedKeys.some(item => keys.includes(item))
    }

    useEventListener('keydown', onKeyDown)
    useEventListener('keyup', onKeyUp)
    const R1Keys = [{ primary: "!", secondary: "1", code: "Digit1" }, { primary: "@", secondary: "2", code: "Digit2" }, { primary: "#", secondary: "3", code: "Digit3" }, { primary: "$", secondary: "4", code: "Digit4" }, { primary: "%", secondary: "5", code: "Digit5" }, { primary: "^", secondary: "6", code: "Digit6" }, { primary: "&", secondary: "7", code: "Digit7" }, { primary: "*", secondary: "8", code: "Digit8" }, { primary: "(", secondary: "9", code: "Digit9" }, { primary: ")", secondary: "0", code: "Digit0" }, { primary: "_", secondary: "-", code: "Minus" }, { primary: "+", secondary: "=", code: "Equal" }, { primary: "|", secondary: "\\", code: "Backslash" }, { primary: "~", secondary: "`", code: "Backquote" }]
    const R2Keys = [{ primary: "Q", secondary: "", code: "KeyQ" }, { primary: "W", secondary: "", code: "KeyW" }, { primary: "E", secondary: "", code: "KeyE" }, { primary: "R", secondary: "", code: "KeyR" }, { primary: "T", secondary: "", code: "KeyT" }, { primary: "Y", secondary: "", code: "KeyY" }, { primary: "U", secondary: "", code: "KeyU" }, { primary: "I", secondary: "", code: "KeyI" }, { primary: "O", secondary: "", code: "KeyO" }, { primary: "P", secondary: "", code: "KeyP" }]
    const R2Double = [{ primary: "{", secondary: "[", code: "BracketLeft" }, { primary: "}", secondary: "]", code: "BracketRight" }]
    const R3Keys = [{ primary: "A", code: "KeyA" }, { primary: "S", code: "KeyS" }, { primary: "D", code: "KeyD" }, { primary: "F", code: "KeyF" }, { primary: "G", code: "KeyG" }, { primary: "H", code: "KeyH" }, { primary: "J", code: "KeyJ" }, { primary: "K", code: "KeyK" }, { primary: "L", code: "KeyL" }]
    const R3Double = [{ primary: ":", secondary: ";", code: "Semicolon" }, { primary: '"', secondary: "'", code: "Quote" }]
    const R4Keys = [{ primary: "Z", code: "KeyZ" }, { primary: "X", code: "KeyX" }, { primary: "C", code: "KeyC" }, { primary: "V", code: "KeyV" }, { primary: "B", code: "KeyB" }, { primary: "N", code: "KeyN" }, { primary: "M", code: "KeyM" }]
    const R4Double = [{ primary: "<", secondary: ",", code: "Comma" }, { primary: ">", secondary: ".", code: "Period" }, { primary: "?", secondary: "/", code: "Slash" }]

    return (
        <group
            receiveShadow
            castShadow
            position={props.groupPos}
            rotation={props.groupRot}
            scale={props.groupScale}
        >
            {/* R1 */}
            <KeyCap
                color={capColors.special}
                primaryText='Esc'
                textOptions={{ ...defaultTextOpts, size: 0.022 }}
                primaryTextPos={capTextPos['R1'][100].escape.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 4, 0)}
                isPressed={isKeyPressed(['Escape'])}
            />
            {/* Number Row */}
            {
                R1Keys.map((key, index) => {
                    const offset = index * 1.9
                    return (
                        <KeyCap
                            key={key.code}
                            groupPos={new Vector3(1.9 + offset, 0, 0)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            secondaryText={key.secondary}
                            textOptions={{ ...defaultTextOpts, size: 0.025 }}
                            primaryTextPos={capTextPos['R1'][100].double.primary}
                            secondaryTextPos={capTextPos['R1'][100].double.secondary}
                            primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 4, 0)}
                            secondaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 4, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(28.5, 0, 0)}
                primaryText='ð'
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R1'][100].peach.primary}
                isPressed={isKeyPressed(['ð'])}
            />
            {/* R2 */}
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(0.45, -0.14, 2)}
                capType={'R2_150'}
                primaryText={'↹'}
                secondaryText={'Tab'}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                textOptions2={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R2'][150].tab.primary}
                secondaryTextPos={capTextPos['R2'][150].tab.secondary}
                primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 2, 0)}
                secondaryTextRot={new Euler(Math.PI / 180 * -92, Math.PI / 180 * 2, 0)}
                isPressed={isKeyPressed(['Tab'])}
            />
            {/* R2 Alpha */}
            {
                R2Keys.map((key, index) => {
                    const offset = index * 1.91
                    return (
                        <KeyCap
                            key={key.code}

                            capType={'R2_100'}
                            groupPos={new Vector3(2.8 + offset, -0.14, 2)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            secondaryText={key.secondary}
                            textOptions={defaultTextOpts}
                            primaryTextPos={capTextPos['R2'][100].single.primary}
                            primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 2, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            {
                R2Double.map((key, index) => {
                    const offset = index * 1.91
                    return (
                        <KeyCap
                            key={key.code}
                            capType={'R2_100'}
                            groupPos={new Vector3(21.89 + offset, -0.14, 2)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            secondaryText={key.secondary}
                            textOptions={{ ...defaultTextOpts, size: 0.025 }}
                            primaryTextPos={capTextPos['R2'][100].double.primary}
                            secondaryTextPos={capTextPos['R2'][100].double.secondary}
                            primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 2, 0)}
                            secondaryTextRot={new Euler(Math.PI / 180 * -94, Math.PI / 180 * 5, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(26.15, -0.14, 2)}
                capType={'R2_150'}
                primaryText={`←`}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R2'][150].back.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -90, Math.PI / 180 * 2, 0)}
                isPressed={isKeyPressed(['Backspace'])}
            />
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(28.5, -0.14, 2)}
                capType={'R2_100'}
                primaryText={'Delete'}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R2'][100].del.primary}
                isPressed={isKeyPressed(['Delete'])}
            />
            {/* R3 */}
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(0.67, -0.16, 4)}
                capType={'R3_175'}
                primaryText={'Caps Lock'}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R3'][175].caps.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 1, 0)}
                isPressed={isKeyPressed(['CapsLock'])}
            />
            {/* R3 Alpha */}
            {
                R3Keys.map((key, index) => {
                    const offset = index * 1.915
                    return (
                        <KeyCap
                            key={key.code}
                            capType={'R3_100'}
                            groupPos={new Vector3(3.26 + offset, -0.16, 4)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            textOptions={defaultTextOpts}
                            primaryTextPos={capTextPos['R3'][100].single.primary}
                            primaryTextRot={new Euler(Math.PI / 180 * -93, Math.PI / 180 * 2, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            {
                R3Double.map((key, index) => {
                    const offset = index * 1.915
                    return (
                        <KeyCap
                            key={key.code}
                            capType={'R3_100'}
                            groupPos={new Vector3(20.485 + offset, -0.16, 4)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            secondaryText={key.secondary}
                            textOptions={{ ...defaultTextOpts, size: 0.025 }}
                            primaryTextPos={capTextPos['R3'][100].double.primary}
                            secondaryTextPos={capTextPos['R3'][100].double.secondary}
                            primaryTextRot={new Euler(Math.PI / 180 * -94, Math.PI / 180 * 2, 0)}
                            secondaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 2, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(25.47, -0.16, 4)}
                capType={'R3_225'}
                primaryText={'↵'}
                secondaryText={'Enter'}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                textOptions2={{ ...defaultTextOpts, size: .022 }}
                primaryTextRot={new Euler(Math.PI / 180 * -95, Math.PI / 180 * 2, 0)}
                secondaryTextRot={new Euler(Math.PI / 180 * -95, Math.PI / 180 * 1, 0)}
                primaryTextPos={capTextPos['R3'][225].enter.primary}
                secondaryTextPos={capTextPos['R3'][225].enter.secondary}
                isPressed={isKeyPressed(['Enter'])}
            />
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(28.5, -0.16, 4)}
                capType={'R3_100'}
                primaryText={'PgUp'}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R3'][100].pgUp.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -95, Math.PI / 180 * .5, 0)}
                isPressed={isKeyPressed(['PageUp'])}
            />
            {/* R4 */}
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(1.12, -0.14, 6)}
                capType={'R4_225'}
                primaryText={'\u21e7'}
                secondaryText={'Shift'}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                textOptions2={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][225].shift.primary}
                secondaryTextPos={capTextPos['R4'][225].shift.secondary}
                primaryTextRot={new Euler(Math.PI / 180 * -97, 0, 0)}
                secondaryTextRot={new Euler(Math.PI / 180 * -97, 0, 0)}
                isPressed={isKeyPressed(['ShiftLeft'])}
            />
            {/* R4 Alpha */}
            {
                R4Keys.map((key, index) => {
                    const offset = index * 1.915
                    return (
                        <KeyCap
                            key={key.code}
                            capType={'R4_100'}
                            groupPos={new Vector3(4.15 + offset, -0.14, 6)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            textOptions={defaultTextOpts}
                            primaryTextPos={capTextPos['R4'][100].single.primary}
                            primaryTextRot={new Euler(Math.PI / 180 * -97, Math.PI / 180 * 2, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            {
                R4Double.map((key, index) => {
                    const offset = index * 1.915
                    return (
                        <KeyCap
                            key={key.code}
                            capType={'R4_100'}
                            groupPos={new Vector3(17.55 + offset, -0.14, 6)}
                            color={capColors.alpha}
                            primaryText={key.primary}
                            secondaryText={key.secondary}
                            textOptions={{ ...defaultTextOpts, size: 0.025 }}
                            primaryTextPos={capTextPos['R4'][100].double.primary}
                            secondaryTextPos={capTextPos['R4'][100].double.secondary}
                            primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 4, 0)}
                            secondaryTextRot={new Euler(Math.PI / 180 * -100, Math.PI / 180 * 2, 0)}
                            isPressed={isKeyPressed([key.code])}
                        />)
                })
            }
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(23.98, -0.14, 6)}
                capType={'R4_175'}
                primaryText={'\u21e7'}
                secondaryText={'Shift'}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                textOptions2={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][175].shift.primary}
                secondaryTextPos={capTextPos['R4'][175].shift.secondary}
                primaryTextRot={new Euler(Math.PI / 180 * -97, Math.PI / 180 * 1, 0)}
                secondaryTextRot={new Euler(Math.PI / 180 * -97, Math.PI / 180 * 1, 0)}
                isPressed={isKeyPressed(['ShiftRight'])}
            />
            <KeyCap
                color={capColors.special}
                groupPos={new Vector3(26.6, -0.14, 6)}
                capType={'R4_100'}
                primaryText={'\u2191'}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R4'][100].vertical.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -95.5, Math.PI / 180 * 2.5, 0)}
                isPressed={isKeyPressed(['ArrowUp'])}
            />
            <KeyCap
                color={capColors.mod}
                groupPos={new Vector3(28.5, -0.14, 6)}
                capType={'R4_100'}
                primaryText={'PgDn'}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][100].pgDn.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * .5, 0)}
                isPressed={isKeyPressed(['PageDown'])}
            />
            {/* R5 */}
            <KeyCap
                capType={'R4_125'}
                color={capColors.mod}
                primaryText={'Control'}
                groupPos={new Vector3(0.22, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][125].control.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 1.25, 0)}
                isPressed={isKeyPressed(['ControlLeft'])}
            />
            <KeyCap
                capType={'R4_125'}
                color={capColors.mod}
                primaryText={'\u2318'}
                groupPos={new Vector3(2.57, -0.14, 8)}
                textOptions={defaultTextOpts}
                primaryTextPos={capTextPos['R4'][125].win.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96.5, 0, 0)}
                isPressed={isKeyPressed(['MetaLeft'])}
            />
            <KeyCap
                capType={'R4_125'}
                color={capColors.mod}
                primaryText={'Alt'}
                groupPos={new Vector3(4.92, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][125].alt.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96.2, Math.PI / 180 * 2.25, 0)}
                isPressed={isKeyPressed(['AltLeft'])}
            />
            <KeyCap
                capType={'Space_625'}
                color={capColors.alpha}
                primaryText={'\u2318'}
                groupPos={new Vector3(12.07, -0.1, 8)}
                textOptions={defaultTextOpts}
                primaryTextPos={capTextPos['R4'][125].control.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -97, Math.PI / 180 * 2, 0)}
                isPressed={isKeyPressed(['Space'])}
            />
            <KeyCap
                capType={'R4_125'}
                color={capColors.mod}
                primaryText={'Fn'}
                groupPos={new Vector3(19.242, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][125].fn.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 2.8, 0)}
                isPressed={false}
            />
            <KeyCap
                capType={'R4_175'}
                color={capColors.mod}
                primaryText={'Control'}
                groupPos={new Vector3(22.042, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .022 }}
                primaryTextPos={capTextPos['R4'][175].control.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 1.25, 0)}
                isPressed={isKeyPressed(['ControlRight'])}
            />
            <KeyCap
                capType={'R4_100'}
                color={capColors.special}
                primaryText={'\u2190'}
                groupPos={new Vector3(24.656, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R4'][100].horizontal.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 2.5, 0)}
                isPressed={isKeyPressed(['ArrowLeft'])}
            />
            <KeyCap
                capType={'R4_100'}
                color={capColors.special}
                primaryText={'\u2193'}
                groupPos={new Vector3(26.556, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R4'][100].vertical.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -95.5, Math.PI / 180 * 2.25, 0)}
                isPressed={isKeyPressed(['ArrowDown'])}
            />
            <KeyCap
                capType={'R4_100'}
                color={capColors.special}
                primaryText={'\u2192'}
                groupPos={new Vector3(28.5, -0.14, 8)}
                textOptions={{ ...defaultTextOpts, size: .05 }}
                primaryTextPos={capTextPos['R4'][100].horizontal.primary}
                primaryTextRot={new Euler(Math.PI / 180 * -96, Math.PI / 180 * 2.5, 0)}
                isPressed={isKeyPressed(['ArrowRight'])}
            />
            <spotLight
                castShadow
                intensity={.8}
                position={new Vector3(0, 20, 0)}
                angle={degToRad(0)}
                color="white" />
        </group>)
}

KeyLayout.defaultProps = defaultKeysProps;
export default memo(KeyLayout)