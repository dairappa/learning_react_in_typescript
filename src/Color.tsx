import React from "react";
import {ColorData} from "./ColorApp";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

const Color: React.FC<
    {
        color: ColorData,
        onRemove?:(id:string) => void,
        onRate?:(id:string, rate:number) => void
    }> = (
        {
            color,
            onRemove = () => {},
            onRate = () => {}
        }) => {
    return (
        <section>
            <h1>{color.title}</h1>
            <button onClick={() => onRemove(color.id)}>
                <FaTrash />
            </button>
            <div style={{height: 50, backgroundColor: color.color}}/>
            <StarRating selectedStars={color.rating} onRate={rate => onRate(color.id, rate)}/>
        </section>
    );
}

export default Color