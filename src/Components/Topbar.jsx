import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topnav">
      <Link to="/">
        <div className="logo">
          Space<span className="logo2">Tracker</span>
        </div>
      </Link>
      <Link to="/">
        <div className="link">Events</div>
      </Link>
    </div>
  );
}
