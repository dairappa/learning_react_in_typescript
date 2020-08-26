import React from "react";
import {useInput} from "../../hooks/UseInput";
import {useColors} from "./ColorProvider";

const ColorAddForm: React.FC = () => {
    const initialColor = "#000000";
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput(initialColor)

    const {addColor} = useColors()
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        addColor(titleProps.value, colorProps.value)
        resetTitle()
        resetColor()
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                required
                {...titleProps}
                placeholder="color title..."
            />
            <input
                type="color"
                required
                {...colorProps}
            />
            <button>ADD</button>
        </form>
    )
}

export default ColorAddForm