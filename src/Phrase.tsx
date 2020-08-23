import * as React from 'react';
import {useEffect, useState} from "react";

export const Phrase: React.FC = () => {
    const [val, set] = useState("")
    const [phrase, setPhrase] = useState("example phrase")

    const createPhrase = () => {
        setPhrase(val)
        set("")
    }

    useEffect(() => {
        console.log(`typing "${val}"`)
    }, [val])

    useEffect(() => {
        console.log(`saved phrase "${phrase}"`)
    }, [phrase])

    useEffect(() => {
        console.log("either val or phrase changed")
    }, [val, phrase])

    useEffect(() => {
        console.log("only once after initial render")

        return () => {
            console.log("And When removed.")
        };
    }, []);


    return (
        <div>
            <label>Favorite Phrase</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </div>
    )
}