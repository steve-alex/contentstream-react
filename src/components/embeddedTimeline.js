import React, { useState } from 'react'
import { Route } from "react-router-dom"
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import { Divider, Input } from 'semantic-ui-react';

// import LoginPage from './loginPage.js'
// import signupPage from './signupPage.js'

const EmbeddedTimeline = (props) => {

    return (
        <div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName={props.search}
                options={{height: 400, width: 315}}  
            />
        </div>
    )
  }
 
export default EmbeddedTimeline;