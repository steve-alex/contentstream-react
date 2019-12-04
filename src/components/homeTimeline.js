import React, { useState } from 'react'
import { Input, Button } from 'semantic-ui-react';
import Tweet from './tweet.js'

const HomeTimeline = (props) => {
  const [selectedTweet, setSelectedTweet] = useState("")
  const [filter, setFilter] = useState("")

  const filterTweet = () => (
    props.timeline.filter(tweet => (
      tweet.text.includes(filter.toLowerCase())
    ))
  )

  const twitterLogin = () => {
    fetch('http://localhost:3001/twitter/login', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorisation": localStorage.token
      }
    }).then(res => res.json()).then(res => {
      if (typeof res === 'string' && res.startsWith('https://api.twitter.com/oauth/authorize?oauth_token=')) {
        window.location.href = res
      } else {
        console.log(res)
      }
    })
  }

  if (props.twitter) {
    return (
      <>
        <Input
          className='icon'
          icon='filter'
          placeholder='Filter..'
          value={filter}
          onChange={(e) => setFilter(e.target.value)} />
        {filterTweet().map(tweet => {
          return <Tweet
            setSelectedTweet={props.setSelectedTweet}
            tweetId={tweet.id}
            text={tweet.text}
            sourceCreatedAt={tweet.created_at}
            key={tweet.id}
          />
        })}
      </>
    )
  } else {
    return (
      <Button onClick={twitterLogin}>Log in With Twitter</Button>
    )
  }

}

export default HomeTimeline;
