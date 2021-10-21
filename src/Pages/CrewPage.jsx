import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Api from "../Globals/Api";
import NoImg from "./../assets/noimg.jpg";
import { Link } from "react-router-dom";

import "./../styles/AgencyPage.css";

function AgencyPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crew, setCrew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(Api + "/astronaut/" + id + "/?format=json")
      .then((res) => {
        setCrew(res.data);
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
    console.log(crew);
    return (
      <div className="pageWrap">
        <div className="title">
          {crew?.profile_image ? (
            <img
              src={crew?.profile_image}
              alt="Not Found"
              onerror={NoImg}
              className="astroAvatarBig"
            />
          ) : null}

          <div className="pageTitle">{crew?.name}</div>
        </div>
        <div className="pageBody">
          {crew?.bio ? (
            <div className="itemPage">
              <div className="itemTitle">Biography:</div>
              {crew?.bio}
            </div>
          ) : null}
          {crew?.date_of_birth ? (
            <div className="itemPage">
              <div className="itemTitle">Date of Birth:</div>
              {crew?.date_of_birth}
            </div>
          ) : null}
          {crew?.date_of_death ? (
            <div className="itemPage">
              <div className="itemTitle">Date of Death:</div>
              {crew?.date_of_death}
            </div>
          ) : null}
          {crew?.status ? (
            <div className="itemPage">
              <div className="itemTitle">Status:</div>
              {crew?.status.name}
            </div>
          ) : null}
          {crew?.agency ? (
            <div className="itemPage">
              <div className="itemTitle">Agency:</div>
              <div className="border"><Link to={"/agency/"+crew?.agency?.id}>{crew?.agency?.name}</Link></div>
            </div>
          ) : null}
          {crew?.nationality ? (
            <div className="itemPage">
              <div className="itemTitle">Nationality:</div>
              {crew?.nationality}
            </div>
          ) : null}
          <div className="itemPage">
            <div className="itemTitle">Social:</div>
            <div className="btnGroup">
              {crew?.wiki ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="socialIconBig"
                  href={crew.wiki}
                >
                  <i className="fab fa-wikipedia-w"></i>
                </a>
              ) : null}
              {crew?.instagram ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="socialIconBig"
                  href={crew.instagram}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              ) : null}
              {crew?.twitter ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="socialIconBig"
                  href={crew.twitter}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgencyPage;
