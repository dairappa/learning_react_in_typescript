import React, {useState} from "react"

export const useInput: (initialValue: string) =>
    [
        {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
            value: string
        },
        () => void
    ] = (initialValue:string) => {
    const [value, setValue] = useState(initialValue)
    return [
        {value, onChange: (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)},
        () => setValue(initialValue)
    ]
}