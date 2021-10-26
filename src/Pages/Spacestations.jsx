import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Api from "../Globals/Api";
import NoImg from "./../assets/noimg.jpg";
import Card from "@mui/material/Card";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import { Button } from "@mui/material";
import "../styles/AgencyList.css";
import { Link } from "react-router-dom";

export default function Spacestations() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stations, setStations] = useState([]);
  const [isAdded, setIsAdded] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef("");

  function loadMoreCard() {
    axios.get(ref.current).then((res) => {
      ref.current = res.data.next;
      const nw = stations.concat(res.data.results);
      setStations(nw);
      setIsAdded(true);
    });
  }
  useEffect(() => {
    axios
      .get(Api + "/spacestation/?format=json&limit=8&ordering=status")
      .then((res) => {
        setCount(res.data.count);
        setStations(res.data.results);
        ref.current = res.data.next;
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
    return (
      <div className="pageWrap">
        <div className="agenciesPage">
          <div className="pageTitle">Spacestations</div>
          <div className="gridFourRow">
            {stations.map((spacestation) => (
              <Card key={spacestation.id}>
                {spacestation?.image_url ? (
                  <CardMedia
                    component="img"
                    height="300"
                    image={spacestation?.image_url}
                    alt="green iguana"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="300"
                    image={NoImg}
                    alt="green iguana"
                  />
                )}
                <CardContent>
                  <div className="agencyContent">
                    <div className="agencyItem">{spacestation.name}</div>
                    {spacestation?.status ? (
                      <div className="agencyItem">
                        Status: {spacestation.status.name}
                      </div>
                    ) : null}
                    {spacestation?.type ? (
                      <div className="agencyItem">
                        Type: {spacestation.type.name}
                      </div>
                    ) : null}
                    {spacestation?.founded ? (
                      <div className="agencyItem">
                        Founded: {spacestation.founded}
                      </div>
                    ) : null}
                    {spacestation?.deorbited ? (
                      <div className="agencyItem">
                        Deorbited: {spacestation.deorbited}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
                <CardActions>
                  <Link to={"/spacestations/" + spacestation.id} className="colorDet">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          {count > stations.length ? (
            <div className="align-cent margin10 ">
              {isAdded ? (
                <Button
                  onClick={() => {
                    setIsAdded(false);
                    loadMoreCard();
                  }}
                >
                  Load More
                </Button>
              ) : (
                <CircularProgress />
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
