import {useEffect, useState} from "react";

export const useAnyKeyToRender = () => {
    const [, forceRender] = useState()

    useEffect(() => {
        window.addEventListener("keydown", forceRender)
        return () => window.removeEventListener("keydown", forceRender)
    }, [])
}