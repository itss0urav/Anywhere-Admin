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
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white dark:hover:text-gray-100 px-4 py-2"
              to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:bg-indigo-600 rounded-full hover:text-white  dark:hover:text-gray-100 px-4 py-2"
             to="/posts">
              Posts
            </Link>
          </li>
          <li>
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
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
