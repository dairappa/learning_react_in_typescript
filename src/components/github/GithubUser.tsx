import * as React from 'react';
import {useEffect, useMemo} from 'react';
import {useFetch} from "../../hooks/UseFetch";

export const GithubUser: React.FC<{ login: string }> = ({login}) => {
    const loadJSON = (key: string) => {
        const item = localStorage.getItem(key);
        return key && item && JSON.parse(item);
    }
    const saveJSON = (key: string, data: any) =>
        key && localStorage.setItem(key, JSON.stringify(data))

    const [loading, data, error] = useFetch(`https://api.github.com/users/${login}`)

    const initialData = useMemo(() => loadJSON(`user:${login}`), [login])

    const drawData = data ?? initialData

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


    if (error) return <pre>{JSON.stringify(error)}</pre>

    if (!drawData) return null

    return (
        <>
            <pre>{JSON.stringify(drawData, null, 2)}</pre>
            {loading ? <h1>loading...</h1> : null}
        </>
    )
}