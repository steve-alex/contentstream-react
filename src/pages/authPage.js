import React from 'react'
import { Route, Switch } from "react-router-dom"
import LoginPage from './loginPage.js'
import SignupPage from './signupPage.js'

const AuthPage = (props) => {

  return (
    <>
      <Switch>
        <Route exact path="/auth/signup" >
          <SignupPage setUser={props.setUser}/>
        </Route>
        <Route exact path="/auth/login" component={LoginPage}>
          <LoginPage setUser={props.setUser}/>
        </Route>
      </Switch>
    </>
  )

}
 
export default AuthPage;