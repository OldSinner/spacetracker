import "./ListLaunch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Launch from "../Launch/Launch";
import Api from "../../Globals/Api";
import Pagination from "@material-ui/lab/Pagination";
import { Skeleton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Breakpoint, useCurrentWidth } from "react-socks";

//-------------------------------------
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

export function ListLaunchD({ title }) {
  const width = useCurrentWidth();
  const [page, setPage] = useState(0);
  const [uplaunch, setLaunch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const divider = width < 900 ? 1 : 3;
  var lastTimeout;
  const handleSearch = (event) => {
    clearTimeout(lastTimeout);
    lastTimeout = setTimeout(() => {
      setSearch(event.target.value);
      setPage(0);
    }, 500);
  };

  const handleChange = (event, value) => {
    setIsLoaded(false);
    setPage(value - 1);
  };
  var timer = title.toLowerCase() === "upcoming" ? true : false;

  useEffect(() => {
    axios
      .get(
        Api +
          "/launch/" +
          title.toLowerCase() +
          "/?limit=" +
          divider +
          "&offset=" +
          divider * page +
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
    // eslint-disable-next-line
  }, [page, title, search]);

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
          <Breakpoint large up>
            <div className="listGrid">
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={500}
                height={500}
                sx={{
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
          </Breakpoint>
          <Breakpoint medium down>
            <div className="listGrid">
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
          </Breakpoint>
        </div>
      </div>
    );
  } else {
    return (
      <div className="listLaunch">
        <div className="listTitle">
          <div className="tf"></div>
          <div className="detColor fs60 text-al-center listT">
            {title} launch
            <Breakpoint medium down >
            <TextField
                onChange={handleSearch}
                defaultValue={search}
                sx={{
                  "& label.Mui-focused": {
                    color: "var(--detailColor)",
                  },
                  "& label": {
                    color: "var(--detailColor)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "var(--detailColor)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--detailColor)",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--detailColor)",
                    },
                  },
                  input: {
                    color: "var(--firstColor) !important",
                    borderColor: "var(--firstColor)",
                  },
                }}
                id="outlined-basic"
                label="Search"
                color="primary"
              ></TextField>
            </Breakpoint>
          </div>
          <div className="tf">
            <Breakpoint large up>
              <TextField
                onChange={handleSearch}
                defaultValue={search}
                sx={{
                  "& label.Mui-focused": {
                    color: "var(--detailColor)",
                  },
                  "& label": {
                    color: "var(--detailColor)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "var(--detailColor)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--detailColor)",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--detailColor)",
                    },
                  },
                  input: {
                    color: "var(--firstColor) !important",
                    borderColor: "var(--firstColor)",
                  },
                }}
                id="outlined-basic"
                label="Search"
                color="primary"
              ></TextField>
            </Breakpoint>
          </div>
        </div>

        {uplaunch?.data?.results[0] ? (
          <>
            <Breakpoint large up>
              <div className="listGrid">
                <Launch launchInfo={uplaunch.data.results[0]} timmer={timer} />
                <Launch launchInfo={uplaunch.data.results[1]} timmer={timer} />
                <Launch launchInfo={uplaunch.data.results[2]} timmer={timer} />
              </div>
            </Breakpoint>
            <Breakpoint medium down>
              <Launch launchInfo={uplaunch.data.results[0]} timmer={timer} />
            </Breakpoint>
          </>
        ) : (
          <div className="detColor fs60 text-al-center listT">
            No results found :/ Sorry
          </div>
        )}
        <Pagination
          count={Math.floor(uplaunch.data.count / divider)}
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
