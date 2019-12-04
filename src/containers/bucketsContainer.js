import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input, Grid, Sticky, Item} from 'semantic-ui-react'
import Tweet from '../components/tweet.js'

const BucketsContainer = (props) => {
  const [tweetIds, setTweetsIds] = useState([])
  
  useEffect(() => {
    getBucketTweets()
  }, [])

  const getBucketTweets = () => {
    
  }

  return (
    <>
      {
        tweetIds.map(tweetId => {
          return <Tweet
            tweetId={tweetId}
            key={tweet.id}
          />
        })
      }
    </>
  )
}

export default BucketsContainer;