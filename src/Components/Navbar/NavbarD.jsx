import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";


const NavbarD = () => {
  return (
    <div className="navwrapper">
      <div className="NavbarContainer">
        <div className="NavbarD">
          <div className="logoNavbar">
          <Link exact to='/' >
            <span className="logoMain">
              Space
              <span className="secondLogo">Tracker</span>
            </span>
            </Link>
          </div>
            
          <div className="linksNavbar">
          <NavLink  exact to='/nav' activeStyle={{
              color: 'var(--detailColor)'
            }}>
             <div className="menuItem">navItem</div>
             </NavLink>
          </div>
          <div className="linksNavbar">
             <div className="menuItem">NavItem</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarD;
