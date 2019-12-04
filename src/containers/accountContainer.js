import React from 'react'
import { Button, List }from 'semantic-ui-react'
const BASE_URL = 'http://localhost:3000'

const AccountContainer = ({ twitter, setTwitter, buckets}) => {
  const submitLogout = e => {
    // e.preventDefault()
    localStorage.token = null
    window.location.replace(`${BASE_URL}/auth/login`)
  }

  const deleteTwitter = () => {
    fetch('http://localhost:3001/accounts/' + twitter, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorisation: localStorage.token
      },
      method: 'DELETE'
    }).then(res => {
      setTwitter(null)
    })
  }

  const deleteBucket = (e, bucket) => {
    e.preventDefault()
    console.log(bucket)
    fetch(`http://localhost:3001/buckets/${bucket.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorisation: localStorage.token
      },
      method: 'DELETE'
    })
    .then(console.log)
  }

  return (
    <>
      <h1>Your account!</h1>

      <List link>
        {buckets.map(bucket => {
          return (
            <List.Item as="a">
              {bucket.name}
              <Button
                onClick={(e) => deleteBucket(e, bucket)}
                negative>Delete</Button>
            </List.Item>
          )
        })}
      </List>

      <br></br>

      <Button onClick={submitLogout}>Log out </Button>
      {twitter && <Button onClick={deleteTwitter}>Log out of Twitter</Button>}
    </>
  )
}

export default AccountContainer
