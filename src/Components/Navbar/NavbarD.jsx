import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const NavbarD = () => {
  return (
    <div className="navwrapper">
      <div className="NavbarContainer">
        <div className="NavbarD">
          <div className="logoNavbar">
            <Link to="/">
              <span className="logoMain">
                Space
                <span className="secondLogo">Tracker</span>
              </span>
            </Link>
          </div>

          <div className="linksNavbar">
            <NavLink
              to="/launchlist/"
              activeStyle={{
                color: "var(--detailColor)",
              }}
            >
              <div className="menuItem">Launch List</div>
            </NavLink>
          </div>
          <div className="linksNavbar">
            <NavLink
              to="/spacestations/"
              activeStyle={{
                color: "var(--detailColor)",
              }}
            >
              <div className="menuItem">Spacestations</div>
            </NavLink>
          </div>
          <div className="linksNavbar">
            <NavLink
              to="/crew/"
              activeStyle={{
                color: "var(--detailColor)",
              }}
            >
              <div className="menuItem">Crew</div>
            </NavLink>
          </div>
          <div className="linksNavbar">
            <NavLink
              to="/about/"
              activeStyle={{
                color: "var(--detailColor)",
              }}
            >
              <div className="menuItem">About</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarD;
