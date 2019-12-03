import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';

const MenuContainer = () => {
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
            active={false}
            onClick={console.log}
          />
          <Menu.Item
            name='messages'
            active={true}
            onClick={console.log}
          />
          <Menu.Item
            name='friends'
            active={false}
            onClick={console.log}
          />
        </Menu>
      </>
    )

}

export default MenuContainer;