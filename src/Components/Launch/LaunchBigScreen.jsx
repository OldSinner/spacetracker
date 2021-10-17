import React, { useState, useEffect } from "react";
import axios from "axios";
import Launch from "./Launch";
import "./LaunchBigScreen.css";
import { Breakpoint } from "react-socks";
import Loading from "../Loading";
import Api from "../../Globals/Api";

export default function LaunchBigScreen() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    axios
      .get(Api+"/launch/upcoming/?limit=3&offset=3")
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
    return (
      <div className="bigScreen">
        <div className="title">Upcoming Launch</div>

        <Breakpoint medium down>
          <div className="slidder">
            <Launch launchInfo={launch.data.results[0]} timmer={1}/>
          </div>
        </Breakpoint>
        <Breakpoint large up>
          <div className="slidder">
            <Launch launchInfo={launch.data.results[0]} timmer={1}/>
            <Launch launchInfo={launch.data.results[1]} timmer={1}/>
            <Launch launchInfo={launch.data.results[2]} timmer={1}/>
          </div>
        </Breakpoint>
      </div>
    );
  }
}
