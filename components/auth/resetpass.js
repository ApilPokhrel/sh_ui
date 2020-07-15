import React, { Component } from "react";
import Router from "next/router";
import Call from "./Call";
import Email from "./email";
import Reset from "./reset";

class ResetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      is_email: true,
      is_reset: false
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset = (e, code, password) => {
    e.preventDefault();
    Call.reset({ code, password, email: this.state.email })
      .then(d => {
        let { data } = d;
        //go to Home
        if (data) Router.push("/");
        else alert("Try Again Later!");
      })
      .catch(e => {
        if (e.status == 401) {
          Router.push("/login");
        }
        console.log(e);

        if (e.response) alert(e.response.data.message || "Try Again");
        else alert("Try Again Later!");
      });
  };

  handleEmail = (e, email) => {
    e.preventDefault();
    Call.sendCodeUnverified(email)
      .then(d => {
        let { data } = d;
        if (data) {
          this.setState({ email, is_email: false, is_reset: true });
          alert("Code sent!");
        } else {
          alert("No user found");
        }
      })
      .catch(e => {
        alert("Try Again Later");
      });
  };

  render() {
    return (
      <div className="super-container">
        <Email display={this.state.is_email} handleVerify={this.handleEmail} />
        {this.state.is_reset ? (
          <Reset display={this.state.is_reset} handleReset={this.handleReset} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ResetPass;
