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

export default function AgencyList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [agencies, setAgencies] = useState([]);
  const [isAdded, setIsAdded] = useState(true);
  const ref = useRef("");

  function loadMoreCard() {
    axios.get(ref.current).then((res) => {
      ref.current = res.data.next;
      const nw = agencies.concat(res.data.results);
      setAgencies(nw);
      setIsAdded(true);
    });
  }
  useEffect(() => {
    axios
      .get(Api + "/agencies/?format=json&limit=12&ordering=-featured")
      .then((res) => {
        setAgencies(res.data.results);
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
      <>
        <div className="gridFourRow">
          {agencies.map((agency) => (
            <Card key={agency.id}>
              {agency?.image_url ? (
                <CardMedia
                  component="img"
                  height="300"
                  image={agency?.image_url}
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
                  <div className="agencyItem">{agency.name}</div>
                  {agency?.type ? (
                    <div className="agencyItem">Type: {agency.type}</div>
                  ) : null}
                  {
                      agency?.founding_year?
                      (
                        <div className="agencyItem">Founding Year: {agency.founding_year}</div>
                      ):null
                  }
                   {
                      agency?.country_code?
                      (
                        <div className="agencyItem">Country: {agency.country_code}</div>
                      ):null
                  }
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" href={"/agency/" + agency.id}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
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
      </>
    );
  }
}
