import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HeaderCss from "../css/Header.module.css";
import "../css/Header.css";

export default function TopHeader() {
  const a = {
    color: "black",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  };

  return (
    <div>
      <Navbar expand="md">
        <Navbar.Brand className={HeaderCss} href="#home">Biraj Silwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav.Link style={a} href="#home">Home</Nav.Link>
          <Nav.Link style={a} href="#link">Resume</Nav.Link>
          <Nav.Link style={a} href="#link">LinkedIn</Nav.Link>
          <Nav.Link style={a} href="#link">Github</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

