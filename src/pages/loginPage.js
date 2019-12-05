import React, { useState } from 'react'
import API from '../adapters/API'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

const LoginPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const history = useHistory()

  const submitLogin = event => {
    event.preventDefault()
    API.login({ email, password })
      .then(user => {
        if (Object.keys(user).includes('user')) {
          console.log('users', user)
          props.setUser(user.user)
          setErrors("")
          history.push('/home')
        } else {
          console.log(user.message)
          setErrors(user.message)
          history.push('/auth/login')
        }
    })
  }

  return (
    <div
      className="login-form-container">
      <h1>Log in</h1>
      <Form
        onSubmit={submitLogin}
        className="login-form">
        <Form.Field>
          <input
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

      <Link to="/auth/signup">Create New Account</Link>
      <div>
        {errors}
      </div>
    </div>
  )
}

export default LoginPage
