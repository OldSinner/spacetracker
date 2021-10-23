

import React from 'react';
import "./Dashboard.css";
const Welcome = () => {
    return (
        <div className="dashCardMain">
            <div className="dashCardTitle  text-al-center">Space <div className="detColor">Tracker</div></div>
            <div className="dashCardSubtitle  text-al-center">The latest news from the world of space travel.</div>
            <div className="dashCardAction">Scroll For more</div>
            <i className="fas fa-angle-double-down"></i>
        </div>
    )
}

export default Welcome
