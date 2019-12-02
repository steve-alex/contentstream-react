import React, { useState } from 'react'
import loginPage from '../loginPage.js'
import signupPage from '../signupPage.js'
import { Route } from "react-router-dom"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Route path="/auth/login" component={loginPage}>
        <div>Login</div>
      </Route>/>
      <Route path="/auth/signup" component={signupPage}>
        <div>Signup</div>
      </Route>/>
    </>
  ) 

}

export default Login;