import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/homePage.js'

const App = () => {
  const [currentUser, setCurrentUser] = useState(false)

  if (currentUser) {
    return (<HomePage />)
  } else {
     return (<LoginPage />)
  };
}

export default App;
