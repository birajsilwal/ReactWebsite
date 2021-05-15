import React from 'react'
import "../css/IconBarHeader.css";
import { css } from '@emotion/css';
import { TiHome } from 'react-icons/ti';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function IconBarHeader() {

  const iconBarUlContainer = css`
    background: white;
    position: sticky;
    top: 0;
    z-index: 111;

    /* for pc */
    @media screen and (min-width: 575px) {
      display: none;
    }
  `

  const iconBarUl = css`
    list-style: none;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  `
  const aa = css`
    color: black;
    text-decoration: none;
    margin: 0;
    &::active {
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
      border-bottom: 2px solid #007bff;
    }
  `
  const iconBarP = css`
    font-size: 0.7rem;
    padding: 0;
    margin: 0;

    &:hover {
      color: #007bff;
    }
  `

  return (
    <div className={iconBarUlContainer}>
      <ul className={iconBarUl}>
        
        <Link className={aa} to="/">
          <li> <TiHome size={24}/> 
            <br></br>
            <p className={iconBarP}>Home</p> 
          </li>
        </Link>

        <Link className={aa} to="/resume">
          <li> <img src="https://img.icons8.com/ios-filled/96/000000/open-resume.png" width="25em" alt=""/>
            <br></br>
            <p className={iconBarP}>Resume</p>
          </li>
        </Link>  

        <Link className={aa} to="/tutoring">
          <li> <FaChalkboardTeacher size={24} /> 
            <br></br>
            <p className={iconBarP}>Tutoring</p> 
          </li>
        </Link>

        <Nav.Link className={aa} href="https://github.com/birajsilwal" target="_blank"><FiGithub size={24} />
          <p className={iconBarP}>Github</p>
        </Nav.Link>

        <Nav.Link className={aa} href="https://www.linkedin.com/in/birajsilwal/" target="_blank"><FaLinkedinIn size={24}/>
          <p className={iconBarP}>LinkedIn</p>
        </Nav.Link>

        <Link className={aa} to="/more">
          <li> <GoThreeBars size={24}/> 
            <br></br>
            <p className={iconBarP}>More</p>
          </li>
        </Link>

      </ul>
      <hr></hr>
    </div>
          
  )
}
