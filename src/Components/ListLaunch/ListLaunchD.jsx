import "./ListLaunch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";

import Launch from "../Launch/Launch";
import Api from "../../Globals/Api";

function ListLaunchD({ title }) {
  const [page, setPage] = useState(0);
  const [uplaunch, setLaunch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var timer = title.toLowerCase() == "upcoming" ? true : false;
  useEffect(() => {
    axios
      .get(
        Api + "/launch/" + title.toLowerCase() + "/?limit=65&offset=" + 3 * page
      )
      .then((res) => {
        setLaunch(res);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
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
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="listLaunch">
        {page > 0 ? (
          <i
            class="fas fa-angle-left fs60 btnHover"
            onClick={() => {
              setPage(page - 1);
              setIsLoaded(false);
            }}
          ></i>
        ) : (
          <i
            class="fas fa-angle-left fs60 btnDisable"
          ></i>
        )}

        <div>
          <div className="detColor fs60 text-al-center">{title} launch</div>
          <div className="listGrid">
            <Launch launchInfo={uplaunch.data.results[0]} timmer={timer} />
            <Launch launchInfo={uplaunch.data.results[1]} timmer={timer} />
            <Launch launchInfo={uplaunch.data.results[2]} timmer={timer} />
          </div>
        </div>
        <i
          class="fas fa-angle-right fs60 btnHover"
          onClick={() => {
            setPage(page + 1);
            setIsLoaded(false);
          }}
        ></i>
      </div>
    );
  }
}

export default ListLaunchD;
