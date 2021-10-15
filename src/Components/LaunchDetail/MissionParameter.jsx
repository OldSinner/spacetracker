import NotKnown from "./NotKnown";
import "./style.css";
import ReactTooltip from "react-tooltip";


export default function MissionParameter({ missionInfo }) {
  return (
    <div className="height500 cardwrapper w-img cardbgone">
      <img className="cardimg" src={missionInfo.image} alt="" />
      <div className="card">
        <div className="cardTitle"><h1 className='detColor'>{missionInfo.mission.name}</h1></div>
        <hr className='hr80'/>
        <div className="cardBody gridTwoRow">
            <div className="bodypart">
                <table className='params'>
                    <tbody>
                    <tr>
                        <td className='detColor'>Mission Type:</td>
                        <td><NotKnown text={missionInfo.mission.type}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Status:</td>
                        <td data-tip={missionInfo.status.description}><NotKnown  text={missionInfo.status.name}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Window Start:</td>
                        <td><NotKnown text={missionInfo.window_start}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Launch Provider:</td>
                        <td data-tip={missionInfo.launch_service_provider.name}><NotKnown  text={missionInfo.launch_service_provider.abbrev}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='detColor'>Orbit:</td>
                        <td><NotKnown text={missionInfo.mission.orbit.name}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Rocket:</td>
                        <td><NotKnown text={missionInfo.rocket.configuration.full_name}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Launch Pad:</td>
                        <td><NotKnown text={missionInfo.pad.name}/></td>
                    </tr>
                    <tr>
                        <td className='detColor'>Launch Location:</td>
                        <td><NotKnown text={missionInfo.pad.location.name}/></td>
                    </tr>
                    </tbody>
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
