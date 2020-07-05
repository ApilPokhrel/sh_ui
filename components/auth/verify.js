import React, { Component } from "react";
import Router from "next/router";
import Call from "./Call";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      phone: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
    this.handleSendAgain = this.handleSendAgain.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleVerify = e => {
    e.preventDefault();
    Call.verify(this.state.code)
      .then(d => {
        let { data } = d;
        //go to Home
      })
      .catch(e => {
        if (e.status == 401) {
          Router.push("/login");
        }
        alert(e.message || "Try Again");
      });
  };
  handleSendAgain = e => {
    Call.sendCode()
      .then(d => {
        let { data } = d;
        Router.push("/");
      })
      .catch(e => {
        if (e.status == 401) {
          Router.push("/login");
        }
        alert(e.message || "Try Again Later");
      });
  };
  render() {
    return (
      <div className="main-container">
        <style jsx>
          {`
            .main-container {
              padding: 40px 500px;
            }
            .container {
              padding: 16px;
              background-color: white;
            }
            input[type="text"],
            input[type="password"] {
              width: 100%;
              padding: 15px;
              margin: 5px 0 22px 0;
              display: inline-block;
              border: none;
              background: #f1f1f1;
            }
            input[type="text"]:focus,
            input[type="password"]:focus {
              background-color: #ddd;
              outline: none;
            }
            hr {
              border: 1px solid #f1f1f1;
              margin-bottom: 25px;
            }
            .registerbtn {
              background-color: #4caf50;
              color: white;
              padding: 16px 20px;
              margin: 8px 0;
              border: none;
              cursor: pointer;
              width: 100%;
              opacity: 0.9;
            }
            .registerbtn:hover {
              opacity: 1;
            }
            a {
              color: dodgerblue;
            }
            .signin {
              background-color: #f1f1f1;
              text-align: center;
            }

            @media screen and (max-width: 700px) {
              .main-container {
                padding: 20px 10px;
              }
            }
          `}
        </style>
        <div className="container">
          <h1>Verify</h1>
          <hr />
          <label htmlFor="code">
            <b>Code</b>
          </label>
          <input
            type="text"
            placeholder="Enter Code"
            onChange={this.handleChange}
            name="code"
            id="code"
            required
          />
          <button
            className="registerbtn"
            style={{ backgroundColor: "#333" }}
            type="submit"
            onChange={this.handleVerify}
          >
            Verify
          </button>
          <button
            className="registerbtn"
            style={{ backgroundColor: "#333" }}
            type="submit"
            onClick={this.handleSendAgain}
          >
            Send Again
          </button>
        </div>
      </div>
    );
  }
}

export default Verify;
