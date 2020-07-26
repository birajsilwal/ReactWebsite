import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HeaderCss from "../css/Header.module.css";
import "../css/Header.css";

export default function TopHeader() {
  const a = {
    color: "black",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    padding: "1rem"
  };

  return (
    <div>
      <Navbar expand="md">
        <Navbar.Brand className={HeaderCss} href="#home">Biraj Silwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Link style={a} to="/">Home</Link>
          <Link style={a} to="/resume">Resume</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

