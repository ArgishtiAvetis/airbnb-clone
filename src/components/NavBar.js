import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RowContainer } from "./StyledContainers";
import logo from "../logo.svg";

const linkStyle = {
  flex: "1",
  padding: "1rem",
  textDecoration: "none"
};

const navLinks = [
  "No Time to Host?",
  "Become a Host",
  "Help",
  "Sign Up",
  "Log In"
];

const NavBar = () =>
  <RowContainer>
    <img
      style={{ flex: "1", justifyContent: "flex-start" }}
      src={logo}
      className="App-logo"
      alt="logo"
    />
    <input style={{ flex: "2" }} placeholder="Search Terms" />
    <Link style={linkStyle} to="/a">
      No Time to Host?
    </Link>
    <Link style={linkStyle} to="/aa">
      Become a Host
    </Link>
    <Link style={linkStyle} to="/a">
      Help
    </Link>
    <Link style={linkStyle} to="/aa">
      Sign Up
    </Link>
    <Link style={linkStyle} to="/a">
      Log In
    </Link>
  </RowContainer>;

export default NavBar;
