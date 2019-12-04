import React, { useState, useEffect } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const HomeTimeline = (props) => {
    const [tweets, setTweets] = useState(['1201641730350600192', '1200797921958076416', '1201833463428591618', '1201758018481917952'])
    const [selectedTweet, setSelectedTweet] = useState("")

    

    const onDrag = (e, tweet) => {
        e.preventDefault()
        setSelectedTweet(tweet)
    }

    return (
      <div className="embeddedTweetContainer">
        {tweets.map(tweet => {
          return (
            <div
              draggable
              onDrag={(e) => onDrag(e, tweet)}>
              <TwitterTweetEmbed
                className="embeddedTweet"
                tweetId={tweet}
                onClick={console.log} />
            </div>
          )
        })}
      </div>
    )
}

export default HomeTimeline;