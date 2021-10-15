import NotKnown from "./NotKnown";
import "./style.css";
import ReactTooltip from "react-tooltip";


export default function MissionParameter({ missionInfo }) {
  return (
    <div className="cardwrapper w-img">
      <img className="cardimg" src={missionInfo.image} alt="" />
      <div className="card">
        <div className="cardTitle"><h1>{missionInfo.mission.name}</h1></div>
        <hr className='hr80'/>
        <div className="cardBody">
            <div className="bodypart">
                <table className='params'>
                    <tr>
                        <td>Mission Type:</td>
                        <td><NotKnown text={missionInfo.mission.type}/></td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td data-tip={missionInfo.status.description}><NotKnown  text={missionInfo.status.name}/></td>
                    </tr>
                    <tr>
                        <td>Window Start:</td>
                        <td><NotKnown text={missionInfo.window_start}/></td>
                    </tr>
                    <tr>
                        <td>Launch Provider:</td>
                        <td data-tip={missionInfo.launch_service_provider.name}><NotKnown  text={missionInfo.launch_service_provider.abbrev}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Orbit:</td>
                        <td><NotKnown text={missionInfo.mission.orbit.name}/></td>
                    </tr>
                    <tr>
                        <td>Rocket:</td>
                        <td><NotKnown text={missionInfo.rocket.configuration.full_name}/></td>
                    </tr>
                    <tr>
                        <td>Launch Pad:</td>
                        <td><NotKnown text={missionInfo.pad.name}/></td>
                    </tr>
                    <tr>
                        <td>Launch Location:</td>
                        <td><NotKnown text={missionInfo.pad.location.name}/></td>
                    </tr>
                </table>
            </div>
            <div className="bodypart desc"><NotKnown text={missionInfo.mission.description}/></div>
        </div>
        <div className="carFooter"></div>
      </div>
      <ReactTooltip place="top" type="info" effect="float" />
    </div>
    
  );
}
