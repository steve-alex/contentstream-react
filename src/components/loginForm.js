import React, { useState } from 'react'
const BASE_URL = 'http://localhost:3001'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (event) => {
        event.preventDefault()
        return fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
          body: JSON.stringify({
                email: email,
                password: password
            })
        })
    }

    return (
        <form onSubmit={submitLogin}>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <input type="submit"/>
        </form>
    )
}

export default LoginForm;
