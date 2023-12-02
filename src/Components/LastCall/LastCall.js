import React from "react";
import { Fragment } from "react";
import "./index.css";
import babyImage from "../../images/10.png";

const LastCall = () => {
  return (
    <Fragment>
      <div className="last_main_container">
        <div className="last_call_container">
          <div className="last_heading_container">
            <p className="last_call_title">Last call Baby! 🚀</p>
            <p className="last_heading">Ready to start?</p>
          </div>
          <div className="last_call_bottom_container">
            <p className="last_call_desc">
              Here is your last chance to explain how cool your app is. Focus on
              the benefits for your users, not on the features.{" "}
            </p>
            <p className="last_call_start_btn">Get started, it's free</p>
            <div className="last_call_user_box">
              <img src={babyImage} alt="Ronak Agarawal" />
              <div className="last_call_user_details">
                <p className="last_call_user_message">
                  I never missed a call again, the AI-drivenfeature is a game
                  changer for me!
                </p>
                <p className="last_call_username">Adam, Solo founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LastCall;
