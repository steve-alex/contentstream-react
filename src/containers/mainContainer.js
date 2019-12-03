import React, { useState } from 'react'
import { Route } from "react-router-dom"
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Divider, Input } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import TwitterTimeline from '../components/twitterTimeline';


// import LoginPage from './loginPage.js'
// import signupPage from './signupPage.js'

const MainContainer = (props) => {
  const [,setState]=useState();
  const [tweets, setTweets] = useState(['1201641730350600192', '1200797921958076416', '1201833463428591618', '1201758018481917952'])
  const [searchTerm, setSearchTerm] = useState("")

  const searchForUser = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
    // e.target.forceUpdate();
  }

  if (props.selected === "Home") {
    return (
      <div className="embeddedTweetContainer">
        {tweets.map(tweet => {
          return <TwitterTweetEmbed
            className="embeddedTweet"
            tweetId={tweet}
            onClick={console.log} />
        })}
      </div>
    )
  } else if (props.selected === "Feed") {
    return (
        <div>
            <Input
                focus
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => searchForUser(e)}
            />
            <TwitterTimeline
                screenName={searchTerm}
            />
        </div>
    )
    } else {
        return (
            <h1>Hello</h1>
        )
    }
}
  //else if feed search then render the feed
 
export default MainContainer;