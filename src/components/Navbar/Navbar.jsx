import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

import { FaAngleDown } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineUser,
  AiOutlineCar,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (showDropDown) {
      setShowDropDown(!setShowDropDown);
    } else {
      setShowDropDown(true);
    }
  };

  const currentUser = JSON.parse(sessionStorage.getItem("user"));
  // console.log(currentUser, "current");

  const handleLogout = () => {
    sessionStorage.clear("user");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="top-bar">
        <div className="logo">
          <NavLink to={`/`} onClick={() => setShowDropDown(false)}>
            <img
              className="f1-logo"
              src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
              alt="f1-logo"
            />
          </NavLink>
        </div>
      </div>
      <nav className="links">
        {currentUser ? (
          <>
            <NavLink
              className="link"
              onClick={() => setShowDropDown(false)}
              aria-current="page"
              to="/profile"
            >
              <AiOutlineUser /> Profile
            </NavLink>
          </>
        ) : null}
        <NavLink
          className="link"
          onClick={() => setShowDropDown(false)}
          aria-current="page"
          to="/"
        >
          <AiOutlineHome /> Home
        </NavLink>
        <NavLink
          className="link"
          onClick={() => setShowDropDown(false)}
          aria-current="page"
          to="/schedule"
        >
          <AiOutlineSchedule />
          Schedule
        </NavLink>
        <div className="dropdown">
          <NavLink className="link" onClick={() => handleClick()}>
            <AiOutlineOrderedList /> Standings <FaAngleDown />
          </NavLink>
          {showDropDown ? (
            <div className="dropdown-content">
              <NavLink
                onClick={() => handleClick()}
                className="link"
                aria-current="page"
                to="/rankings/rankings"
              >
                <AiOutlineUser /> Driver
              </NavLink>
              <NavLink
                onClick={() => handleClick()}
                className="link"
                aria-current="page"
                to="/rankings/constructor"
              >
                <AiOutlineCar /> Constructor
              </NavLink>
            </div>
          ) : (
            !showDropDown
          )}
        </div>
        {currentUser ? (
          <>
            <NavLink
              className="link"
              onClick={() => setShowDropDown(false)}
              aria-current="page"
              to="/"
            >
              <button className="logout-btn" onClick={handleLogout}>
                Logout <BiLogIn className="icon" />
              </button>
            </NavLink>
          </>
        ) : (
          <NavLink
            className="link"
            onClick={() => setShowDropDown(false)}
            aria-current="page"
            to="/login"
          >
            <BiLogIn />
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
