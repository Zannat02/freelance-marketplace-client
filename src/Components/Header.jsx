import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.jpg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => navigate("/login"));
  };





  const navClass = ({ isActive }) =>
    `
      px-3 py-2 cursor-pointer

          /* md & small screen */
          hover:bg-[#3B4953] hover:text-white hover:rounded-md

           /* desktop only */ 
          lg:text-black
          ${isActive ? "lg:border-b-2 lg:border-black " : ""}
`;



  const links = (
    <>
      <NavLink to="/" className={navClass}>Home</NavLink>
      <NavLink to="/addTask" className={navClass}>AddTask</NavLink>
      <NavLink to="/browseTask" className={navClass}>BrowseTask</NavLink>
      <NavLink to="/myTasks" className={navClass}>MyTasks</NavLink>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost px-2">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <img className="w-7 h-7" src={logo} alt="logo" />

        {/* Desktop text only */}
        <p className="text-xl ml-2 hidden lg:block font-semibold">
          FreeLance MarketPlace
        </p>
      </div>

      {/* CENTER (Desktop only) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal ">
          {links}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            {/* User photo + hover */}
            <div className="relative group">
              <img
                className="w-9 h-9 md:w-10 md:h-10 rounded-full cursor-pointer"
                src={user.photoURL}
                alt="user"
              />

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                bg-white shadow-md rounded-md px-3 py-2
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 whitespace-nowrap z-50"
              >
                <p className="text-sm text-gray-700">{user.displayName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-sm md:btn-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-sm md:btn-md"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="btn btn-sm md:btn-md"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
