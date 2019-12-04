import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid, Sticky } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';
import jsonify from '../adapters/API.js'
import BucketsContainer from './bucketsContainer.js'
import API from '../adapters/API.js'

const twitterLogin = () => {
  fetch('http://localhost:3001/twitter/login', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorisation": localStorage.token
    }
  }).then(res => res.json()).then(res => {
    if (typeof res === 'string' && res.startsWith('https://api.twitter.com/oauth/authorize?oauth_token=')) {
      window.location.href = res
    } else {
      console.log(res)
    }
  })
}

const MenuContainer = (props) => {
    const [buckets, setBuckets] = useState("")
    const [bucketName, setBucketName] = useState("")

    const createNewBucket = (e) => {
      e.preventDefault()
      return fetch("http://localhost:3001/buckets", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "Accept": "Application/json",
          "authorisation": localStorage.token
        },
        body: JSON.stringify({
          name: bucketName
        })
      })
      .then(resp => API.jsonify(resp))
      .then(console.log)
      // .then(newBucket => setBuckets([...buckets, newBucket]))
    }

    const onDragOver = (e) => {
      e.preventDefault()
      e.target.style.color = "red"
    }

    const onDragLeave = (e) => {
      e.preventDefault()
      e.target.style.color = 'grey'
    }

    const onDrop = (e, bucketId) => {
      e.preventDefault()
      e.target.style.color = 'grey'
      console.log(bucketId)
      console.log(props.selectedTweet)
      return fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "Accept": "Application/json",
          "authorisation": localStorage.token
        },
        body: JSON.stringify({
          bucketId: bucketId,
          sourceId: props.selectedTweet,
          domain: "twitter.com"
        })
      })
      .then(API.jsonify)
      .then(console.log)
    }

    return (
      <>
        <Menu pointing vertical >
          <Menu.Item
            name='Home'
            active={props.selected === "Home"}
            onClick={(e) => props.setSelected("Home")}
          />
          <Menu.Item
            name='Feed Search'
            active={props.selected ==="Feed"}
            onClick={(e) => props.setSelected("Feed")}
          />
          <Menu.Item
            draggable
            name='Account'
            active={props.selected === "Account"}
            onClick={(e) => props.setSelected("Account")}
          />
          <Menu.Item
            name='Buckets'
          />
          <Menu.Menu>
          {/* <BucketsContainer
            selected={props.selected}
            setSelected={props.selected}/> */}
          {props.buckets.map(bucket => {
            return <Menu.Item
                      onDrop={(e) => onDrop(e, bucket.id)}
                      onDragOver={(e) => onDragOver(e)}
                      onDragLeave={(e) => onDragLeave(e)}
                      name={bucket.name}
                      active={props.selected === bucket.name}
                      onClick={(e) => props.setSelected(bucket.name)}
                    />})
          }
          </Menu.Menu>
        </Menu>
          <form onSubmit={createNewBucket}>
            <input
                type="text"
                name="name"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}/>
            <input type="submit" value="Submit" />

          </form>

        <button onClick={twitterLogin}>log in to twitter</button>
      </>
    )
}

export default MenuContainer;
