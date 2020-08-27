import React, {useEffect, useReducer} from "react";

export const CheckboxApp: React.FC = () => {
    const [checked, toggle] = useReducer(checked => !checked, false)

    useEffect(() => {
        console.log(`checked: ${checked.toString()}`)
    })

    return (
        <>
            <input
                type="checkbox"
                value={`${checked}`}
                onChange={() => toggle()}/>
            {checked ? "checked" : "not checked"}
        </>
    )
}