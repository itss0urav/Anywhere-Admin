import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Posts = () => {
const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts(){
            const response = await axios.get("http://localhost:5000/post")
            response && setPosts(response.data)
        }
        getPosts()
    }, [])
  return (
    <div className="py-5">
<h5 className="ml-8 font-semibold text-2xl">All posts</h5>
        <div className="grid grid-cols-4 px-5 py-2">{
            posts.map((post) => (
                <Link to={`/postDetails/${post._id}`}>
                <div className="w-72 shadow-md py-3 px-3 h-80">
                    <h1>{post.title}</h1>
                    <img src={post.imageUrl} alt="" className="w-full h-full"/>
                    <p className="mt-2">{post.description.substr(0, 40)}</p>
                </div>
                </Link>
            ))
            }</div>
    </div>
  )
}

export default Posts