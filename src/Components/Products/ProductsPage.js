import React, { Fragment } from "react";
import "./Product.css";
import data from "./Data3";

const ProductsPage = () => {
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="topRow">
          <p className="titleDiv">They already love our products 😍</p>
          <p className="boldHeading">See what our users say about us</p>
        </div>
        <div className="firstLine">
          {data.map((item) => (
            <div className="cardBox">
              <div className="firstRow">
                <div className="imageTitle">
                  <img
                    className="imageT"
                    src={item.img}
                    alt="testimonial people"
                  />

                  <p className="topicTitle">{item.title}</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <p className="secondRow">{item.desc}</p>
              <div className="bottomRow">
                <p className="user">{item.userName}</p>
                <p className="deg">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="secondLine">
          {data.map((item) => (
            <div className="cardBox">
              <div className="firstRow">
                <div className="imageTitle">
                  <img
                    className="imageT"
                    src={item.img}
                    alt="testimonial people"
                  />

                  <p className="topicTitle">{item.title}</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <p className="secondRow">{item.desc}</p>
              <div className="bottomRow">
                <p className="user">{item.userName}</p>
                <p className="deg">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="thirdLine">
          {data.map((item) => (
            <div className="cardBox">
              <div className="firstRow">
                <div className="imageTitle">
                  <img
                    className="imageT"
                    src={item.img}
                    alt="testimonial people"
                  />

                 <p className="topicTitle">{item.title}</p>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <p className="secondRow">{item.desc}</p>
              <div className="bottomRow">
                <p className="user">{item.userName}</p>
                <p className="deg">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
