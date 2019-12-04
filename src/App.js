import React, { useState, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom"
import AuthPage from './pages/authPage.js'
import HomePage from './pages/homePage.js'
import API from './adapters/API.js'
import paths from "./paths.js";
import './App.css';

const App = ({history}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const twitterString = window.location.search.split('?')[1]
    if (twitterString) {
      const twitterParams = twitterString.split('&').reduce((memo, param) => {
        const split = param.split('=')
        memo[split[0]] = split[1]
        return memo
      }, {})
      console.log(twitterParams)
      fetch('http://localhost:3001/twitter/success', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorisation': localStorage.token
        },
        body: JSON.stringify(twitterParams)
      }).then(res => res.json()).then(console.log)
    }

    API.validate(user)
      .then(user => {
        setUser(user)
        history.push(paths.HOME)
      })
      .catch(() => {
        history.push(paths.LOGIN)
        console.log()
      })
  }, []);

  if (user) {
    return (
      <div className="App">
        <Route path="/home" component={HomePage}/>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Route path="/auth"
              component={
                routerProps => <AuthPage {...routerProps} setUser={setUser}/>
              }
        />
      </div>
    )
  }

}

export default App;
