import React, {createContext, useContext, useState} from "react";
import {colorData} from "../../data/color";
import {ColorData} from "./ColorApp";
import {v4} from "uuid";

const ColorContext = createContext<{
    colors: ColorData[],
    addColor: (title: string, color: string) => void,
    removeColor: (id: string) => void,
    rateColor: (id: string, rating: number) => void
}>({
    colors: [],
    addColor: () => {
    },
    removeColor: () => {
    },
    rateColor: () => {
    }
})

export const useColors = () => useContext(ColorContext)

export const ColorProvider: React.FC = ({children}) => {
    const [colors, setColors] = useState(colorData)

    const addColor = (title: string, color: string): void => {
        setColors([
            ...colors,
            {
                id: v4().toString(),
                title,
                color,
                rating: 0
            }
        ])
    }

    const removeColor = (id: string): void => {
        setColors(colors.filter(color => color.id !== id))
    }

    const rateColor = (id: string, rating: number): void => {
        setColors(
            colors.map(color => color.id === id ? {...color, rating} : {...color})
        )
    }

    return (
        <ColorContext.Provider value={{colors, addColor, removeColor, rateColor}}>
            {children}
        </ColorContext.Provider>
    )
}