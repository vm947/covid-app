import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-danger bg-dark">
        <NavLink className="navbar-brand" to="/allCountries">
          Covid Stats
        </NavLink>
        <div className="navbar" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/globalStats">
                Global Statistics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                All Countries 
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="">
                Pricing
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
