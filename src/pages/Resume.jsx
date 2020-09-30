import React from 'react';
import { css } from 'emotion';

export default function Resume() {

  const pInResume = css`
    margin: 0;
  `

  return (
    <div>
      <h3>Biraj Silwal's Resume</h3>
      <p className={pInResume}>Last updated on 9th Sep 2020.</p>
      <p className={ `${pInResume} pb-5`}>You can download my resume <a href="https://birajsilwal.github.io/static/media/Resume%20-%20Biraj%20Silwal.fb648f60.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>

  )
}
