import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { css } from '@emotion/css';

export default function Tutoring() {

  const meetingTimeButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const pengi = css`
    color: red;
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
      <h4 class="pt-2">My tutoring hours @ UNM ESS </h4>
      <h4 class="pb-4">Spring 2021</h4>
      
      <p><span className={ pengi }>Please Use the Penji App/Website to connect with tutors!</span> <a href="https://ess.unm.edu/services/tutoring/index.html" target="_blank" rel="noopener noreferrer">
        Click here for more info.</a> 
      </p>

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong> Mon:</strong> 1pm - 5pm</h5>
        <Button href="https://unm.zoom.us/s/96784208878" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong> Tue:</strong> 1pm - 5pm</h5>
        <Button href="https://unm.zoom.us/s/96784208878" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <div className={ meetingTimeButton }>
        <h5 class="pr-5"><strong>Sat: </strong> 4pm - 8pm &nbsp; </h5>
        <Button href="https://unm.zoom.us/s/96784208878" target="_blank" rel="noopener noreferrer" variant="dark">Join Zoom</Button>{' '}
      </div>
      <br></br>

      <p className={courses}><strong>Courses: </strong> CS 152L, CS 251L, CS 261, CS 241L, CS 351L, CS 361L, CS 362L, MATH 162, MATH 163,
      MATH 314/321, STAT 345, PHYC 160, PHYC 161 </p>

      {/* <p>For more information: <a href="https://ess.unm.edu/services/tutoring/fall-2020-tutoring-schedule.pdf" target="_blank" rel="noopener noreferrer">
        https://ess.unm.edu/services/tutoring/fall-2020-tutoring-schedule.pdf</a> 
      </p> */}
      <br></br>

      {/* <p>CS department tutoring hours: <a href="https://docs.google.com/spreadsheets/d/1tun91ofSxJ8jX8nq_MZ6vahPbcBZWS7e7FgwRjhd7OQ/edit#gid=0" target="_blank" rel="noopener noreferrer">
        Click here!</a> 
      </p> */}

      <p>UNM CAPS: <a href="https://caps.unm.edu/" target="_blank" rel="noopener noreferrer">
        Click here!</a> 
      </p>

      
            
    </div>
  )
}
