import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import MainContainer from '../containers/mainContainer.js'
import { Dropdown, Menu, Button, Grid } from 'semantic-ui-react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const HomePage = (props) => {
  const [selected, setSelected] = useState("Home")
  const [selectedTweet, setSelectedTweet] = useState(undefined)
  const [newBucket, setNewBucket] = useState(false)

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
              setBuckets={props.setBuckets}
              selected={selected}
              setSelected={setSelected}
              selectedTweet={selectedTweet}
              setNewBucket={setNewBucket}
              newBucket={newBucket}
            />
          </div>
          <div className="content-container">
            <MainContainer
              setSelectedTweet={setSelectedTweet}
              twitter={props.twitter}
              buckets={props.buckets}
              setTwitter={props.setTwitter}
              timeline={props.timeline}
              setTimeline={props.setTimeline}
              selected={selected}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;
