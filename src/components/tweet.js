import React, { useEffect, useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';


const Tweet = (props) => {
    const [content, setContent] = useState("")
    const [text, setText] = useState()

    useEffect(() => {
      setText(props.text)
    }, [])

    return (
      <div>
        <TwitterTweetEmbed
          className="embeddedTweet"
          tweetId={props.tweetId}
          onClick={console.log} />
      </div>
    )

}

export default Tweet;