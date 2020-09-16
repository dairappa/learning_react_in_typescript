import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {useFetch} from "../../hooks/UseFetch";
import {useInput} from "../../hooks/UseInput";
import {Fetch} from "../Fetch";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GithubUser: React.FC<{ login: string }> = ({login}) => {
    const loadJSON = (key: string) => {
        const item = localStorage.getItem(key);
        return key && item && JSON.parse(item);
    }
    const saveJSON = (key: string, data: any) =>
        key && localStorage.setItem(key, JSON.stringify(data))

    const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)

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

const UserDetails: React.FC<{ data: any }> = ({data}) => {
    return (
        <div className="githubUser">
            <img src={data.avatar_url} alt={data.login} style={{width: 200}}/>
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    )
}

const GithubUserUsingFetchComponent: React.FC<{ login: string }> = ({login}) => {
    return (
        <>
            <Fetch uri={`https://api.github.com/users/${login}`}
                   renderSuccess={data => (<UserDetails data={data}/>)}
            />
        </>
    )
}

export const GithubUserApp: React.FC = () => {
    const initial = "moontahoe";
    const [loginProps,] = useInput(initial)
    const [login, setLogin] = useState(initial)


    return (
        <>
            <input type="text" {...loginProps} />
            <input value="Submit" type="button" onClick={
                () => {
                    setLogin(loginProps.value)
                }}/>

            <GithubUserUsingFetchComponent login={login}/>
        </>
    )


}