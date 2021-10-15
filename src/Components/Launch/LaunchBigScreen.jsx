import React, { useState, useEffect } from "react";
import Launch from "./Launch";
import axios from "axios";
import "./LaunchBigScreen.css";
import { Breakpoint } from "react-socks";
import Loading from "../Loading";

export default function LaunchBigScreen() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    axios
      .get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=3&offset=6")
      .then((res) => {
        setLaunch(res);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
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
        <Loading/>
      </div>
    );
  } else {
    console.log(launch.data.results[0]);
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>

        <Breakpoint medium down>
          <div className="slidder">
            <Launch launchInfo={launch.data.results[0]} />
          </div>
        </Breakpoint>
        <Breakpoint large up>
          <div className="slidder">
            <Launch launchInfo={launch.data.results[0]} />
            <Launch launchInfo={launch.data.results[1]} />
            <Launch launchInfo={launch.data.results[2]} />
          </div>
        </Breakpoint>
      </div>
    );
  }
}
