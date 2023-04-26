import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = "/auth/login" element={<Login />} />
        </Routes>
        </BrowserRouter>

        </div>
    </>
  )
}

export default App
