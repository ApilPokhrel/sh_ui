import React, { Component } from "react";
import Call from "./Call";
import Router from "next/router";
import Link from "next/link";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    Call.login(this.state)
      .then(d => {
        let { data } = d;
        window.localStorage.setItem("token", data.accessToken);
        if (!data.is_verified) {
          Router.push("/verification");
        }
      })
      .catch(err => {
        alert(err.response.data.message || "Try Again");
      });
  };

  render() {
    return (
      <div className="main-container">
        <style jsx>{`
          htmlForm {
            border: 3px solid #f1f1f1;
          }

          .main-container {
            padding: 100px 500px;
          }

          input[type="text"],
          input[type="password"] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }

          button {
            background-color: #4caf50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }

          button:hover {
            opacity: 0.8;
          }

          .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
          }

          .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
          }

          img.avatar {
            width: 40%;
            border-radius: 50%;
          }

          .container {
            padding: 16px;
          }

          span.psw {
            float: right;
            padding-top: 16px;
          }

          /* Change styles htmlFor span and cancel button on extra small screens */
          @media screen and (max-width: 700px) {
            span.psw {
              display: block;
              float: none;
            }
            .cancelbtn {
              width: 100%;
            }

            .main-container {
              padding: 20px 10px;
            }
          }
        `}</style>

        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={this.handleChange}
              name="username"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
              name="password"
              required
            />

            <button style={{ backgroundColor: "#333" }} type="submit">
              Login
            </button>
          </div>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
            <Link href="/register" className="psw">
              <a href="#">Sign Up</a>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
