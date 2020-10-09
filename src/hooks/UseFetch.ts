import {useEffect, useState} from "react";
import {useMountRef} from "./UseMountRef";


export function useFetch(url: string){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const mounted = useMountRef()

    useEffect(() => {
        if (!url) return
        if(!mounted.current) return

        (async () => {
            try {
                const data = await fetch(url)
                setData(await data.json())
                setLoading(false)
            } catch (e) {
                setError(e)
            }
        })()

    },[url])

    return {
        loading,
        data,
        error
    }
}