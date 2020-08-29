import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';

export const GithubUser: React.FC<{ login: string }> = ({login}) => {
    const loadJSON = (key: string) => {
        const item = localStorage.getItem(key);
        return key && item && JSON.parse(item);
    }
    const saveJSON = (key: string, data: any) =>
        key && localStorage.setItem(key, JSON.stringify(data))

    const initialData = useMemo(() => loadJSON(`user:${login}`), [login])

    const [data, setData] = useState(initialData)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState()

    useEffect(() => {
        if (!data) return

        if (data.login === login) return

        const {name, avatar_url, location} = data
        saveJSON(`user:${login}`, {
            name,
            login,
            avatar_url,
            location
        })
    }, [data, login])

    useEffect(() => {
        (async () => {
            if (!login) return

            if (data && data.id && data.login.toLowerCase() === login.toLowerCase()) return

            try {
                setLoading(true)
                const response = await fetch(`https://api.github.com/users/${login}`);
                const json = await response.json();
                setLoading(false)
                setData(json)
            } catch (e) {
                setError(e)
            }

        })()
    }, [data, login])

    if (error) return <pre>{JSON.stringify(error)}</pre>

    if (!data) return null

    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {loading ? <h1>loading...</h1> : null}
        </>
    )
}