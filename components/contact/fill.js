import "../../styles/contact.module.css";
import Call from "./Call";
import { useState } from "react";
import Router from "next/router";

export default function fill(props) {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    Call.add({ from, message })
      .then(d => {
        alert("Sent Successfully");
        Router.push("/");
      })
      .catch(e => {
        alert("Try Again");
      });
  };

  let handleChange = e => {
    if (e.target.name == "from") {
      setFrom(e.target.value);
    }

    if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };
  return (
    <section className="contact-bg">
      <div className="contact-container">
        <div className="contact-flex">
          <div className="contact-item one col-6">
            <form onSubmit={handleSubmit}>
              <h4>Send Us A Message</h4>

              <div className="email">
                <input
                  type="text"
                  name="from"
                  onChange={handleChange}
                  placeholder="Email or Phone"
                />
                {/* <img src="images/icons/icon-email.png" alt="ICON" /> */}
              </div>

              <div className="message">
                <textarea
                  name="message"
                  onChange={handleChange}
                  placeholder="How Can We Help?"
                ></textarea>
              </div>

              <button className="submit">Submit</button>
            </form>
          </div>

          <div className="contact-item two col-6" style={{ paddingTop: "60px" }}>
            <div className="contact-info-item">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-map-marker"></span>
              </span>

              <div className="title-container">
                <span className="mtext-110 cl2">Address</span>

                <p className="stext-115 cl6 size-213 p-t-18">
                  SH Udhyog Center 8th floor, 379 Hudson St, New York, NY 10018 US
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-phone-handset"></span>
              </span>

              <div className="title-container">
                <span className="mtext-110 cl2">Lets Talk</span>

                <p className="stext-115 cl1 size-213 p-t-18">+977 081 540197</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-envelope"></span>
              </span>

              <div className="title-container">
                <span className="mtext-110 cl2">Sale Support</span>

                <p className="stext-115 cl1 size-213 p-t-18">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
