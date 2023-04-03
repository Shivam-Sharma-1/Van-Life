import { redirect } from "react-router-dom"

async function requiredAuth(request) {
    const isLoggedIn = localStorage.getItem('loggedIn')
    const pathname = new URL(request.url).pathname
    if(!isLoggedIn) {
        throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
    }
    return null
}

export {requiredAuth}