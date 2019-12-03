import React, { useState, useEffect } from 'react'
import { Dropdown, Menu, Button, Input } from 'semantic-ui-react'
import { isUpdateExpression } from '@babel/types';

const PostsContainer = () => {
    const [buckets, setBuckets] = useState("")
    const [selected, setSelectied] = useState("")

    useEffect(() => {
      //Get the buckets for a specific user//
    }, [])

    return (
      <>
      </>
    )

}

export default PostsContainer;