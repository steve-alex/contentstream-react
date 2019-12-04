import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import MainContainer from '../containers/mainContainer.js'
import { Dropdown, Menu, Button, Grid } from 'semantic-ui-react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const HomePage = (props) => {
  const [selected, setSelected] = useState("Home")
  const [selectedTweet, setSelectedTweet] = useState(undefined)

  useEffect(() => {
    //Get the buckets for a specific user//
  }, [])

  return (
    <>
      <div className="main-container">
        <div className="home-container">
          <div className="menu-container">
            <MenuContainer
              buckets={props.buckets}
              selected={selected}
              setSelected={setSelected}
              selectedTweet={selectedTweet}
            />
          </div>
          <div className="content-container">
            <MainContainer
              setSelectedTweet={setSelectedTweet}
              timeline={props.timeline}
              selected={selected}
            />
          </div>
        </div>
      </div>
    </>
  )

}

export default HomePage;
