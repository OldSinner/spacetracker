import React, { useState, useEffect } from "react";
import Launch from "./Launch";
import axios from "axios";
import "./LaunchBigScreen.css";

export default function LaunchBigScreen() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    axios
      .get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=3")
      .then((res) => {
        setLaunch(res)
        setIsLoaded(true);
      })
      .catch((error) => {
          setIsLoaded(true);
          setError(error)
      });
  }, []);
  if (error) {
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>
        <div className="slidder title">Problem Occured! Sorry!</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>
        <div className="slidder title">We get the Secret Data! Wait!</div>
      </div>
    );
  } else {
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>
        <div className="slidder">
          <div className="moveButton">
            <i class="fas fa-chevron-left"></i>
          </div>
          <Launch launchInfo={launch.data.results[0]} />
          <Launch launchInfo={launch.data.results[1]} />
          <Launch launchInfo={launch.data.results[2]} />

          <div className="moveButton">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  } 
}
