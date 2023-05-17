import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/auth/login");
    }
  });

  const handleLogOut = function () {
    localStorage.removeItem("anywhere-admin");
    setAdmin(null);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <nav className="relative px-8 py-4 flex justify-between items-center border-b border-gray-800">
        <Link
          to="/"
          className="text-lg font-bold leading-none flex items-center space-x-4"
        >
          <img
            src="https://media.discordapp.net/attachments/1070984839077036052/1070994572068524032/ALUT.png"
            width="45"
            height="27"
            alt="Anywhere logo"
          />
          <span className="text-white">Anywhere Admin Panel</span>
        </Link>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-400 p-3">
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
              className="text-white hover:text-gray-500 px-4 py-2"
              to="/users"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-500 px-4 py-2"
              to="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-500 px-4 py-2"
              to="/verificationRequests"
            >
              Verification requests
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-500 px-4 py-2"
              to="/verifiedRequests"
            >
              Verified requests
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-500 px-4 py-2"
              to="/feedbacks"
            >
              Feedbacks
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block">
          <span className="text-blue-400 mr-4 ">{admin?.username}</span>
          <button
            onClick={handleLogOut}
            className="px-3 py-0.5 border-red-600 border rounded-md hover:bg-red-100 text-red-600 hover:text-red-800"
          >
            Log out
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
