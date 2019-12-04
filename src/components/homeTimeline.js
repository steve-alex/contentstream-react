import React, { useState, useEffect } from 'react'
import { Input } from 'semantic-ui-react';
import Tweet from './tweet.js'

const HomeTimeline = (props) => {
  const [selectedTweet, setSelectedTweet] = useState("")
  const [filter, setFilter] = useState("")

  const filterTweet = () => {
    return props.timeline.filter(tweet => {
      if (tweet.text.includes(filter)) {
        return tweet
    }})
  }

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
          key={tweet.id}
        />
      })}
    </>
  )
}

export default HomeTimeline;