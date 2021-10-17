import "./Launch.css";
import TimerComponents from "../TimerComponent";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

export default function Launch({ launchInfo, timmer }) {

  return (
    <div className="wrap">
      <img className="bg-launch-img" src={launchInfo.image} />
      <div className="detail">
        <div className="detailContainer">
          <div className="launchTitle">{launchInfo.name} </div>
          <hr className="hr80" /> 
          {timmer==true ? (<div className="launchTimer">
            
            Lift Off Time: 
            <TimerComponents date={new Date(launchInfo.window_start)} />
            <hr className="hr60" />
          
          </div>): (<div className="statusPrev">
            <h2>Status: </h2>
            <h1 className="statusAct" data-tip={launchInfo.status.description}>
              {launchInfo.status.name}
            </h1>
          </div>)}
          
          
          <Link c to={"/launch/" + launchInfo.id}>
            <div className="moreButton">More</div>
          </Link>
        </div>
      </div>
      <ReactTooltip place="top" type="info" effect="float" />
    </div>
  );
}
