import React from "react";
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="mainWrapper">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;