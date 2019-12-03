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
  const [searchTerm, setSearchTerm] = useState("kanyewest")

  const searchForUser = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
    // e.target.forceUpdate();
  }


  if (props.selected === "Home") {
    return (
        <div>
          {tweets.map(tweet => {
              return <TwitterTweetEmbed
                tweetId={tweet}
                onClick={console.log} />
          })}
        </div>
    )
  } else {
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
  }

}
 
export default MainContainer;