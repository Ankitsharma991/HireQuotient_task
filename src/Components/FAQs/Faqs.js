import React, { useState } from "react";
import { Fragment } from "react";
import "./index.css";

const Faqs = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <Fragment>
      <div className="mainFaqContainer">
        <div className="faqContainer">
          <div className="topHeadingContainer">
            <p className="faqTitle">Relevant stuff, bla bla 📣</p>
            <p className="faqHeading">Frequently asked questions</p>
          </div>

          <div className="qnaSection">
            {/* Question-1 */}
            <div className="questionAnswer">
              <div className="question" onClick={() => setOpen1(!open1)}>
                <p>Can I cancel my subscription?</p>
                <div className="iconContainer">
                  <p>{open1 ? "-" : "+"}</p>
                </div>
              </div>
              {open1 && (
                <div className="answer" onClick={() => setOpen1(false)}>
                  <p>
                    You can cancel your plan whenever you’d like. You’ll be
                    downgraded to the free plan. You won’t be locked out of any
                    projects that have paid plans.
                  </p>
                </div>
              )}
            </div>

            {/* Question-2 */}
            <div className="questionAnswer">
              <div className="question" onClick={() => setOpen2(!open2)}>
                <p>What happens when my trial ends?</p>
                <div className="iconContainer">
                  <p>{open2 ? "-" : "+"}</p>
                </div>
              </div>
              {open2 && (
                <div className="answer" onClick={() => setOpen2(false)}>
                  <p>
                    When your trial period ends, your account will automatically
                    be downgraded to our free plan, with limited features and
                    functionality. To continue enjoying the full benefits of our
                    service, you can upgrade to one of our paid plans at any
                    time during or after the trial. Your data and settings will
                    be preserved, ensuring a seamless transition as you move
                    forward with our SaaS platform.
                  </p>
                </div>
              )}
            </div>

            {/* Question-3 */}
            <div className="questionAnswer">
              <div className="question" onClick={() => setOpen3(!open3)}>
                <p>What payment methods do you offer?</p>
                <div className="iconContainer">
                  <p>{open3 ? "-" : "+"}</p>
                </div>
              </div>
              {open3 && (
                <div className="answer" onClick={() => setOpen3(false)}>
                  <p>
                    We aim to provide a seamless experience for our customers.
                    We accept a variety of payment methods, including major
                    credit cards (Visa, MasterCard, American Express, and
                    Discover), PayPal, and bank transfers.
                  </p>
                </div>
              )}
            </div>

            {/* Question-4 */}
            <div className="questionAnswer">
              <div className="question" onClick={() => setOpen4(!open4)}>
                <p>What is your refund policy?</p>
                <div className="iconContainer">
                  <p>{open4 ? "-" : "+"}</p>
                </div>
              </div>
              {open4 && (
                <div className="answer" onClick={() => setOpen4(false)}>
                  <p>
                    Our refund policy is designed with customer satisfaction in
                    mind. If you are not satisfied with our service, you can
                    request a full refund within 30 days of your initial
                    purchase. To initiate the refund process, please contact our
                    support team through the "Help" section in your account or
                    email us at support@Milton.com, and we'll be happy to assist
                    you.
                  </p>
                </div>
              )}
            </div>

            {/* Question-5 */}
            <div className="questionAnswer">
              <div className="question" onClick={() => setOpen5(!open5)}>
                <p>Do you offer discounts to educational institutions ?</p>
                <div className="iconContainer">
                  <p>{open5 ? "-" : "+"}</p>
                </div>
              </div>
              {open5 && (
                <div className="answer" onClick={() => setOpen5(false)}>
                  <p>
                    Yes, we are happy to support educational institutions by
                    offering special discounts on our SaaS platform. Please
                    reach out to our sales team at sales@Milton.com with your
                    institution's details, and we will provide you with more
                    information on our exclusive educational pricing options.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faqs;
