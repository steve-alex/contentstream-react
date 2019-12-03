import React, { useState, useEffect } from 'react'
import MenuContainer from '../containers/menuContainer.js'
import MainContainer from '../containers/mainContainer.js'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';


const HomePage = () => {
  const [selected, setSelected] = useState("Home")

  useEffect(() => {
    //Get the buckets for a specific user//
  }, [])

  return (
    <>
      <div className="ui grid">
        <div className="ui top banner test ad" data-text="Top Banner"></div>
      </div>

        <div className="ui grid">
          <div>
            <MenuContainer
              selected={selected}
              setSelected={setSelected}
              className={"column"}/>
          </div>
          <div>
            <MainContainer
              selected={selected}
              className={"column"}/>
          </div>
        </div>
    </>
  )

}

export default HomePage;