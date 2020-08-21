import React, {useState} from "react";

const ColorAddForm: React.FC<{
    onNewColor: (title: string, color: string) => void
}> = ({onNewColor}) => {
    const [title, setTitle] = useState("")
    const initialColor = "#000000";
    const [color, setColor] = useState(initialColor)

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        onNewColor(title, color)
        setTitle("")
        setColor(initialColor)
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                required
                value={title}
                onChange={event => {setTitle(event.target.value)}}
                placeholder="color title..."
            />
            <input
                type="color"
                required
                value={color}
                onChange={event => {setTitle(event.target.value)}}
            />
            <button>ADD</button>
        </form>
    )
}

export default ColorAddForm