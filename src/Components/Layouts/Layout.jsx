import React from "react";
import "./Layout.css";
import { Breakpoint } from "react-socks";
import NavbarM from "../Navbar/NavbarM";
import NavbarD from "../Navbar/NavbarD";
import PageFooter from "../PageFooter";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Breakpoint medium down>
          <NavbarM />
        </Breakpoint>
        <Breakpoint large up>
          <NavbarD />
        </Breakpoint>
        <div className="mainWrapper">{children}</div>
        <PageFooter/>
    </React.Fragment>
  );
};

export default Layout;
