import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import success from "../utils/Success.png";
import "./HomePage.css";

const SuccessPage = () => {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Link
        style={{ paddingTop: "45px", marginTop: "50px", marginBottom: "-50px" }}
      >
        <img src={success} alt="success-img" height={200} id="hero-image" />
      </Link>
      <h1 id="success-header">SUCCESS</h1>
      <p id="success-body">
        Your vehicle has been registered. Enjoy the service!
      </p>
      <a
        href="/"
        style={{
          backgroundColor: "#A02064",
          color: "#fff",
          textDecoration: "none",
          padding: "15px",
          marginTop: "20px",
          fontWeight: "700",
          borderRadius: "5px",
        }}
      >
        HOME
      </a>
    </Stack>
  );
};

export default SuccessPage;
