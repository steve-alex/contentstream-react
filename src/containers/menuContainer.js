import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid } from 'semantic-ui-react'
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
      console.log(bucketName)
      return fetch("http://localhost:3001/buckets", {
        type: "POST",
        headers: {
          "Content-Type": "Application/json",
          "Accept": "Application/json",
          "authorisation": localStorage.token
        },
        body: {
          name: bucketName
        }
      })
      .then(jsonify)
      .then(console.log)
      // .then(newBucket => setBuckets([...buckets, newBucket]))
    }

    return (
      <>
        <Menu pointing vertical>
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
            active={props.selected ==="Feed Search"}
            onClick={(e) => props.setSelected("Feed Search")}
          />
          <Menu.Item
            name='Account'
            active={props.selected === "Account"}
            onClick={(e) => props.setSelected("Account")}
          />
          <Menu.Item
            name='Account'
            active={props.selected === "Create Bucket"}
            onClick={(e) => props.setSelected("Account")}
          />
          </Menu>

          <form onSubmit={createNewBucket}>
            <input
                type="text"
                name="name"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}/>
            <input type="submit" value="Submit" />
          </form>
      </>
    )

}

export default MenuContainer;