import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import { Dropdown, Menu, Button } from 'semantic-ui-react'

const HomePage = () => {

    useEffect(() => {
      //Get the buckets for a specific user//
    }, [])

    return (
      <>
        <div class="ui top banner test ad" data-text="Top Banner"></div>
        <MenuContainer />
      </>
    )

}

export default HomePage;
