import React, { useState } from 'react'
import API from '../adapters/API'
const BASE_URL = 'http://localhost:3001'

const LoginForm = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    const submitLogin = (event) => {
      API.login({ email, password })
        .then(console.log)
    }

  return (
    <div>
      <h1>Log In</h1>
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
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <input type="submit"/>
        </form>
    </div>
    )
}

export default LoginForm;
