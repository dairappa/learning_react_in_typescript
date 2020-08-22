import React, {useContext} from "react";
import Color from "./Color";
import {ColorContext} from "./ColorProvider";

const Colors: React.FC = () => {
    const {colors, rateColor, removeColor} = useContext(ColorContext)
    return colors.length ? (
        <>
            {
                colors.map((color, i) => (
                    <Color
                        key={i}
                        color={color}
                        onRate={(id, rate) => {
                            rateColor(id, rate)
                        }}
                        onRemove={id => {
                            removeColor(id)
                        }}
                    />
                ))
            }
        </>
    ) : (<div>No Colors</div>);
}

export default Colors