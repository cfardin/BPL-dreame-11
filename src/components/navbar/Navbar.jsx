import React from "react";
import coin from "../../assets/Coin.png";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className="h-18 navbar bg-base-100 mt-12.5 mb-6 w-11/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Fixture</a>
            </li>
            <li>
                <a href="">Teams</a>
            </li>
            <li>
                <a href="">Schedules</a>
            </li>
            <li>
                <a className="btn rounded-xl bg-white">
                    <span>0</span> Coin <img src={coin} alt="" />
                </a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
        </div>

        {/* links part */}
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-12 items-center">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Fixture</a>
            </li>
            <li>
                <a href="">Teams</a>
            </li>
            <li>
                <a href="">Schedules</a>
            </li>
            <li>
                <a className="btn rounded-xl bg-white">
                    <span>0</span> Coin <img src={coin} alt="" />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
