import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topnav">
      <div className="logo">Space Tracker</div>
      <Link to="/">
        <div className="link">Events</div>
      </Link>
    </div>
  );
}