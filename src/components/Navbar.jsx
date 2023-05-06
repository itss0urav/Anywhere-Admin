import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {

  const {admin, setAdmin} = useContext(AdminContext)
  const navigate = useNavigate()
  useEffect(() => {
    if(!admin){
navigate("/auth/login")
    }
  })
  console.log(admin)

  const handleLogOut = function(){

    localStorage.removeItem("anywhere-admin")
    setAdmin(null)
  }
  return (
    <div className="bg-gray-300">
      <nav className="relative px-8 py-4 flex justify-between items-center border-y ">
        <a
          className="text-3xl font-bold leading-none flex items-center space-x-4"
          href="#"
        >
          <span>
            <Link to="/">
              <img
                src="https://media.discordapp.net/attachments/1070984839077036052/1070994572068524032/ALUT.png"
                width="45"
                height="27"
              ></img>
            </Link>
          </span>
          <Link to="http://127.0.0.1:5173/">
          <span className="text-gray-600 dark:text-gray-300 text-xl">
            Anywhere
          </span>
          </Link>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
          <li>
            <Link
<<<<<<< HEAD
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white dark:hover:text-gray-100 px-4 py-2"
              to="/users">
=======
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
              to="/users"
            >
>>>>>>> 1f254decdf2fd236e47c5abb966635b3b3d10bc2
              Users
            </Link>
          </li>
          <li>
            <Link
<<<<<<< HEAD
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white  dark:hover:text-gray-100 px-4 py-2"
             to="/posts">
=======
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
              to="/posts"
            >
>>>>>>> 1f254decdf2fd236e47c5abb966635b3b3d10bc2
              Posts
            </Link>
          </li>
          <li>
<<<<<<< HEAD
          <Link
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white dark:hover:text-gray-100 px-4 py-2"
             to="/verificationRequests">
              Verification requests
            </Link>
          </li>
          <li>
          <Link
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white dark:hover:text-gray-100 px-4 py-2"
             to="/verifiedRequests">
              Verified requests
            </Link>
          </li>
        </ul>
        <div className="hidden lg:block">
          {admin?.username}
        </div>
        <div className="hidden lg:block ml-2">
         <button 
         onClick={handleLogOut}
         className="px-3 py-0.5 border-red-600 border rounded-md hover:bg-red-100 text-red-600">Log out</button>
=======
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search"
              />
            </div>
          </li>
        </ul>
        <div className="hidden lg:block">
          <Link to="https://github.com/itss0urav">
            <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
              <title>GitHub</title>
              <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
            </svg>
          </Link>
>>>>>>> 1f254decdf2fd236e47c5abb966635b3b3d10bc2
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
