import React, { useState } from 'react'
import LoginPage from './LoginPage'

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState(false)

    return(
        <h1>Home page!</h1>
    )
}

export default HomePage;
