import React, { Component } from "react";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Input from "@material-ui/core/Input";
import "./Login.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      data: {},
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new Auth();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          data: res,
          submitted: true
        });
      })
      .catch(err => {
        alert("Please enter valid email or password");
      });
  }

  render() {
    if (this.state.submitted && this.Auth.loggedIn) {
      return <Dashboard data={this.state.data} />;
    }

    return (
      <div className="center">
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <h3>Log into your account</h3>
            <Input
              className="form-item"
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Input
              className="form-item"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button className="form-submit" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
