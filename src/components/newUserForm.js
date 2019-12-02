import React, { useState } from 'react'
const BASE_URL = 'http://localhost:3001'

const NewUserForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitNewUser = (event) => {
      event.preventDefault()
      return fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Accept": "Application/json",
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(console.log)
    }

    return (
        <div>
        <h1> Create User </h1>
        <form onSubmit={submitNewUser}>
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
      </div>
    )
}

export default NewUserForm;
