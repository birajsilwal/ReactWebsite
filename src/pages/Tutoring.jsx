import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { css } from 'emotion';

export default function Tutoring() {

  const meetingTimeButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const courses = css`
    width: 65%;
    margin: 0 auto;

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
      width: 100%;
    }
`

  return (
    <div class="container">
      <h3 class="pt-2">My tutoring hours @ UNM ESS </h3>
      <h4 class="pb-4">Fall 2020</h4>
      

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong> Mon:</strong> 11am - 2pm</h5>
        <Button href="https://unm.zoom.us/s/99583830622" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong> Wed:</strong> 11am - 3pm</h5>
        <Button href="https://unm.zoom.us/s/99583830622" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong>Fri: </strong> 11am - 2pm &nbsp; </h5>
        <Button href="https://unm.zoom.us/s/99583830622" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <p className={courses}><strong>Courses: </strong> CS 152L, CS 251L, CS 261, CS 241L, CS 351L, CS 361L, CS 362L, MATH 162, MATH 163,
      MATH 314/321, STAT 345, PHYC 160, PHYC 161 </p>

      <p>For more information: <a href="https://ess.unm.edu/services/tutoring/fall-2020-tutoring-schedule.pdf" target="_blank" rel="noopener noreferrer">
        https://ess.unm.edu/services/tutoring/fall-2020-tutoring-schedule.pdf</a> 
      </p>
            
    </div>
  )
}
