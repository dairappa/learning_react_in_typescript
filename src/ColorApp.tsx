import React, {useState} from "react";
import {colorData} from "./data/color";
import Colors from "./Colors";
import ColorAddForm from "./ColorAddForm";
import {v4} from "uuid"

export type ColorData = {
    id: string,
    title: string,
    color: string,
    rating: number
}

const ColorApp: React.FC = () => {
    const [colors, setColors] = useState(colorData)
    return (
        <>
        <Colors
            colors={colors}
            onRate={(id, rate) => {
                setColors(colors.map(color => {
                    return color.id === id ? {...color, rating: rate} : color
                }))
            }}
            onRemove={id => {
                setColors(colors.filter(color => color.id !== id))
            }}
        />
        <ColorAddForm onNewColor={(title, color) => {
            setColors([
                ...colors,
                {id: v4().toString(), title: title, color: color, rating: 0}
            ])
        }} />
        </>
    )

}
export default ColorApp