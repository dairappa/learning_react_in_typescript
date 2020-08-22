import React from "react";
import {useInput} from "./hooks/UseInput";

const ColorAddForm: React.FC<{
    onNewColor: (title: string, color: string) => void
}> = ({onNewColor}) => {
    const initialColor = "#000000";
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput(initialColor)


    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        onNewColor(titleProps.value, colorProps.value)
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