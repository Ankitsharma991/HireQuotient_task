import React, { Fragment } from "react";
import "./Smart.css";
import myImage from "../../images/4.png";
import babyImage from "../../images/5.png";

const SmartPage = () => {
  return (
    <Fragment>
      <div className="mc">
        <div className="sc">
          <div className="cc">
            <div>
              <img src={myImage} alt="calender" />
            </div>
            <div className="lc">
              <div className="hc">
                <p className="st">Smart Reminders & Task</p>
              </div>
              <p className="sh">
                Never miss an important deadline or event again
              </p>
              <p className="pe">
                Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </p>
              <div className="cb">
                <img src={babyImage} alt="Ronak Agarawal" />
                <div className="mb">
                  <p className="um">
                    I love how user-friendly this app is! It's so easy to add
                    events and set reminders!
                  </p>
                  <p className="ud">Adam, entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SmartPage;
