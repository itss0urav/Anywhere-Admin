import axios from "axios";
import { useEffect, useState } from "react";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  async function getFeedBacks() {
    const response = await axios.get("http://localhost:5000/feedback");
    response && setFeedbacks(response.data);
  }

  async function deleteFeedback(id) {
    const response = await axios.delete(`http://localhost:5000/feedback/${id}`);
    response && getFeedBacks();
  }
  useEffect(() => {
    getFeedBacks();
  }, []);
  return (
    <div className="text-white h-screen px-20 mt-5">
      <h1 className="text-2xl">Feedbacks from users</h1>
      <div className="h-1 w-full bg-gray-600 rounded-full mt-3"></div>
      <div className="mt-5">
        {feedbacks.map((feedback) => (
          <div className="border border-gray-700 px-4 py-3 rounded-md">
            <h1>Name : {feedback?.username}</h1>
            <h1>Email : {feedback?.email}</h1>
            <p>Message : {feedback?.description}</p>
            <p>Rating : {feedback?.rating}</p>
            <button
              onClick={() => deleteFeedback(feedback._id)}
              className="text-white bg-red-600 rounded px-3 py-1 hover:bg-red-800 "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
