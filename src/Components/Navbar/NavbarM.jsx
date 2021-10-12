import React from "react";
import { useState } from "react";
import "./Navbar.css";

const NavbarM = () => {
  const [menuState, setMenuState] = useState(false);
  const changeState = () => {
    console.log("ok");
    setMenuState(!menuState);
  };
  return (
    <div className="navwrapper">
      <div className="NavbarContainer">
        <div className='menuIcon' onClick={changeState}>
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
          <div className='subMenu'>
              <ul className='subMenuItems'>
                  <li className='subMenuItem'>jeedn</li>
                  <hr/>
                  <li className='subMenuItems'>dwa</li>
                  <hr/>
                  <li className='subMenuItems'>dwa</li>

              </ul>
          </div>
      ):
      (
        (null)
      )}
    </div>
  );
};

export default NavbarM;
