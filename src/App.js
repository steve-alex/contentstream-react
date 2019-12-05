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
  const [twitter, setTwitter] = useState(null)

  useEffect(() => {
    // apparently useEffect callbacks should be synchronous, but can call async funcs
    (async () => {
      const twitterString = window.location.search.split('?')[1]
      twitterString && await authoriseTwitter(twitterString)
      API.validate(user)
        .then(resp => {
          setTwitter(resp.accountId)
          setUser(resp.user)
          setBuckets(resp.buckets)
          setTimeline(resp.timeline ? resp.timeline : [])
          history.push(paths.HOME)
        })
        .catch(() => {
          history.push(paths.LOGIN)
          console.log()
        })
    })()
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


    return (
      <div className="App">
        <div>
          <div className="ui top banner test ad" data-text="contentStream" id="banner"></div>
        </div>
        {user
          ? <><Redirect from='/' to="/home" />
        <Route path="/home">
          <HomePage
            twitter={twitter}
            setTwitter={setTwitter}
            buckets={buckets}
            setBuckets={setBuckets}
            setTimeline={setTimeline}
            timeline={timeline}/>
         </Route></>
          : <Route path="/auth">
              <AuthPage setUser={setUser} />
            </Route>
        }
      </div>
    )
}

export default App;
