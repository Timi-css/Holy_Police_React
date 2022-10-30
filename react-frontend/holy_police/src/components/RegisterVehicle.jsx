import React, { Component } from "react";
import { Stack } from "@mui/system";
import "./RegisterVehicle.css";

export default class RegisterVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      Phone: "",
      NumberPlate: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { FullName, Phone, NumberPlate } = this.state;

    fetch("http://localhost:5000/api/vehicles/registers", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        FullName,
        Phone,
        NumberPlate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "vehicleRegister");
        if (data === "") {
          alert("Fields cannot be empty");
        }
        if (data.status === "ok") {
          window.location.href = "/successpage";
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
          <h1>Register Your Vehicle</h1>
          <input
            id="registration-form"
            type="text"
            placeholder="Full Name"
            onChange={(e) => this.setState({ FullName: e.target.value })}
          />
          <input
            id="registration-form"
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => this.setState({ Phone: e.target.value })}
          />
          <input
            id="registration-form"
            type="text"
            placeholder="Number Plate"
            onChange={(e) => this.setState({ NumberPlate: e.target.value })}
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
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            SUBMIT
          </button>
        </form>
      </Stack>
    );
  }
}
