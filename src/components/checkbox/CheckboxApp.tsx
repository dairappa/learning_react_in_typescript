import React, {useEffect, useState} from "react";

export const CheckboxApp: React.FC = () => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        console.log(`checked: ${checked.toString()}`)
    })

    return (
        <>
            <input
                type="checkbox"
                value={`${checked}`}
                onChange={() => setChecked(checked => !checked)}/>
            {checked ? "checked" : "not checked"}
        </>
    )
}