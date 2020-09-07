import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function TopHeader() {
  const a = {
    color: "black",
    fontSize: "1.3rem",
    textTransform: "uppercase",
    padding: "0 1rem",
    textDecoration: "none"
  };

  return (
    <div>
      
      <Navbar expand="sm">
        <Navbar.Brand href="#home">Biraj Silwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Link style={a} to="/">Home</Link>
          <Link style={a} to="/resume">Resume</Link>
          <Nav.Link style={a} href="https://github.com/birajsilwal" target="_blank"><FiGithub /></Nav.Link>
          <Nav.Link style={a} href="https://www.linkedin.com/in/birajsilwal/" target="_blank"><FaLinkedinIn /></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

