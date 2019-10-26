import React, { Component } from "react";
import axios from "axios";
import cookie from "js-cookie";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: 0 };
    this.login;
  }
  usernameChangeHandler(e) {
    this.setState({ username: e.target.value });
  }
  passwordChangeHandler(e) {
    this.setState({ password: e.target.value });
  }
  login() {
    const { username, password } = this.state;
    axios
      .post("http://http://95.216.86.208:3000/api/auth", { username, password })
      .then(({ data }) => {
        if (data == "unauthorized") {
          this.setState({ error: 1, username: "", password: "" });
          setTimeout(() => {
            this.setState({ error: 0 });
          }, 2000);
          return;
        }
        cookie.set("authtoken", data);
        return this.props.changeGaranty(1);
      });
  }
  render() {
    return (
      <div className="login-page w-100 d-flex align-items-center justify-content-center">
        <div className="w-50 h-50 login-container d-flex flex-column align-items-center justify-content-center">
          <input
            type="text"
            placeholder="user name"
            className="my-3 p-3"
            onChange={this.usernameChangeHandler.bind(this)}
            value={this.state.username}
          />
          <input
            type="password"
            placeholder="password"
            className="my-3 p-3"
            onChange={this.passwordChangeHandler.bind(this)}
            value={this.state.password}
          />
          <button
            className="btn btn-primary mx-2"
            onClick={this.login.bind(this)}
          >
            Login
          </button>
          <span
            className="text-danger my-3"
            style={{ opacity: this.state.error }}
          >
            username or password is wrong
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
