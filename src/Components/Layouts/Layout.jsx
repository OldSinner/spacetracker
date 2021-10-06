import React from "react";
import Topbar from "./Topbar";
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Topbar />
      </div>
      <div className="wrap">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;