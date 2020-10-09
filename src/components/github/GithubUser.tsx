import * as React from 'react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useFetch} from "../../hooks/UseFetch";
import {useInput} from "../../hooks/UseInput";
import {Fetch} from "../Fetch";
import {useIterator} from "../../hooks/UseIterator";
import ReactMarkdown from "react-markdown";
import {log} from "util";
import {useMountRef} from "../../hooks/UseMountRef";

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

const RepoMenu: React.FC<{
    repositories: { name: string }[],
    login: string,
    onSelect: (selection: string) => void
}> = ({repositories, onSelect, login}) => {
    const {current, prev, next} = useIterator(repositories)

    useEffect(() => {
        if (!current) return
        onSelect(current.name)
    }, [current, onSelect])

    return (
        <>
            <div style={{display: "flex"}}>
                <button onClick={prev}>&lt;</button>
                <p>{current?.name}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    )
}

const UserRepositories: React.FC<{
    login: string,
    onSelect: (selection: any) => void
}> = ({login, onSelect}) => {

    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={(data) => (
                <RepoMenu repositories={data} onSelect={onSelect} login={login}/>
            )}/>
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

const RepositoryReadme: React.FC<{ repo: string, login: string }> = ({repo, login}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [markdown, setMarkdown] = useState("")

    const mounted = useMountRef()

    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true)
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`
        const {download_url} = await fetch(uri).then(res => res.json())

        const markdown = await fetch(download_url).then(res => res.text())
        if(mounted.current){
            setMarkdown(markdown)
            setLoading(false)
        }

    }, [])

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError)

    }, [loadReadme, login, repo])

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    if (loading) return <p>Loading...</p>

    return <ReactMarkdown source={markdown}/>
}

export const GithubUserApp: React.FC = () => {
    const [loginProps,] = useInput("")
    const [login, setLogin] = useState("")
    const [repo, setRepo] = useState("")

    const handleSearch = (login: string): void => {
        if(login) return setLogin(login)

        setLogin("")
    }

    return (
        <>
            <input type="text" {...loginProps} />
            <input value="Submit" type="button" onClick={
                () => {
                    setLogin(loginProps.value)
                }}/>

            {login && <GithubUserUsingFetchComponent login={login}/>}
            {login && <UserRepositories
                login={login}
                onSelect={repoName => setRepo(repoName)}/>}
            {login && repo && <RepositoryReadme repo={repo} login={login} />}
        </>
    )


}