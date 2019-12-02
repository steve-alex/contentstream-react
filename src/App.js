import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom"
import AuthPage from './pages/authPage.js'
import API from './adapters/API.js'
import paths from "./paths.js";
import './App.css';

const App = ({history}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
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