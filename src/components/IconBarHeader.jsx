import React from 'react'
import "../css/IconBarHeader.css";
import { css } from 'emotion';
import { TiHome } from 'react-icons/ti';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { Link } from "react-router-dom";

export default function IconBarHeader() {

  const iconBarUlContainer = css`
    background: white;
    position: sticky;
    top: 0;
    z-index: 111;

    /* for pc */
    @media screen and (min-width: 900px) {
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
    &::active {
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
      border-bottom: 2px solid #007bff;
    }
  `

  return (
    <div className={iconBarUlContainer}>
      <ul className={iconBarUl}>
        
        <Link className={aa} to="/">
          <li> <TiHome size={24}/> 
            <br></br>
            Home 
          </li>
        </Link>

        <Link className={aa} to="/tutoring">
          <li> <FaChalkboardTeacher size={24} /> 
            <br></br>
            Tutoring 
          </li>
        </Link>

        <Link className={aa} to="/resume">
          <li> <GoThreeBars size={24}/> 
            <br></br>
            More 
          </li>
        </Link>

      </ul>
      <hr></hr>
    </div>
          
  )
}
