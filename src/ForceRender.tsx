import * as React from 'react';
import {useAnyKeyToRender} from "./hooks/UseAnyKeyToRender";
import {useCallback, useEffect, useMemo} from "react";

export const ForceRender: React.FC = () => {
    useAnyKeyToRender()

    const fn = useCallback(() =>  {
        console.log("Hello")
        console.log("World")
    }, [])

    useEffect(() => {
        fn()
    }, [fn])

    return (
        <div>
            <WordCount>You are not going to believe this, but...</WordCount>
        </div>
    )
}

const WordCount: React.FC = ({children}) => {
    const words = useMemo( () => {
        return children?.toString().split(" ") ?? []
    }, [children])

    useEffect(() => {
        console.log("fresh render")
    }, [words])

    return(
        <>
            <p>{children}</p>
            <strong>{words.length}</strong>
        </>
    )
}