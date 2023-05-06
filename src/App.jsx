import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Posts from "./components/Posts"
import {SinglePostView} from "./components/SinglePostView"
import VerificationRequests from "./components/VerificationRequests"
import VerifiedRequests from "./components/VerifiedRequests"
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = "/auth/login" element={<Login />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/users" element={<Users />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/postDetails/:postId" element={<SinglePostView />}/>
            <Route path="/verificationRequests" element={<VerificationRequests />}/>
            <Route path="/verifiedRequests" element={<VerifiedRequests />}/>
          </Route>
        </Routes>
        </BrowserRouter>

        </div>
    </>
  )
}

export default App
