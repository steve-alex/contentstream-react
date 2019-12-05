import React, { useState } from 'react'
import API from '../adapters/API'
import { useHistory, Link } from 'react-router-dom'

const SignupPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState('')
  const history = useHistory()

  const createUser = event => {
    event.preventDefault()
    API.createUser({ email, password, passwordConfirmation: confirmPassword })
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
      <h1>Sign up</h1>
      <form onSubmit={createUser}>
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
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <Link to="/auth/login">Log in with existing account</Link>
    </div>
  )
}

export default SignupPage
