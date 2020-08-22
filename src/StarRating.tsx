import React, {MouseEventHandler} from "react";
import {FaStar} from "react-icons/fa";

const Star: React.FC<{
    selected?: boolean,
    onSelect: MouseEventHandler
}> = (
    {
        selected = false,
        onSelect
    }) => {
    return (
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
    )
}

const createArray = (length: number) => [...Array(length)]

const StarRating: React.FC<{ totalStars?: number, selectedStars?: number, onRate?: (rate: number) => void }> =
    (
        {
            totalStars = 5,
            selectedStars = 0,
            onRate = () => {
            }
        }) => {
        return (
            <>
                {
                    createArray(totalStars).map((n, index) =>
                        <Star
                            key={index}
                            selected={selectedStars > index}
                            onSelect={() => {
                                onRate(index + 1)
                            }}
                        />)
                }
                <p>
                    {selectedStars} of {totalStars} stars
                </p>
            </>
        )
    }

export default StarRating