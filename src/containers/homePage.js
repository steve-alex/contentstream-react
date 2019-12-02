import React, { useState } from 'react'
import LoginPage from './LoginPage'

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState(false)

    if (currentUser) {
        return (
          <p>hi</p>
        )
    } else {
       return (
        <LoginPage />
       )
    }
}

export default HomePage
