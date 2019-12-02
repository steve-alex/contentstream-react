import React, { useState } from 'react'

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState(false)

    if (currentUser) {
        return (

        )
    } else {
       return (
        <LoginForm />
       )
    }
}