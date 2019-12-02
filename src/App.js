import React, { useState } from 'react';
import './App.css';
import authPage from './pages/authPage.js'
import { Route } from "react-router-dom"

const App = () => {

  return (
    <div className="App">
      <Route path="/auth" component={authPage}/>
    </div>
  )

}

export default App;