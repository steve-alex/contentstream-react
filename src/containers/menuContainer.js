import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';

const MenuContainer = (props) => {
    const [buckets, setBuckets] = useState("")
    // const [selected, setSelectied] = useState("")

    useEffect(() => {
      //Get the buckets for a specific user//
    }, [])

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
          </Menu>
      </>
    )

}

export default MenuContainer;