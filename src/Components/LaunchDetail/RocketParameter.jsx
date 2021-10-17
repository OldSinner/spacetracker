import "./style.css";
import { EmptyRow } from "./EmptyRow";

function RocketParameter({ rocketInfo }) {
  return (
    <div className="cardwrapper cardbthree">
      <div className="card">
        <div className="cardTitle">
          <h1 className="detColor">Rocket Parameter</h1>
          <h2>{rocketInfo.configuration.name}</h2>
          <hr className="hr80" />
        </div>
        <div className="cardBody">
          <div className="cardBodyWrapper">
            <div className="smcard">
              <div className="smcardBody gridTwoRow">
                <table className="fs20 param">
                  <tbody>
                    <EmptyRow
                      rowtitle="Full Name:"
                      text={rocketInfo?.configuration?.full_name}
                    />
                    <EmptyRow
                      rowtitle="Family:"
                      text={rocketInfo?.configuration?.family}
                    />
                    <EmptyRow
                      rowtitle="Manufacturer:"
                      text={rocketInfo?.configuration?.manufacturer?.name}
                    />
                    <EmptyRow
                      rowtitle="Variant:"
                      text={rocketInfo?.configuration?.variant}
                    />
                    <EmptyRow
                      rowtitle="Max Stages:"
                      text={rocketInfo?.configuration?.max_stage}
                    />
                    <EmptyRow
                      rowtitle="Launch Cost:"
                      text={rocketInfo?.configuration?.launch_cost}
                    />
                    <EmptyRow
                      rowtitle="Launch Mass:"
                      text={rocketInfo?.configuration?.launch_mass}
                    />
                  </tbody>
                </table>
                <div className="fs20 text-al-center">
                  {rocketInfo?.configuration?.description}
                </div>
              </div>
            </div>
            {rocketInfo.launcher_stage.length !== 0 ||
            rocketInfo.spacecraft_stage != null ? (
              <div className="smcard">
                <div className="smcardTitle">
                  <h1 className="detColor">Stages:</h1>
                  <h2>Launcher Stages</h2>
                  <hr />
                  <div className="smcardBody">
                    {rocketInfo.launcher_stage.map((stage) => (
                      <div key="{stage}" className="smBodyItem">
                        <h2 className="text-al-center detColor">
                          {stage.launcher?.serial_number}
                        </h2>
                        <div className="fs20">
                          <div className="detColor">Type:</div> {stage.type}
                        </div>
                        <div className="fs20">
                          <div className="detColor">Details:</div>{" "}
                          {stage.launcher?.details}
                        </div>
                        <div className="fs20">
                          <div className="detColor">Status:</div>{" "}
                          {stage.launcher?.status}
                        </div>
                      </div>
                    ))}
                  </div>
                  <h2>Spacecraft Stages</h2>
                  <div className="smcardBody">
                    <div className="smBodyItem">
                      <h2 className="text-al-center detColor">
                        {rocketInfo.spacecraft_stage?.spacecraft?.name}
                      </h2>
                      <div className="fs20">
                        <div className="detColor">Status:</div>{" "}
                        {rocketInfo.spacecraft_stage?.spacecraft?.status?.name}
                      </div>
                      <div className="fs20 wordbrk">
                        <div className="detColor">Details:</div>{" "}
                        {rocketInfo.spacecraft_stage?.spacecraft?.description}
                      </div>
                      <div className="fs20">
                        <div className="detColor">Destination:</div>{" "}
                        {rocketInfo.spacecraft_stage?.destination}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default RocketParameter;
