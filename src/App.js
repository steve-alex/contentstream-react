import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/homePage'
import LoginPage from './containers/LoginPage'

const App = () => {
  const [currentUser, setCurrentUser] = useState(false)

  if (currentUser) {
    return (<HomePage />)
  } else {
     return (<LoginPage />)
  };
}

export default App;
