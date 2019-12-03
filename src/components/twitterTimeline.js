import React, { useState, useEffect } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeline = (props) => {
    const [showTimeline, setShowtimeline] = useState(true)

    useEffect(() => {
        setShowtimeline(false)
        setTimeout(() => setShowtimeline(true),500)
    }, [props.screenName])

    if (!showTimeline) return <></>

    return (
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName={props.screenName}
            options={{height: 1000, width: 800}}/>
    )
}

export default TwitterTimeline