import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashCard dashCardSizeL dashCardMain">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">
            Space <div className="detColor">Tracker</div>
          </div>
          <div className="dashCardSubtitle  text-al-center">
            The latest news from the world of space travel.
          </div>
          <div className="dashCardAction">Scroll For more</div>
          <i className="fas fa-angle-double-down"></i>
        </div>
      </div>
      <div className="dashCard dashCardSizeM dashCardLaunch">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Launch</div>
          <div className="dashCardSubtitle  text-al-center">
            Track all past and future rocket launches.
          </div>
          <Link to="/launchlist/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </div>
      <div className="dashCard dashCardSizeM dashCardspacestation">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Spacestations</div>
          <div className="dashCardSubtitle  text-al-center">
          Details of the space stations.
          </div>
          <Link to="/spacestations/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
