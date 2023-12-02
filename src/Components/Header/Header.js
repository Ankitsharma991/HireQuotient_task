import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="headerMain">
        <div
          className="headerContainer"
          style={{
            position: "absolute",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "fixed",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "-4.5vh",
              height: "8vh",
              borderBottom: "1px solid #dfdede",
            }}
          >
            <div
              className="logoContainer"
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p>Milton</p>
            </div>
            <div className="navLinkContainer">
              <p>Features</p>
              <p>Testimonial</p>
              <p>Pricing</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
            <div className="navBtnContainer">
              <button className="loginBtn">Log in</button>
              <button className="getStartedBtn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
