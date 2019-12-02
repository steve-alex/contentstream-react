import React from 'react'
import { Route } from "react-router-dom"
import LoginPage from './loginPage.js'
import signupPage from './signupPage.js'

const AuthPage = () => {

  return (
    <>
      <Route path="/auth/login" component={LoginPage}>
        <LoginPage />
      </Route>
      <Route path="/auth/signup" component={signupPage}>
        <div>Signup</div>
      </Route>
    </>
  )

}
 
export default AuthPage;