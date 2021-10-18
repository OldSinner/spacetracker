import "./ListLaunch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import Launch from "../Launch/Launch";
import Api from "../../Globals/Api";
import Pagination from "@material-ui/lab/Pagination";
import { Skeleton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

export function ListLaunchD({ title }) {
  const [page, setPage] = useState(0);
  const [uplaunch, setLaunch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  var timer = title.toLowerCase() === "upcoming" ? true : false;

  useEffect(() => {
    axios
      .get(
        Api +
          "/launch/" +
          title.toLowerCase() +
          "/?limit=3&offset=" +
          3 * page +
          "&search=" +
          search
      )
      .then((res) => {
        setLaunch(res);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  }, [page, title]);

  if (error) {
    return (
      <div className="listLaunch">
        <div className="slidder subtitle">Problem Occured! Sorry!</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="listLaunch">
        <div className="detColor fs45 text-al-center">{title} launch</div>
        <div className="loading">
          <div className="listGrid">
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={500}
              height={500}
              x={{
                margin: "10px",
              }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={500}
              height={500}
              x={{
                margin: "10px",
              }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={500}
              height={500}
              sx={{
                margin: "10px",
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="listLaunch">
        <div className="detColor fs60 text-al-center">{title} launch</div>
        <div className="listGrid">
          <Launch launchInfo={uplaunch.data.results[0]} timmer={timer} />
          <Launch launchInfo={uplaunch.data.results[1]} timmer={timer} />
          <Launch launchInfo={uplaunch.data.results[2]} timmer={timer} />
        </div>
        <Pagination
            count={Math.floor(uplaunch.data.count / 3)}
            color="primary"
            showLastButton
            onChange={handleChange}
            size="large"
            page={page + 1}
            classes={{ ul: classes.ul }}
          />
        {/* <i
          className="fas fa-angle-right fs60 btnHover"
          onClick={() => {
            setPage(page + 1);
            setIsLoaded(false);
          }}
        ></i> */}
      </div>
    );
  }
}

// MOBILE -------------------------------------------------------
export function ListLaunchM({ title }) {
  const [page, setPage] = useState(0);
  const [uplaunch, setLaunch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var timer = title.toLowerCase() === "upcoming" ? true : false;
  useEffect(() => {
    axios
      .get(
        Api + "/launch/" + title.toLowerCase() + "/?limit=1&offset=" + 1 * page
      )
      .then((res) => {
        setLaunch(res);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (error) {
    return (
      <div className="listLaunch">
        <div className="slidder subtitle">Problem Occured! Sorry!</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="listLaunch">
        {page > 0 ? (
          <i
            className="fas fa-angle-left fs60 btnHover"
            onClick={() => {
              setPage(page - 1);
              setIsLoaded(false);
            }}
          ></i>
        ) : (
          <i className="fas fa-angle-left fs60 btnDisable"></i>
        )}
        <div>
          <div className="detColor fs45 text-al-center">{title} launch</div>
          <div className="listGrid">
            <Loading />
          </div>
        </div>
        <i
          className="fas fa-angle-right fs60 btnHover"
          onClick={() => {
            setPage(page + 1);
            setIsLoaded(false);
          }}
        ></i>
      </div>
    );
  } else {
    return (
      <div className="listLaunch">
        {page > 0 ? (
          <i
            className="fas fa-angle-left fs60 btnHover"
            onClick={() => {
              setPage(page - 1);
              setIsLoaded(false);
            }}
          ></i>
        ) : (
          <i className="fas fa-angle-left fs60 btnDisable"></i>
        )}

        <div>
          <div className="detColor fs45 text-al-center">{title} launch</div>
          <div className="listGrid">
            <Launch launchInfo={uplaunch.data.results[0]} timmer={timer} />
          </div>
        </div>
        <i
          className="fas fa-angle-right fs60 btnHover"
          onClick={() => {
            setPage(page + 1);
            setIsLoaded(false);
          }}
        ></i>
      </div>
    );
  }
}
