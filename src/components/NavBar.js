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

  {
    title: "No Time to Host?",
    to: '/no-time-to-host' 
  },
  {
    title: "Become a Host",
    to: '/become-host' 
  },
  {
    title: "Help",
    to: '/help' 
  },
  {
    title: "Log In",
    to: '/login' 
  },
  {
    title: "Sign Up",
    to: '/signup' 
  }
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

    {navLinks.map((navItem, i) => 
      <Link style={linkStyle} to={navItem.to}>
        {navItem.title}
      </Link>
    )}

  </RowContainer>;

export default NavBar;
