import React, { useEffect, useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';


const Tweet = (props) => {
    const [content, setContent] = useState("")
    const [text, setText] = useState()

    useEffect(() => {
      setText(props.text)
    }, [])

    const onDrag = (e, tweet) => {
      console.log(tweet.id)
      e.preventDefault()
      props.setSelectedTweet({
        tweetId: tweet.tweetId,
        text: tweet.text,
        sourceCreatedAt: tweet.sourceCreatedAt
      })
    }

    return (
      <div
        draggable
        onDrag={(e) => onDrag(e, props)}
        >
        <TwitterTweetEmbed
          className="embeddedTweet"
          tweetId={props.tweetId}
          onClick={console.log} />
      </div>
    )

}

export default Tweet;
