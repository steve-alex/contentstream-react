import React, { useState } from 'react'
import { Input, Button, Form} from 'semantic-ui-react';
import Tweet from './tweet.js'

const fetchTweets = (setTimeline) => {
  fetch('http://localhost:3001/twitter/timeline', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorisation: localStorage.token
    }
  }).then(res => res.json()).then(timeline => setTimeline(timeline))
}

const HomeTimeline = (props) => {
  const [selectedTweet, setSelectedTweet] = useState("")
  const [filter, setFilter] = useState("")
  const [newTweet, setNewTweet] = useState("")

  const filterTweet = () => (
    props.timeline.filter(tweet => (
      tweet.text.toLowerCase().includes(filter.toLowerCase())
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

  const postNewTweet = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/twitter/tweet', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorisation": localStorage.token
      },
      body: JSON.stringify({
        status: newTweet
      })
    })
      .then(() => {
        fetchTweets(props.setTimeline)
        setNewTweet('')
      })
  }

  if (props.twitter) {
    return (
      <>
        <div class="home-form">
          <div class="new-tweet">
            <Form
              className="new-tweet-form"
              onSubmit={(e) => postNewTweet(e)}>
              <Form.Field>
                <input
                  type="text"
                  placeholder="Post a tweet...Click enter to make it real"
                  value={newTweet}
                  onChange={(e) => setNewTweet(e.target.value)}/>
              </Form.Field>
            </Form>
          </div>
          <div class="filter-tweet">
            <Input
              className='icon-filter'
              icon='filter'
              placeholder='Filter..'
              value={filter}
              onChange={(e) => setFilter(e.target.value)} />
          </div>
        </div>
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
  } else {
    return (
      <Button onClick={twitterLogin}>Log in With Twitter</Button>
    )
  }

}

export default HomeTimeline;
