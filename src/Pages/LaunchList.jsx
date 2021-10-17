import ListLaunchD from "../Components/ListLaunch/ListLaunchD";
import { Breakpoint } from "react-socks";

export default function LaunchList() {
  return (
    <div>
      <Breakpoint large up>
        <ListLaunchD title="Upcoming"  />
        <ListLaunchD title="Previous"  />
      </Breakpoint>
      <Breakpoint medium down></Breakpoint>
    </div>
  );
}
