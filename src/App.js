import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage.js'
import LoginPage from './pages/loginPage.js'
import { Route } from "react-router-dom"

const App = () => {
  const [currentUser, setCurrentUser] = useState(false)

  if (currentUser) {
    return (
      <Route path='/home' component={HomePage}/>
    )
  } else {
    return (
      <Route path='/' component={LoginPage}/>
    )
  };

}

export default App;