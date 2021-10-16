import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { useParams } from "react-router";
import MissionParameter from "../Components/LaunchDetail/MissionParameter";
import Program from "../Components/LaunchDetail/Program";
import RocketParameter from "../Components/LaunchDetail/RocketParameter";

export default function LaunchPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launch, setLaunch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        "https://lldev.thespacedevs.com/2.2.0/launch/" + id + "/?format=json"
      )
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
    return <Loading />;
  } else {
    console.log(launch);
    return (
      <div className="list">
        <MissionParameter missionInfo={launch.data} />
        <div className="carddiv" />
        {launch.data.program.length != 0 ? (
          <>
            <Program launchInfo={launch.data} />
            <div className="carddiv" />
          </>
        ) : null}
        {launch.data.rocket != null ? (
          <>
          <RocketParameter rocketInfo={launch.data.rocket} />
          <div className="carddiv" />
          </>
        ) : null}
      </div>
    );
  }
}
