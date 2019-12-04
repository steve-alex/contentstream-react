import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom"
import AuthPage from './pages/authPage.js'
import HomePage from './pages/homePage.js'
import API from './adapters/API.js'
import paths from "./paths.js";
import './App.css';

const App = ({history}) => {
  const [user, setUser] = useState(null)
  const [buckets, setBuckets] = useState([])
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    API.validate(user)
      .then(resp => {
        setUser(resp.user)
        setBuckets(resp.buckets)
        setTimeline(resp.timeline)
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
        <Route path="/home">
          <HomePage />
        </Route>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Route path="/auth">
          <AuthPage setUser={setUser} />
        </Route>
      </div>
    )
  }

}

export default App;