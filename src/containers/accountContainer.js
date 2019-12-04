import React from 'react'
import { Button } from 'semantic-ui-react';
const BASE_URL = 'http://localhost:3000'


const AccountContainer = () => {

    const submitLogout = (e) => {
      e.preventDefault()
      localStorage.token = null
      window.location.replace(`${BASE_URL}/auth/login`)
    }

    return (
      <>
        <h1>Your account!</h1>
        <Button onClick={submitLogout}>Log out </Button>
      </>
    )
}

export default AccountContainer;