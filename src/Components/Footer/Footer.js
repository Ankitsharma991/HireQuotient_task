import React, { Fragment } from "react";
import "./Footer.css";
import twitter from "../../images/twitter.svg"
import facebook from "../../images/facebook.svg"
import linkedIn from "../../images/linkedin.svg"

const Footer = () => {
  return (
    <Fragment>
      <div className="footerMain">
        <div className="footerContainer">
          <div className="col1">
            <h3>Milton</h3>
            <p>A short text explaining why my startup is so cool</p>
            <p>© My super start-up</p>
            <div className="socialMediaContainer" >
              <img src={twitter} alt="Twitter"/>
              <img src={facebook} alt="Facebook"/>
              <img src={linkedIn} alt="Linkedin"/>
            </div>
          </div>
          <div className="col2">
            <h3>Products</h3>
            <p>Features</p>
            <p>Testimonial</p>
            <p>Pricing</p>
            <p>FAQs</p>
          </div>
          <div className="col3">
            <h3>Resources</h3>
            <p>Change Log</p>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="col4">
            <h3>Others</h3>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Affiliation</p>
            <p>Press</p>
          </div>
          <div className="col5">
            <h3>From the blog</h3>
            <p>
              Mastering Your Schedule: Top Time Management Techniques for
              Balancing Work and Life
            </p>
            <p>Organizing Your Calendar for Enhanced Productivity and Focus</p>
            <p>
              The Power of Prioritization: Effective Strategies for Managing
              Your Time and Tasks
            </p>
            <p>
              Maximizing Your Minutes: Essential Tips for Streamlining Your
              Daily Routine and Calendar
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
