import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import lock from "../utils/Lock.png";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#A02064",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <img src={lock} alt="lock" height={30} />
      </Link>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        HOME
      </Link>
      <Link
        to="/login"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        VEHICLES
      </Link>
    </Stack>
  );
};

export default NavBar;
