import React from "react";
import "./Layout.css";
import { Breakpoint } from "react-socks";
import TopBarMobile from "../TopBar/TopBarMobile";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Breakpoint medium down>
        <TopBarMobile></TopBarMobile>
      </Breakpoint>
      <div className="mainWrapper">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
