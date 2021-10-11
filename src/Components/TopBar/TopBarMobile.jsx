import React from "react";
import { useState } from "react";
import "./TopBar.css";

const TopBarMobile = () => {
  const [menuState, setMenuState] = useState(false);
  const changeState = () => {
    console.log("ok");
    setMenuState(!menuState);
  };
  return (
    <div className="topwrapper">
      <div className="topbarm">
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
              <ul>
                  <li>jeedn</li>
                  <hr/>
                  <li>dwa</li>
                  <hr/>
                  <li>dwa</li>

              </ul>
          </div>
      ):
      (
        (null)
      )}
    </div>
  );
};

export default TopBarMobile;
