import React from 'react';
import resume from '../static/Resume - Biraj Silwal.pdf';
import { css } from 'emotion';

export default function Resume() {

  const pInResume = css`
    margin: 0;
  `

  return (
    <div>
      <h3>Biraj Silwal's Resume</h3>
      <p className={pInResume}>Last updated on 9th Sep 2020.</p>
      <p className={ `${pInResume} pb-5`}>You can also download my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</p>
      <embed src={resume} width="100%" height="900px" />

    </div>
  )
}
