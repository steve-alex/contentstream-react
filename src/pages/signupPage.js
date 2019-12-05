import React, { useState } from 'react'
import API from '../adapters/API'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

const SignupPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState('')
  const history = useHistory()

  const createUser = event => {
    event.preventDefault()

    API.createUser({ email, password })
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
    <div className="signup-form-container">
      <h1>Sign up</h1>
      <Form
        onSubmit={createUser}
        className="signup-form">
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
        <Form.Field>
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
  
    <Link to="/auth/Login">Log in with existing account</Link>
   </div>
  )
}

export default SignupPage
