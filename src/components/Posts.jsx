import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get("http://localhost:5000/post");
      response && setPosts(response.data);
    }
    getPosts();
  }, []);

  return (
    <div className="py-5">
      <h5 className="ml-8 font-semibold text-2xl text-white">All posts</h5>
      <div className="grid grid-cols-4 gap-4 px-5 py-2">
        {posts.map((post) => (
          <Link to={`/postDetails/${post._id}`} key={post._id}>
            <div className="max-w-xs w-full shadow-md p-3">
              <div className="relative h-40">
                <img 
                  src={post.imageUrl || "https://i.pinimg.com/originals/00/01/a0/0001a0314e96219e1e75fafcb245a4f8.gif"}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h1 className="text-blue-300 text-lg font-semibold">{post.title}</h1>
                <p className="mt-1 text-sm text-white">{post.description.substr(0, 40)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
