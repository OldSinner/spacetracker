import { ListLaunchD, ListLaunchM } from "../Components/ListLaunch/ListLaunch";
import { Breakpoint } from "react-socks";

export default function LaunchList() {
  return (
    <div>
      <Breakpoint large up>
        <ListLaunchD title="Upcoming" />
        <ListLaunchD title="Previous" />
      </Breakpoint>
      <Breakpoint medium down>
        <ListLaunchM title="Upcoming" />
        <ListLaunchM title="Previous" />
      </Breakpoint>
    </div>
  );
}
