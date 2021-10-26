import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Api from "../Globals/Api";
import NoImg from "./../assets/noimg.jpg";

import "./../styles/AgencyPage.css";

function SpacestationPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [station, setStation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(Api + "/spacestation/" + id + "/?format=json")
      .then((res) => {
        setStation(res.data);
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
        <div className="slidder subtitle">Problem Occured! Sorry!</div>
      </div>
    );
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    console.log(station);
    return (
      <div className="pageWrap">
        <div className="title">
          {station?.image_url ? (
            <img
              src={station?.image_url}
              alt="Not Found"
              onerror={NoImg}
              className="agencyLogo"
            />
          ) : null}

          <div className="pageTitle">{station?.name}</div>
        </div>
        <div className="pageBody">
          <div className="itemPage">
            <div className="itemTitle">Description:</div>
            {station?.description}
          </div>
          {station?.status ? (
            <div className="itemPage">
              <div className="itemTitle">Status</div>
              <div className="text-al-center">{station?.status?.name}</div>
            </div>
          ) : null}
          {station?.founded ? (
            <div className="itemPage">
              <div className="itemTitle">Founded:</div>
              <div className="text-al-center">{station?.founded}</div>
            </div>
          ) : null}
           {station?.deorbited ? (
            <div className="itemPage">
              <div className="itemTitle">Deorbited:</div>
              <div className="text-al-center">{station?.deorbited}</div>
            </div>
          ) : null}
          {station?.mass ? (
            <div className="itemPage">
              <div className="itemTitle">Mass:</div>
              <div className="text-al-center">{station?.mass} tons</div>
            </div>
          ) : null}
          {station?.volume ? (
            <div className="itemPage">
              <div className="itemTitle">Volume:</div>
              <div className="text-al-center">{station?.volume} m3</div>
            </div>
          ) : null}
          {station?.deorbited ? (
            <div className="itemPage">
              <div className="itemTitle">Deorbited:</div>
              <div className="text-al-center">{station?.deorbited}</div>
            </div>
          ) : null}
          
        </div>
      </div>
    );
  }
}

export default SpacestationPage;
