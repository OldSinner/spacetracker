import "./Launch.css";
import TimerComponents from "../TimerComponent";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import NoImg from "./../../assets/noimg.jpg";
import Button from "@mui/material/Button";

export default function Launch({ launchInfo, timmer }) {
  return (
    <div className="wrap">
      <img
        alt="Launch img"
        className="bg-launch-img"
        src={launchInfo?.image ? launchInfo.image : NoImg}
      />
      <div className="detail">
        <div className="detailContainer">
          <div className="launchTitle">{launchInfo.name} </div>
          <hr className="hr80 m-top-0" />
          {timmer === true ? (
            <div className="launchTimer">
              Lift Off Time:
              <TimerComponents date={new Date(launchInfo.window_start)} />
              <hr className="hr60" />
            </div>
          ) : (
            <div className="statusPrev">
              <h2 className="margin0">Status: </h2>
              <h1
                className="statusAct"
                data-tip={launchInfo.status.description}
              >
                {launchInfo.status.name}
              </h1>
            </div>
          )}

          <Link className="text-al-center" to={"/launch/" + launchInfo.id}>
            <Button
              variant="text"
              sx={{
                color: "var(--firstColor)",
                borderColor: "var(--firstColor)",
                justifySelf: "center",
                fontSize: 20,
              }}
            >
              More
            </Button>
          </Link>
        </div>
      </div>
      <ReactTooltip place="top" type="info" effect="float" />
    </div>
  );
}
