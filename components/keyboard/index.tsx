import { Vector3 } from "three";
import { isExternalModuleReference } from "typescript";
import { KeyboardCase } from "./keyboardCase";
import { KeyLayout } from "./keyLayout";

export const Keyboard = () => {
    return (
        <>
            <KeyboardCase />
            <KeyLayout groupPos={new Vector3(-14.25, 2.05, -3.75)} />
        </>
    )
}