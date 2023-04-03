import { redirect } from "react-router-dom"

async function requiredAuth() {
    const isLoggedIn = localStorage.getItem('loggedIn')

    if(!isLoggedIn) {
        throw redirect('/login?message=You must log in first.')
    }
    return null
}

export {requiredAuth}