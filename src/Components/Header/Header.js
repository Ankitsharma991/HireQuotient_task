import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="headerMain">
        <div className="headerContainer">
        <div className="logoContainer">
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
    </Fragment>
  );
};

export default Header;
