import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';
const BASE_URL = "http://localhost:3001"

const PostsContainer = () => {
// x    const [selected, setSelectied] = useState("")

    useEffect(() => {
      //Get the buckets for a specific user//
    }, [])

    const getTweets = (e) => {
      e.preventDefault()
      return fetch(`${BASE_URL}/twitter/timeline`, {
        headers: {
          Authorisation: localStorage.getItem("token"),
        }
      })
        .then(resp => resp.json())
        .then(console.log)
    }

    return (
      <>
        <button onClick={getTweets}>Get tweets</button>
      </>
    )

}

export default PostsContainer;