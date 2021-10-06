import React, { useState, useEffect } from "react";
import Launch from "./Launch";
import axios from "axios";
import loading from "../../assets/loading.svg"
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
          setError(error)
          setIsLoaded(true);
      });
  }, []);
  if (error) {
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>
        <div className="slidder subtitle">Problem Occured! Sorry!</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>
        <img className='loadingLogo' src={loading} alt="Loading" />
        <div className="slidder subtitle">We connect with the cosmos! Please wait!</div>
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
