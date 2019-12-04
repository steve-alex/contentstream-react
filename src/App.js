import React, { useState, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom"
import AuthPage from './pages/authPage.js'
import HomePage from './pages/homePage.js'
import API from './adapters/API.js'
import paths from "./paths.js";
import './App.css';

const App = ({history}) => {
  const [user, setUser] = useState(null)
  const [buckets, setBuckets] = useState([])
  const [timeline, setTimeline] = useState([])

  useEffect( async () => {
    const twitterString = window.location.search.split('?')[1]
    twitterString && await authoriseTwitter(twitterString)
    API.validate(user)
      .then(resp => {
        setUser(resp.user)
        setBuckets(resp.buckets)
        setTimeline(resp.timeline ? resp.timeline : [])
        history.push(paths.HOME)
      })
      .catch(() => {
        history.push(paths.LOGIN)
        console.log()
      })
  }, []);

  const authoriseTwitter = (twitterString) => {
    const twitterParams = twitterString.split('&').reduce((memo, param) => {
      const split = param.split('=')
      memo[split[0]] = split[1]
      return memo
    }, {})
    console.log(twitterParams)
    return fetch('http://localhost:3001/twitter/success', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorisation': localStorage.token
      },
      body: JSON.stringify(twitterParams)
    }).then(res => res.json()).then(console.log)
  }
  

  if (user) {
    return (
      <div className="App">
        <Route path="/home">
          <HomePage
            buckets={buckets}
            timeline={timeline}/>
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
