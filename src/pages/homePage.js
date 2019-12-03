import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import PostsContainer from '../containers/postsContainer.js'
import { Dropdown, Menu, Button } from 'semantic-ui-react'

const HomePage = () => {
  const [selected, setSelected] = useState("")

  useEffect(() => {
    //Get the buckets for a specific user//
  }, [])

  return (
    <>
      <div className="ui top banner test ad" data-text="Top Banner"></div>
      <MenuContainer />
      <PostsContainer />
    </>
  )

}

export default HomePage;
