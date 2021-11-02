import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Dashboard.css";
const Dashboard = () => {
  AOS.init();
  return (
    <>
      <section className="dashCard dashCardSizeL dashCardMain" >
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
      </section>
      <section className="dashCard dashCardSizeM dashCardLaunch" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Launch</div>
          <div className="dashCardSubtitle  text-al-center">
            Track all past and future rocket launches.
          </div>
          <Link to="/launchlist/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </section>
      <section className="dashCard dashCardSizeM dashCardspacestation" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Spacestations</div>
          <div className="dashCardSubtitle  text-al-center">
          Details of the space stations.
          </div>
          <Link to="/spacestations/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </section>
      <section className="dashCard dashCardSizeM dashCardcrew" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Astronauts</div>
          <div className="dashCardSubtitle  text-al-center">
          People who push the boundaries of human domination.
          </div>
          <Link to="/crew/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </section>
      <section className="dashCard dashCardSizeM dashCardspacecraft" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Spacecraft</div>
          <div className="dashCardSubtitle  text-al-center">
          Vehicle designed to fly in outer space.
          </div>
          <Link to="/craft/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </section>
      <section className="dashCard dashCardSizeM dashCardsevents" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="dashCardBody">
          <div className="dashCardTitle  text-al-center">Events</div>
          <div className="dashCardSubtitle  text-al-center">
          Stay alert to news.
          </div>
          <Link to="/craft/">
            <i class="far fa-arrow-alt-circle-right fs45"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
