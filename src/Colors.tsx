import React from "react";
import {ColorData} from "./ColorApp";
import Color from "./Color";

const Colors: React.FC<{
    colors: ColorData[],
    onRemove?:(id:string) => void,
    onRate?:(id:string, rate:number) => void
}> = (
    {
        colors,
        onRemove = () => {},
        onRate = () => {}
    }) => {
    return colors.length ? (
        <>
            {
                colors.map((color, i) => (
                    <Color
                        key={i}
                        color={color}
                        onRate={(id, rate) => {
                            onRate(id, rate)
                        }}
                        onRemove={id => {
                            onRemove(id)
                        }}
                    />
                ))
            }
        </>
    ) : (<div>No Colors</div>);
}

export default Colors