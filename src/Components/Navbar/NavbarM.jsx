import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const NavbarM = () => {
  const [menuState, setMenuState] = useState(false);
  const changeState = () => {
    setMenuState(!menuState);
  };
  return (
    <div className="navwrapper">
      <div className="NavbarContainer">
        <div className="menuIcon" onClick={changeState}>
          {menuState ? (
            <i class="fas fa-times burgericon"></i>
          ) : (
            <i class="fas fa-bars burgericon"></i>
          )}
        </div>
        <span className="logoMain">
          Space
          <span className="secondLogo">Tracker</span>
        </span>
      </div>
      {menuState ? (
        <div className="subMenu">
          <ul className="subMenuItems">
            <li className="subMenuItem ">
              <NavLink
                exact
                to="/"
                activeStyle={{
                  color: "var(--detailColor)",
                }}
              >
                <div className="menuItem">Home</div>
              </NavLink>
            </li>
            <hr />
            <li className="subMenuItem fs20">
              <NavLink
                exact
                to="/launchlist/"
                activeStyle={{
                  color: "var(--detailColor)",
                }}
              >
                <div className="menuItem">Launch List</div>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarM;
