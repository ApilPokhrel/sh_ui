import React, { Component } from "react";
import Call from "./Call";
import Router from "next/router";
import Link from "next/link";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    Call.register(this.state)
      .then(d => {
        let { data } = d;
        window.localStorage.setItem("token", data.accessToken);
        Router.push("/verification");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  render() {
    return (
      <div className="main-container">
        <style jsx>
          {`
            .main-container {
              padding: 30px 500px;
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
            /* Overwrite default styles of hr */
            hr {
              border: 1px solid #f1f1f1;
              margin-bottom: 25px;
            }
            /* Set a style for the submit button */
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
            /* Add a blue text color to links */
            a {
              color: dodgerblue;
            }
            /* Set a grey background color and center the text of the "sign in" section */
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
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <hr />
            <label for="email">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Enter Name"
              name="name"
              id="name"
              required
            />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <label for="phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Enter Phone"
              name="phone"
              id="phone"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              onChange={this.handleChange}
              placeholder="Enter Password"
              name="password"
              id="password"
              required
            />

            <hr />
            <button type="submit" style={{ backgroundColor: "#333" }} className="registerbtn">
              Register
            </button>
          </div>
          <div className="container signin">
            <p>
              Already have an account? <Link href="/login">Log In</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
