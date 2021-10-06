import React from "react";
import "./Launch.css";

export default function LaunchBigScreen({ launchInfo }) {
    console.log(launchInfo);
  return (
    <div className="wrap">
      <img
        className="bg-launch-img"
        src={launchInfo.image}
      />
      <div className="launchTitle">
          {launchInfo.name}
      </div>
    </div>
  );
}
