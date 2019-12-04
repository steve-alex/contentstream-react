import React, { useState } from 'react'
import API from '../adapters/API'
import { useHistory, Link } from 'react-router-dom'

const LoginPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const history = useHistory()

  const submitLogin = event => {
    event.preventDefault()
    API.login({ email, password })
      .then(user => {
        console.log(user)
        props.setUser(user.user)
        history.push('/home')
      })
      .catch(errors => {
        console.log(errors)
        setErrors(errors)
      })
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
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <Link to="/auth/signup">Create New Account</Link>
    </div>
  )
}

export default LoginPage
