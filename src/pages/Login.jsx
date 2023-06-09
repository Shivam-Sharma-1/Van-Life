import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"
import { useState } from "react"

function loader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const pathname = new URL(request.url).searchParams.get('redirectTo') || '/host'

    try {
        await loginUser({ email, password })
        localStorage.setItem('loggedIn', true)
        return redirect(pathname)
    }
    catch(err) {
        return err.message
    }
}

function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn'))

    function logOut() {
        localStorage.removeItem('loggedIn')
        setIsLoggedIn(false)
    }

    return (
        <div className="login-container">
            { isLoggedIn ? 
                <button className="btn-logout" onClick={logOut}>Log Out</button>
                :
            (<>
                <h1>Sign in to your account</h1> 
                {message && <h3 className="red">{message}</h3>}
                {errorMessage && <h3 className="red">{errorMessage}</h3>}

                <Form 
                    method='post' 
                    className="login-form"
                    replace
                >
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button 
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting' ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                </>)}
        </div>
    )
}

export default Login
export {loader, action}