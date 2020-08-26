import {useLayoutEffect, useState} from "react";

export const useMousePosition = () => {
    const[position, setPosition] = useState<{x:number, y:number}>()

    useLayoutEffect(() => {
        window.addEventListener("mousemove", setPosition)
        return () => window.removeEventListener("mousemove", setPosition)
    },[])

    return [position]
}