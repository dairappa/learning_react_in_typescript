import React from "react";
import Colors from "./Colors";
import ColorAddForm from "./ColorAddForm";

export type ColorData = {
    id: string,
    title: string,
    color: string,
    rating: number
}

const ColorApp: React.FC = () => {
    return (
        <>
            <Colors/>
            <ColorAddForm/>
        </>
    )

}
export default ColorApp