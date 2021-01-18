import React from 'react';
import Button from "react-bootstrap/Button";
import { css } from 'emotion';

export default function Resume() {

  const pInResume = css`
    margin: 0;
  `

  const downloadHere = css`
    font-size:1.5em;
    text-decoration: underline;
  `

  return (
    <div>
      <h3>Biraj Silwal's Resume</h3>
      <p className={pInResume}>Last updated on 10th Jan 2021.</p>
      <p className={ `${pInResume} pb-5`}>You can download my resume &nbsp;
        <a className={downloadHere} href="https://birajsilwal.github.io/static/media/Silwal_Biraj-Resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button variant="info">here</Button>{' '}
        </a>       
      </p>
    </div>
  )
}
