import React, { Fragment } from "react";
import "./seamless.css";
import myImage from "../../images/2.png";
import babyImage from "../../images/3.png";

const Seamless = () => {
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="headContainer">
            <p className="seamlessTitle">Seamless Scheduling</p>
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
                    I tested many calendar apps. This app is the best of all! It
                    saves me hours of time.
                  </p>
                  <p className="userDetails">Carla, Head of Finance</p>
                </div>
              </div>
            </div>
            <div >
              <img src={myImage}  alt="calender image" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Seamless;
