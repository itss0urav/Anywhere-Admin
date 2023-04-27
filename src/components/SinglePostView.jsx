import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePostView = () => {
    const {postId} = useParams()
const [postDetails, setPostDetails] = useState({})

    useEffect(() => {
        async function getFullPostsDetails(){
            const response = await axios.get(`http://localhost:5000/post?_id=${postId}`)
            response && setPostDetails(response.data)
        }

        getFullPostsDetails()
}, [])
  return (
    <div>
        
    </div>
  )
}

export  {SinglePostView}