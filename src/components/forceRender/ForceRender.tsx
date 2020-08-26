import * as React from 'react';
import {useCallback, useEffect, useMemo} from 'react';
import {useAnyKeyToRender} from "../../hooks/UseAnyKeyToRender";
import {useWindowSize} from "../../hooks/UseWindowSize";
import {useInput} from "../../hooks/UseInput";
import {useMousePosition} from "../../hooks/UseMousePosition";

export const ForceRender: React.FC = () => {
    useAnyKeyToRender()
    const [width, height] = useWindowSize()
    const [wordInputParam] = useInput("You are not going to believe this, but...")
    const [position] = useMousePosition()

    const fn = useCallback(() => {
        console.log("Hello")
        console.log("World")
    }, [])

    useEffect(() => {
        fn()
    }, [fn])

    useEffect(() => {
        console.log(`position: ${position}`)
    }, [position])

    return (
        <>
            <div>
                <input {...wordInputParam}/>
                <WordCount>{wordInputParam.value}</WordCount>
            </div>
            <div>
                {`width:${width}, height:${height}`}
            </div>
        </>
    )
}

const WordCount: React.FC = ({children}) => {
    const words = useMemo(() => {
        return children?.toString().split(" ") ?? []
    }, [children])

    useEffect(() => {
        console.log("fresh render")
    }, [words])

    return (
        <>
            <p>{children}</p>
            <strong>{words.length}</strong>
        </>
    )
}