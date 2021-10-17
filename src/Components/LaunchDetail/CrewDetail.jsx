import React from "react";
import NoImg from "./../../assets/noimg.jpg"

function GetAstro(crewArrays) {
  var crews = [];
  var crewsId = [];
  crewArrays.forEach((Element) => {
    Element.forEach((crew) => {
      if (!crewsId.includes(crew.astronaut.id)) {
        crewsId.push(crew.astronaut.id);
        crews.push(crew);
      }
    });
  });
  return crews;
}

export function CrewCard({ crew }) {
  return (
    <div className="smcard">
      <div className="smcardTitle">
        <h3 className="detColor">{crew.astronaut.name}</h3>
      </div>
      <hr className="hr80" />
      <div className="smcardBody gridTwoRow">
        <img
          className="astroAvatar"
          src={crew.astronaut.profile_image? crew.astronaut.profile_image : NoImg}
          alt=""
        />
        <div className="astroDetail ">
          <div>
            <div className="detColor">Role:</div>
            {crew?.role?.role ? crew.role.role : "No Information"}
          </div>
          <div>
            <div className="detColor">Agency:</div>
            {crew?.astronaut?.agency?.name
              ? crew.astronaut.agency.name
              : "No Information"}
          </div>
          <div>
            <div className="detColor">Nationality:</div>
            {crew?.astronaut?.nationality
              ? crew.astronaut.nationality
              : "No Information"}
          </div>
          <div>
            <div className="detColor">Status:</div>
            {crew?.astronaut?.status?.name
              ? crew.astronaut.status?.name
              : "No Information"}
          </div>
          <div>
            <div className="detColor">Social:</div>
            <div className="btnGroup">
            {
                crew?.astronaut?.wiki? (<a rel="noreferrer" target="_blank" className='socialIcon' href={crew.astronaut.wiki}><i className="fab fa-wikipedia-w"></i></a>):null
            }
             {
                crew?.astronaut?.instagram? (<a rel="noreferrer" target="_blank" className='socialIcon' href={crew.astronaut.instagram}><i className="fab fa-instagram"></i></a>):null
            }
             {
                crew?.astronaut?.twitter? (<a rel="noreferrer" target="_blank" className='socialIcon' href={crew.astronaut.twitter}><i className="fab fa-twitter"></i></a>):null
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrewDetail({ crewInfo }) {
  const crew = GetAstro([
    crewInfo.launch_crew,
    crewInfo.onboard_crew,
    crewInfo.landing_crew,
  ]);
  return (
    <div className="cardwrapper cardbtwo">
      <div className="card">
        <div className="cardTitle">
          <h1 className="detColor">Crew</h1>
          <h3>Astronauts related to this launch</h3>
        </div>
        <hr className="hr80" />
        <div className="cardBody">
          <div className="gridTwoRow">
            {crew.map((astro) => (
              <CrewCard key="{astro}" crew={astro} />
            ))}
          </div>
        </div>
        <div className="carFooter"></div>
      </div>
    </div>
  );
}

export default CrewDetail;
