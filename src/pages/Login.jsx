import { useState } from "react"

function Login() {
    const [loginFormData, setLoginFormatData] = useState({email: '', password:''})

    function handleSubmit() {
        e.preventDefault()
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormatData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login