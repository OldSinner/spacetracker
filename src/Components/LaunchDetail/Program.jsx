import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import Api from "../../Globals/Api";
//TODO: Fix chaning Agency
//TODO Back button
const Agency = ({ id }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [agency, setAgency] = useState([]);

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
  }, [id]);
  if (error) {
    return <div className="slidder subtitle">Problem Occured! Sorry!</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="agency">
        <h2 className="text-al-center detColor">Agency:</h2>
        <img alt="Agency Logo" className="agencyImg" src={agency.logo_url} />
        <p className="fs20 text-al-center margin10 notop">
          {agency.name} ({agency.abbrev})
        </p>
        <h3 className="text-al-center detColor">Type:</h3>
        <p className="fs20 text-al-center margin10">{agency.type}</p>
        <Link to={"/agency/" + agency.id}>
          <div className="moreButton w100">More</div>
        </Link>
      </div>
    );
  }
};
const Card = ({ Program }) => {
  const [activeId, setActiveId] = useState(0);
  return (
    <div className="smcard">
      <div className="smcardTitle">
        <img
          alt="Program Logo"
          className="programLogo"
          src={Program.image_url}
        />
        <h1 className="detColor">{Program.name}</h1>
      </div>
      <hr className="hr80" />
      <div className="smcardBody gridTwoRow">
        <div className="smBodyItem">
          <h2 className="text-al-center detColor">Description:</h2>
          <p className="fs20 text-al-center margin10">{Program.description}</p>
        </div>
        {Program.agencies.length !== 0 ? (
          <div className="smBodyItem">
            <div className="slidder">
              <div
                className="slideButton"
                onClick={() => {
                  const index = activeId;
                  if (index - 1 > 0) setActiveId(index - 1);
                  else setActiveId(Program.agencies.length-1);
                }}
              >
                <i className="fas fa-angle-left fs45 btnHover"></i>
              </div>

              <Agency id={Program.agencies[activeId].id} />
              <div
                className="slideButton"
                onClick={() => {
                  const index = activeId;
                  if (index + 1 !== Program.agencies.length)
                    setActiveId(index + 1);
                  else setActiveId(0);
                }}
              >
                <i className="fas fa-angle-right fs45 btnHover"></i>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {Program.wiki_url != null ? (
        <a href={Program.wiki_url}>
          <div className="moreButton w20">Check on Wiki </div>
        </a>
      ) : null}
    </div>
  );
};

const Program = ({ launchInfo }) => {
  return (
    <div className=" cardwrapper cardbtwo">
      <div className="card">
        <div className="cardTitle">
          <h1 className="detColor">Programs</h1>
          <h3>Space programs related to this launch.</h3>
        </div>
        <hr className="hr80" />
        <div className="cardBody">
          <div className="cardBodyWrapper">
            {launchInfo.program.map((program) => (
              <Card key="{program}" Program={program} />
            ))}
          </div>
        </div>
        <div className="carFooter"></div>
      </div>
    </div>
  );
};

export default Program;
