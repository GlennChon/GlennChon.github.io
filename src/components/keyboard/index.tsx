import { Vector3 } from "three";
import { KeyboardCase } from "./keyboardCase";
import { KeyLayout } from "./keyLayout";

export const Keyboard = () => {
    return (
        <>
            <KeyboardCase />
            <KeyLayout groupPos={new Vector3(-14.25, 1.75, -4)} />
        </>
    )
}