import * as React from 'react';
import {useEffect, useState} from 'react';

export const GithubUser: React.FC<{ login: string }> = ({login}) => {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            if (!login) {
                return
            }
            try {
                const response = await fetch(`https://api.github.com/users/${login}`);
                const data = await response.json();
                setData(data)
            } catch (e) {
                console.error()
            }

        })()
    }, [login])

    if (data) {
        return (
            <pre>{JSON.stringify(data, null, 2)}</pre>
        )
    }

    return null
}