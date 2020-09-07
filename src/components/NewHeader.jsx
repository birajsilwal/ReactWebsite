import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { css } from 'emotion';

export default function TopHeader() {

  const aa = css`
    color: black;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
  `

  return (
    <div>
      
      <Navbar expand="sm">
        <Navbar.Brand href="#home">Biraj Silwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Link className={aa} to="/">Home</Link>
          <Link className={aa} to="/resume">Resume</Link>
          <Nav.Link className={aa} href="https://github.com/birajsilwal" target="_blank"><FiGithub /></Nav.Link>
          <Nav.Link className={aa} href="https://www.linkedin.com/in/birajsilwal/" target="_blank"><FaLinkedinIn /></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

