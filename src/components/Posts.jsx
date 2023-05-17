import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showReportedPosts, setShowReportedPosts] = useState(false);
  const [reportedPosts, setReportedPosts] = useState([]);
  const [selectedReportedPost, setSelectedReportedPost] = useState({});
  const [openModal, setOpenModal] = useState(false);
  async function getPosts() {
    const response = await axios.get("http://localhost:5000/post");
    response && setPosts(response.data);
  }

  async function getReportedPosts() {
    const response = await axios.get("http://localhost:5000/report/admin");
    response && setReportedPosts(response.data);
    console.log(response);
  }
  useEffect(() => {
    getPosts();
    getReportedPosts();
  }, []);

  function handleModalOpen(report) {
    setOpenModal(true);
    setSelectedReportedPost(report);
  }

  const deletePost = async function (id) {
    const response = await axios.delete(`http://localhost:5000/post/${id}`);
    response && getPosts;
    const reportResponse = await axios.delete(
      `http://localhost:5000/report/${id}`
    );
    if (reportResponse) {
      getReportedPosts;
      setOpenModal(false);
    }
  };
  return (
    <div className="py-5 h-screen">
      {showReportedPosts ? (
        <h5 className="ml-8 font-semibold text-2xl text-red-600">
          Reported Posts
        </h5>
      ) : (
        <h5 className="ml-8 font-semibold text-2xl text-white">All Posts</h5>
      )}

      <div className="flex justify-end px-20 relative">
        <h1
          className={`text-white border rounded-md px-2 py-1 cursor-pointer ${
            showReportedPosts && "bg-red-600"
          }`}
          onClick={() => setShowReportedPosts((p) => !p)}
        >
          Reported posts
        </h1>
      </div>
      {showReportedPosts ? (
        <div className="flex gap-2">
          {reportedPosts.map((report) => (
            <div
              className="max-w-xs w-full shadow-md p-3"
              onClick={() => handleModalOpen(report)}
            >
              <div className="relative h-40">
                <img
                  src={
                    report?.postId.imageUrl ||
                    "https://i.pinimg.com/originals/00/01/a0/0001a0314e96219e1e75fafcb245a4f8.gif"
                  }
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h1 className="text-blue-300 text-lg font-semibold">
                  {report?.postId?.title}
                </h1>
                <p className="mt-1 text-sm text-white">
                  {report?.postId?.description.substr(0, 40)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4 px-5 py-2">
            {posts.map((post) => (
              <Link to={`/postDetails/${post._id}`} key={post._id}>
                <div className="max-w-xs w-full shadow-md p-3">
                  <div className="relative h-40">
                    <img
                      src={
                        post.imageUrl ||
                        "https://i.pinimg.com/originals/00/01/a0/0001a0314e96219e1e75fafcb245a4f8.gif"
                      }
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-blue-300 text-lg font-semibold">
                      {post.title}
                    </h1>
                    <p className="mt-1 text-sm text-white">
                      {post.description.substr(0, 40)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      {openModal && (
        <div
          className={`absolute grid place-content-center bg-modalBackground h-screen top-0 w-full ${
            !openModal && "hidden"
          }`}
        >
          <div className="h-[500px] w-[600px] bg-white rounded-md py-5 px-5 overflow-y-scroll">
            <div className="flex justify-between items-center">
              <h1 className="text-red-600">Reported post</h1>
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div>
              <h2 className="font-bold text-2xl">
                {selectedReportedPost.postId.title}
              </h2>
              <img
                src={selectedReportedPost.postId.imageUrl}
                alt="No Image for this post"
              />
              <p>{selectedReportedPost.postId.description}</p>
            </div>
            <div className="mt-3 flex flex-col">
              <div>
                <h1 className="text-red-600">
                  Reported By : {selectedReportedPost?.userId?.username}
                </h1>
                <h1 className="text-red-600">Reason</h1>
                <p>{selectedReportedPost.reason}</p>
              </div>
              <button
                onClick={() => deletePost(selectedReportedPost.postId._id)}
                className="self-end text-red-600 border border-red-600 px-2 rounded-md hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
