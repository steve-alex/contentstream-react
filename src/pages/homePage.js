import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import MainContainer from '../containers/mainContainer.js'
import { Dropdown, Menu, Button, Grid } from 'semantic-ui-react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';


const HomePage = () => {
  const [selected, setSelected] = useState("Home")

  useEffect(() => {
    //Get the buckets for a specific user//
  }, [])

  return (
    <>
      <div>
        <div className="ui top banner test ad" data-text="Top Banner"></div>
      </div>
      <div className="main-container">
        <div className="home-container">
          <div className="menu-container">
            <MenuContainer
                selected={selected}
                setSelected={setSelected}
            />
          </div>
          <div className="content-container">
            <MainContainer
              selected={selected}
            />
          </div>
        </div>
      </div>
    </>
  )

}

export default HomePage;