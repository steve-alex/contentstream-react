import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid, Sticky, Form } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';
import jsonify from '../adapters/API.js'
import BucketsContainer from './bucketsContainer.js'
import API from '../adapters/API.js'

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
                      active={props.selected === bucket.id}
                      onClick={(e) => props.setSelected(bucket.id)}
                    />})
          }
          </Menu.Menu>
          <Menu.Item>
            <Form onSubmit={createNewBucket}>
              <Form.Field>
                <label paddding="1px">Create New Bucket</label>
                <input placeholder='Bucket name...' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Menu.Item>
        </Menu>

          {/* <form onSubmit={createNewBucket}>
            <input
                type="text"
                name="name"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}/>
            <input type="submit" value="Submit" />

          </form> */}
      </>
    )
}

export default MenuContainer;
