import {useEffect, useState} from "react";


export function useFetch(url: string){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) return

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