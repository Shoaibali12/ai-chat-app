import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close Icons
import { useState } from "react";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition duration-300"
        >
          AI Chat
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4 relative">
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-3xl text-blue-400" />
                <span className="text-lg font-medium">
                  {user.name || "Guest"}
                </span>
              </div>

              {/* 3-dot dropdown menu */}
              <div className="relative">
                <BsThreeDotsVertical
                  className="text-2xl cursor-pointer hover:text-gray-400 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        alert("Update Profile clicked!");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition"
                    >
                      Update Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/signin"
                className="px-5 py-2 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown (Right-Aligned) */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
                <FaUserCircle className="text-2xl text-blue-400" />
                <span className="text-md font-medium">
                  {user.name || "Guest"}
                </span>
              </div>
              <button
                onClick={() => {
                  alert("Update Profile clicked!");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition"
              >
                Update Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="block text-center py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block text-center py-3 bg-green-500 rounded-lg hover:bg-green-600 transition mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
