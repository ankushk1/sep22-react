import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="fs-2">Navbar</div>
      <div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg bg-success px-5 py-1 text-light" : ""
            }
            style={({ isActive }) => {
              return isActive
                ? {
                    textDecoration: "none"
                  }
                : {};
            }}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg bg-success px-5 py-1 text-light" : ""
            }
            style={({ isActive }) => {
              return isActive
                ? {
                    textDecoration: "none"
                  }
                : {};
            }}
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg bg-success px-5 py-1 text-light" : ""
            }
            style={({ isActive }) => {
              return isActive
                ? {
                    textDecoration: "none"
                  }
                : {};
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
