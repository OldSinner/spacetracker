import React from "react";
import Topbar from "../Topbar";
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="mainWrapper">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;