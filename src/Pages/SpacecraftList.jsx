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
//TODO SEARCH BAR

export default function SpacecraftList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [craft, setCraft] = useState([]);
  const [isAdded, setIsAdded] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef("");

  function loadMoreCard() {
    axios.get(ref.current).then((res) => {
      ref.current = res.data.next;
      const nw = craft.concat(res.data.results);
      setCraft(nw);
      setIsAdded(true);
    });
  }
  useEffect(() => {
    axios
      .get(Api + "/spacecraft/?format=json&limit=12&ordering=-id")
      .then((res) => {
        setCount(res.data.count);
        setCraft(res.data.results);
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
          <div className="pageTitle">Spacecraft</div>
          <div className="gridSixRow">
            {craft.map((spacecraft) => (
              <Card key={spacecraft.id}>
                {spacecraft?.spacecraft_config?.image_url ? (
                  <CardMedia
                    component="img"
                    height="300"
                    image={spacecraft?.spacecraft_config?.image_url}
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
                    <div className="agencyItem">{spacecraft.name}</div>
                    {spacecraft?.status ? (
                      <div className="agencyItem">
                        Status: {spacecraft.status.name}
                      </div>
                    ) : null}
                    {spacecraft?.spacecraft_config?.name ? (
                      <div className="agencyItem">
                        Family: {spacecraft.spacecraft_config.name}
                      </div>
                    ) : null}
                     {spacecraft?.spacecraft_config?.agency?.name ? (
                      <div className="agencyItem">
                        Agency: {spacecraft.spacecraft_config?.agency?.name}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
                <CardActions>
                  <Link to={"/crew/" + spacecraft.id} className="colorDet">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          {count > craft.length ? (
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
