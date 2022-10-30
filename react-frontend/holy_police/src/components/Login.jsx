import React, { Component } from "react";
import { Stack } from "@mui/system";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (!username || !password) {
          alert("Login details incorrect");
        }
        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/vehiclelist";
        }
      });
  }

  render() {
    return (
      <Stack
        direction="column"
        mt={10}
        p={2}
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={this.handleSubmit}>
          <h1>Admin Login</h1>
          <input
            id="registration-form"
            type="text"
            placeholder="Username"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            id="registration-form"
            placeholder="Password"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button
            style={{
              backgroundColor: "#A02064",
              color: "#fff",
              textDecoration: "none",
              padding: "15px",
              marginTop: "20px",
              fontWeight: "700",
              borderRadius: "5px",
              boxShadow: "none",
              outline: "none",
              border: "none",
              width: "120px",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
        </form>
      </Stack>
    );
  }
}
