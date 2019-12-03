import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid, Sticky } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';
import jsonify from '../adapters/API.js'

const MenuContainer = (props) => {
    const [buckets, setBuckets] = useState("")
    const [bucketName, setBucketName] = useState("")
    // const [selected, setSelectied] = useState("")

    useEffect(() => {
      //Get the buckets for a specific user//
    }, [])

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
      .then(jsonify)
      .then(resp => console.log(resp.response))
      // .then(newBucket => setBuckets([...buckets, newBucket]))
    }

    return (
      <>
        <Menu pointing vertical >
          <Menu.Item>
            <Input className='icon' icon='filter' placeholder='Filter...' />
          </Menu.Item>

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
            name='Account'
            active={props.selected === "Account"}
            onClick={(e) => props.setSelected("Account")}
          />
          <Menu.Item
            name='Buckets'
          />
          <Menu.Menu>
            <Menu.Item
              name='Kanye'
              active={props.selected === "Kanye"}
              onClick={(e) => props.setSelected("Kanye")}
            />
          <Menu.Item
              name='Memes'
              active={props.selected === "Memes"}
              onClick={(e) => props.setSelected("Memes")}
            />
          <Menu.Item
              name='New Bucket'
              active={props.selected === "New"}
              onClick={(e) => props.setSelected("New")}
            />
          </Menu.Menu>
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
