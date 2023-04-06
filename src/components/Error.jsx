import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
    return (
        <div className="error-container">
            <h1>An error has ocurred!</h1>
            <h3>Error: {error.message}</h3>
            {
                error.status ? <h3>{error.status} - {error.statusText}</h3> : null
            }
        </div>
    )
}

export default Error