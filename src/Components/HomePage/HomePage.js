import React, { Fragment } from "react";
import "./HomePage.css";
import Seamless from "../Seamless/Seamless.js";
import myImage from "../../images/1.png";

const HomePage = () => {
  return (
    <Fragment>
        <div className="homePageContainer">
          <div className="firstBtnDiv">An other way to manage time️</div>
          <div className="calenderApp">Your new favorite calendar 🗓️ app</div>
          <div className="explainDiv">
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.{" "}
          </div>
          <div className="jointOptionContainer">
            <div>Get started, it's free</div>
            <p>Free 14 days trials,no credit card needed</p>
          </div>
          <div>
            <div class="framer-alqnzd-container">
              <div
                class="praisehive-embed"
                id="praisehive-cldxqquwh0005xh0kgigijx32"
                data-widget-layout="avatars"
                style={{ width: "fit-content" }}
              >
                <iframe
                  id="cldxqquwh0005xh0kgigijx32"
                  title="PraiseHive - cldxqquwh0005xh0kgigijx32"
                  src="https://embed.praisehive.com/cldxqquwh0005xh0kgigijx32"
                  scrolling="no"
                  frameborder="0"
                  style={{ width: "315px", height: "42px", overflow: "hidden" }}
                ></iframe>
              </div>
            </div>
          </div>
          <img
            style={{
              marginTop: "8vh",
              marginBottom: "20vh",
              width: "70vw",
              height: "auto",
            }}
            src={myImage}
            alt="Description of the image"
          />
          <div className="firstBtnDiv">Our main features 🦸🏼</div>
          <div className="firstSubDiv">Discover your new superpowers</div>
        </div>
    </Fragment>
  );
};

export default HomePage;
