import "./style.css";
import ReactTooltip from "react-tooltip";
import NoImg from "./../../assets/noimg.jpg"

//TODO REPAR for mobile
export default function MissionParameter({ missionInfo }) {
  return (
    <div className="height500 cardwrapper w-img cardbgone">
      <img className="cardimg" src={missionInfo.image? missionInfo.image : NoImg} alt="" />
      <div className="card">
        <div className="cardTitle">
          <h1 className="detColor">{missionInfo.name}</h1>
        </div>
        <hr className="hr80" />
        <div className="cardBody gridTwoRow">
          <div className="bodypart">
            <table className="params">
              <tbody>
                <tr>
                  <td className="detColor">Mission Type:</td>
                  <td>
                    {missionInfo?.mission?.type
                      ? missionInfo.mission.type
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Status:</td>
                  <td
                    data-tip={
                      missionInfo?.status?.description
                        ? missionInfo.status.description
                        : "No Information"
                    }
                  >
                    {missionInfo?.status?.name
                      ? missionInfo.status.name
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Window Start:</td>
                  <td>
                    {missionInfo?.window_start
                      ? missionInfo.window_start
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Launch Provider:</td>

                  <td
                    data-tip={
                      missionInfo?.launch_service_provider?.name
                        ? missionInfo.launch_service_provider.name
                        : "No Information"
                    }
                  >
                    {missionInfo?.launch_service_provider?.abbrev
                      ? missionInfo.launch_service_provider.abbrev
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Orbit:</td>
                  <td>
                    {missionInfo?.mission?.orbit?.name
                      ? missionInfo.mission.orbit.name
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Rocket:</td>
                  <td>
                  {missionInfo?.rocket?.configuration?.full_name
                      ? missionInfo.rocket.configuration.full_name
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Launch Pad:</td>
                  <td>
                  {missionInfo?.pad?.name
                      ? missionInfo.pad.name
                      : "No Information"}
                  </td>
                </tr>
                <tr>
                  <td className="detColor">Launch Location:</td>
                  <td>
                  {missionInfo?.pad?.location?.name
                      ? missionInfo.pad.location.name
                      : "No Information"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bodypart desc">
            {missionInfo?.mission?.description
                      ? missionInfo.mission.description
                      : "No Information"}
          </div>
        </div>
        <div className="carFooter"></div>
      </div>
      <ReactTooltip place="top" type="info" effect="float" />
    </div>
  );
}
