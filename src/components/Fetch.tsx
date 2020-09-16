import React from "react";
import {useFetch} from "../hooks/UseFetch";

export const Fetch: React.FC<{
    uri: string,
    renderSuccess: (data: any) => JSX.Element,
    loadingFallback?: () => JSX.Element,
    renderError?: (e: any) => JSX.Element
}> = ({
          uri,
          renderSuccess,
          loadingFallback = () => (<p> loading </p>),
          renderError = e => (<pre>{JSON.stringify(e)}</pre>)
      }) => {
    const {data, loading, error} = useFetch(uri)

    if(loading) return loadingFallback()
    if(error) return renderError(error)
    if(data) return renderSuccess(data)

    return null
}