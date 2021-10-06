import "./Launch.css";
import TimerComponents from "../TimerComponent";
export default function Launch({ launchInfo }) {
  console.log(launchInfo);
  
  return (
    <div className="wrap">
      <img className="bg-launch-img" src={launchInfo.image} />
      <div className="launchTitle">{launchInfo.name}</div>
      <div className="launchTimer"> Mission starts in: <TimerComponents date={new Date(launchInfo.window_start)} /></div>
    </div>
  );
}
