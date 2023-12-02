import React, { Fragment, useState } from "react";
import "./index.css";
import check from "../../images/check.svg";

const PricePlan = () => {
  const [monthly, setMonthly] = useState(true);
  const [annually, setAnnually] = useState(false);
  return (
    <Fragment>
      <div className="mainPriceContainer">
        <div className="price_and_plan">
          <div className="top_container">
            <p className="price_title">Pricing and plans 💰</p>
            <p className="price_heading">Find the best plan for your needs</p>
          </div>
          <div className="bottom_container">
            <div className="selection_tab">
              <div className="mont_ann">
                <p
                  className={`${monthly ? "monthly" : "mnt"}`}
                  onClick={() => {
                    setAnnually(false);
                    setMonthly(true);
                  }}
                >
                  Monthly
                </p>

                <p
                  className={`${annually ? "annually" : "ann"}`}
                  onClick={() => {
                    setAnnually(true);
                    setMonthly(false);
                  }}
                >
                  Annually
                </p>
              </div>
              <p className="discount">✨ save 30%</p>
            </div>

            <div className="card_container">
              <div className="card1">
                <div className="card_category">
                  <p className="cat_title">Free</p>
                  <p className="title_desc">
                    So you can see how incredible our tool is.
                  </p>
                </div>

                <div className="price_details">
                  <div className="amount_details">
                    <p className="amount">
                      $0<span className="amount_mo">/mo</span>
                    </p>
                    <p className="highlight_title">Free Forever</p>
                  </div>

                  <div className="user_action">
                    <p className="button_start">Get Started</p>
                    <p className="option_card">No credit card needed</p>
                  </div>
                </div>

                <div className="services_container">
                  <p className="service_heading">What's included:</p>
                  <div className="services">
                    <div className="service_points">
                      <img src={check} alt="checked" />
                      <p>A cool feature</p>
                    </div>
                    <div className="service_points">
                      <img src={check} alt="checked" />
                      <p>A basic feature</p>
                    </div>
                    <div className="service_points">
                      <img src={check} alt="checked" />
                      <p>A top feature with limitations</p>
                    </div>
                    <div className="service_points">
                      <img src={check} alt="checked" />
                      <p>An incredible feature so useful</p>
                    </div>
                    <div className="service_points">
                      <img src={check} alt="checked" />
                      <p>A top feature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PricePlan;
