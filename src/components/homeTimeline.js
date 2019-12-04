import React, { useState } from 'react'
import { Input } from 'semantic-ui-react';
import Tweet from './tweet.js'

const HomeTimeline = (props) => {
  const [selectedTweet, setSelectedTweet] = useState("")
  const [filter, setFilter] = useState("")

  const onDrag = (e, tweet) => {
    e.preventDefault()
    setSelectedTweet(tweet)
  }

  const filterTweet = () => (
    props.timeline.filter(tweet => (
      tweet.text.includes(filter)
    ))
  )

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
          draggable
          onDrag={(e) => onDrag(e, tweet)}
          tweetId={tweet.id}
          text={tweet.text}
          key={tweet.id}
        />
      })}
    </>
  )
}

export default HomeTimeline;
