import { redirect } from "react-router-dom"

async function requiredAuth() {
    const isLoggedIn = false

    if(!isLoggedIn) {
        throw redirect('/login')
    }
    return null
}

export {requiredAuth}