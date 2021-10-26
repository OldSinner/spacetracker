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

export default function CrewList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crew, setCrew] = useState([]);
  const [isAdded, setIsAdded] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef("");

  function loadMoreCard() {
    axios.get(ref.current).then((res) => {
      ref.current = res.data.next;
      const nw = crew.concat(res.data.results);
      setCrew(nw);
      setIsAdded(true);
    });
  }
  useEffect(() => {
    axios
      .get(Api + "/astronaut/?format=json&limit=12&ordering=status")
      .then((res) => {
        setCount(res.data.count);
        setCrew(res.data.results);
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
          <div className="pageTitle">Crews</div>
          <div className="gridSixRow">
            {crew.map((person) => (
              <Card key={person.id}>
                {person?.profile_image ? (
                  <CardMedia
                    component="img"
                    height="300"
                    image={person?.profile_image}
                    
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
                    <div className="agencyItem">{person.name}</div>
                    {person?.status ? (
                      <div className="agencyItem">
                        Status: {person.status.name}
                      </div>
                    ) : null}
                  </div>
                </CardContent>
                <CardActions>
                  <Link to={"/crew/" + person.id} className="colorDet">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          {count > crew.length ? (
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
