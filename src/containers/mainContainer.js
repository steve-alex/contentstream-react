import React, { useState } from 'react'
import { Route } from "react-router-dom"
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Divider, Input } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import AccountContainer from './accountContainer.js'
import TwitterTimeline from '../components/twitterTimeline';
import HomeTimeline from '../components/homeTimeline.js'
import BucketsContainer from './bucketsContainer.js';


// import LoginPage from './loginPage.js'
// import signupPage from './signupPage.js'

const MainContainer = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  if (props.selected === "Home") {
    return (
      <HomeTimeline
        timeline={props.timeline}
        setSelectedTweet={props.setSelectedTweet}
       />
    )
  } else if (props.selected === "Feed") {
    return (
      <>
      <Input
        focus
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TwitterTimeline
        screenName={searchTerm}
      />
      </>
    )
    } else if (props.selected === "Account") {
      return (
        <AccountContainer twitter={props.twitter} setTwitter={props.setTwitter} />
      )
    } else {
      return (
        <BucketsContainer
          selected={props.selected}/>
      )
    }
}
  //else if feed search then render the feed

export default MainContainer;
