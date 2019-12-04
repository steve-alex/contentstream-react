import React, { useState, useEffect } from 'react'
import {
  Dropdown,
  Menu,
  Button,
  Input,
  Grid,
  Sticky,
  Item
} from 'semantic-ui-react'
import Tweet from '../components/tweet.js'

const getBucketTweets = (bucketId, setTweetIds) => {
  fetch('http://localhost:3001/buckets/' + bucketId, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorisation: localStorage.token
    }
  })
    .then(res => res.json())
    .then(bucket => {
      setTweetIds(bucket.posts.map(post => post.sourceId))
    })
}

const BucketsContainer = props => {
  const [tweetIds, setTweetIds] = useState([])

  useEffect(
    () => {
      getBucketTweets(props.selected, setTweetIds)
    },
    [props.selected]
  )

  return (
    <>
      {tweetIds.map(tweetId => {
        return <Tweet tweetId={tweetId} key={tweetId} />
      })}
    </>
  )
}

export default BucketsContainer
