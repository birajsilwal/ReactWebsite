import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { css } from 'emotion';

export default function NewHeader() {

  const aa = css`
    position: relative;
    color: black;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 1rem;
    &:hover {
      text-decoration: none;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1); 
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #1a73e8;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.5s ease-in-out;
    }
  `

  return (
    <Navbar expand="sm">
      <Navbar.Brand href="#home">Biraj Silwal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Link className={aa} to="/">Home</Link>
        <Link className={aa} to="/resume">Resume</Link>
        <Link className={aa} to="/tutoring">Tutoring</Link>
        <Nav.Link className={aa} href="https://github.com/birajsilwal" target="_blank"><FiGithub /></Nav.Link>
        <Nav.Link className={aa} href="https://www.linkedin.com/in/birajsilwal/" target="_blank"><FaLinkedinIn /></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

