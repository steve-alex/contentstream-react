import React from 'react'
import { Button } from 'semantic-ui-react';
const BASE_URL = 'http://localhost:3000'

const AccountContainer = ({ twitter, setTwitter }) => {
    const submitLogout = (e) => {
      // e.preventDefault()
      localStorage.token = null
      window.location.replace(`${BASE_URL}/auth/login`)
    }

  const deleteTwitter = () => {
    fetch('http://localhost:3001/accounts/' + twitter, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorisation": localStorage.token
      },
      method: "DELETE"
    }).then(res => {
      setTwitter(null)
    })
  }

    return (
      <>
        <h1>Your account!</h1>
        <Button onClick={submitLogout}>Log out </Button>
        {twitter && <Button onClick={deleteTwitter}>Log out of Twitter</Button>}
      </>
    )
}

export default AccountContainer;
