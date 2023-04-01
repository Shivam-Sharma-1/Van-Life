import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
    return (
        <>
            <h1>An error has ocurred!</h1>
            <h3>Error: {error.message}</h3>
            <h3>{error.status} - {error.statusText}</h3>
        </>
    )
}

export default Error