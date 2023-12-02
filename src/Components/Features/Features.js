import React, { Fragment } from "react";
import "./features.css";
import datas from "./data";

const Features = () => {
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="featureContainer">
          <div className="topContainer">
            <p className="fTitle">And so much more... 💼</p>
            <p className="headerTitle">Our features to make your life easier</p>
            <div className="cardContainer">
              {datas.map((item) => (
                <div className="cardDiv" key={item.id}>
                  <img src={item.image} alt="just card features" />
                  <p
                    className="title"
                    style={{ backgroundColor: `${item.col}` }}
                  >
                    {item.title}
                  </p>
                  <p className="desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
