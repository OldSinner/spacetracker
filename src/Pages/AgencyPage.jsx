import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Api from "../Globals/Api";
import NoImg from "./../assets/noimg.jpg";

import "./../styles/AgencyPage.css";

function AgencyPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [agency, setAgency] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(Api + "/agencies/" + id + "/?format=json")
      .then((res) => {
        setAgency(res.data);
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
    console.log(agency);
    return (
      <div className="pageWrap">
        <div className="title">
          {agency?.logo_url ? (
            <img
              src={agency?.logo_url}
              alt="Not Found"
              onerror={NoImg}
              className="agencyLogo"
            />
          ) : null}

          <div className="pageTitle">{agency?.name}</div>
        </div>
        <div className="pageBody">
          <div className="itemPage">
            <div className="itemTitle">Description:</div>
            {agency?.description}
          </div>
          {agency?.administrator ? (
            <div className="itemPage">
              <div className="itemTitle">Administrator</div>
              <div className="text-al-center">{agency?.administrator}</div>
            </div>
          ) : null}
          {agency?.type ? (
            <div className="itemPage">
              <div className="itemTitle">Type</div>
              <div className="text-al-center"> {agency?.type}</div>
            </div>
          ) : null}
          {agency?.info_url ? (
            <div className="itemPage">
              <div className="itemTitle">Page</div>
              <div className="text-al-center">
                <a href={agency?.info_url}>{agency?.info_url}</a>
              </div>
            </div>
          ) : null}
          {agency?.country_code ? (
            <div className="itemPage">
              <div className="itemTitle">Country:</div>
              <div className="text-al-center">{agency?.country_code}</div>
            </div>
          ) : null}

          {agency?.wiki_url ? (
            <div className="cet">
              <div className="itemPage">
                <a href={agency.wiki_url}>
                  <div className="moreButton w80">Check on Wiki</div>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AgencyPage;
