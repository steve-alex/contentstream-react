import React from 'react'
import { Route } from "react-router-dom"
import LoginPage from './Auth/loginPage.js'
import signupPage from './signupPage.js'

const AuthPage = (props) => {

  return (
    <>
      <Route path="/auth/login" component={LoginPage}>
        <LoginPage setUser={props.setUser}/>
      </Route>
      <Route path="/auth/signup">
        <div>Signup</div> 
      </Route>
    </>
  )

}
 
export default AuthPage;