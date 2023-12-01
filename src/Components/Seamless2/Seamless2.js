import React, { Fragment } from "react";
import "../Seamless/seamless.css";
import myImage from "../../images/6.png";
import babyImage from "../../images/7.png";

const Seamless2 = () => {
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="headContainer">
            <p className="seamlessTitle" style={{ backgroundColor: "#DDF4E4" }}>
              Seamless Scheduling
            </p>
          </div>
          <div className="contentContainer">
            <div className="leftContainer">
              <p className="subHeading">Focus on what matters most for you</p>
              <p className="paragraphExplain">
                Effortlessly plan your day with our intuitive drag-and-drop
                interface. Sync with multiple calendar platforms, import events
                from emails, and add participants with just a few clicks.
              </p>
              <div className="conversationBox">
                <img src={babyImage} alt="Ronak Agarawal" />
                <div className="messageBox">
                  <p className="userMessage">
                    I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and 
                  </p>
                  <p className="userDetails">Annie, Designer</p>
                </div>
              </div>
            </div>
            <div>
              <img src={myImage} alt="calender" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Seamless2;
