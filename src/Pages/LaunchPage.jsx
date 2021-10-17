import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { useParams } from "react-router";
import MissionParameter from "../Components/LaunchDetail/MissionParameter";
import Program from "../Components/LaunchDetail/Program";
import RocketParameter from "../Components/LaunchDetail/RocketParameter";
import PadDetail from "../Components/LaunchDetail/PadDetail";
import Api from "../Globals/Api";
import CrewDetail from "../Components/LaunchDetail/CrewDetail";

export default function LaunchPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launch, setLaunch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(Api + "/launch/" + id + "/?format=json")
      .then((res) => {
        setLaunch(res);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
     
        {launch.data.program.length !== 0 ? (
          <>
            <Program launchInfo={launch.data} />
            <div className="carddiv" />
          </>
        ) : null}
           {launch.data?.rocket?.spacecraft_stage?.launch_crew?.length > 0 ||
        launch.data?.rocket?.spacecraft_stage?.onboard_crew?.length > 0 ||
        launch.data?.rocket?.spacecraft_stage?.landing_crew?.length > 0 ? (
          <>
            <CrewDetail crewInfo={launch.data?.rocket?.spacecraft_stage} />
            <div className="carddiv" />
          </>
        ) : null}
        {launch.data.rocket != null ? (
          <>
            <RocketParameter rocketInfo={launch.data.rocket} />
            <div className="carddiv" />
          </>
        ) : null}

        {launch.data.pad != null ? (
          <>
            <PadDetail padInfo={launch.data.pad} />
          </>
        ) : null}
        
      </div>
    );
  }
}
