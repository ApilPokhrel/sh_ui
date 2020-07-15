import React, { Component } from "react";

class EmailVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="main-container" style={{ display: this.props.display ? "block" : "none" }}>
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
          <h1>Provide Email</h1>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={this.handleChange}
            name="email"
            id="email"
            required={true}
          />
          <button
            className="registerbtn"
            style={{ backgroundColor: "#333" }}
            type="submit"
            onClick={e => {
              this.props.handleVerify(e, this.state.email);
            }}
          >
            Check
          </button>
        </div>
      </div>
    );
  }
}

export default EmailVerify;
