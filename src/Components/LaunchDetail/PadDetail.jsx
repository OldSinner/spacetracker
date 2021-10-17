import React from "react";

function PadDetail({ padInfo }) {
  return (
    <div className="cardwrapper cardbfour">
      <div className="card">
        <div className="cardTitle">
          <h1 className="detColor">LaunchPad Information</h1>
          <hr className="hr80" />
        </div>
        <div className="cardBody">
          <div className="cardBodyWrapper">
            <h2 className="detColor margin10">Name:</h2>
            <h1 className="margin10">{padInfo.name}</h1>
            <h2 className="detColor margin10">Location:</h2>
            <div className="gridTwoRow">
              <img className="padImg margin10" alt='Map'  src={padInfo.map_image} />
              <div className='margin10'>
                <h2 className="detColor">Place:</h2>
                <h3>{padInfo.location.name}</h3>
                <h3>{padInfo.location.country_code}</h3>
                <h3>{padInfo.latitude} lat</h3>
                <h3>{padInfo.longitude} long </h3> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadDetail;
