import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceCss from "../css/Experience.module.css";
import { BsBriefcase } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BsCalendar } from 'react-icons/bs';


export default function Experience() {
  return (
    <div>   
      {/* EXPERIENCE */}
      <section className= {`${Experience.bgLight1} py-5`}>
            <div class="container">
              <h2>EXPERIENCE</h2>
              <br></br>
              <div class="row justify-content-center text-left">

                {/* Lab Assistant */}
                <div class="col-md-7 col-sm-8">
                  <h4 class={ExperienceCss.h4}>Lab Assistant</h4>
                  <h5 class="exp-comp"><BsBriefcase /> UNM Moses Biological Computation Lab  </h5>
                  <ul class="exp-ul">
                    <li>Collaborating on "Swarmathon: The Next Generation" project - assist in creation of Convolutional Neural Network based image classifier using Tensorflow</li>
                    <li>Deployed trained models into the robot and reported the outcomes</li>
                    <li>Assisted on creating and manipulating data sets of thousands of images</li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-4 pb-5">
                  <div class="exp-info">
                    <div class="exp-loc"><GoLocation/> Albuquerque, NM</div>
                    <div class="exp-date"><BsCalendar /> Oct 2019 - Present</div>
                  </div>
                </div>



                {/* <!-- IT Assistant --> */}
                <div class="col-md-7 col-sm-8">
                  <h4 class={ExperienceCss.h4}>IT Assistant</h4>
                  <h5 class="exp-comp"><BsBriefcase /> The University of New Mexico </h5>
                  <ul class="exp-ul">
                    <li>Used QUERY and other Google Sheets formulas connecting multiple sheets to manage student-related data of 60-80 students</li>
                    <li>Designed User Interface (UI) of student profile dashboard by creating different charts in Google Sheets to track student's academic progress  </li>
                    <li>Enhanced User Experience (UX) by redesigning database and successfully transferring entire data to newly designed database</li>
                    <li>Responsible for creating and updating content of the University of New Mexico (UNM) High School Equivalency Program (HEP) and UNM College Assistance Migrant Program (CAMP) websites.</li>
                    <li>Ensured users are highly satisfied, met and exceeded expectations</li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-4  pb-5">
                  <div class="exp-info">
                    <div class="exp-loc"><GoLocation/> Albuquerque, NM</div>
                    <div class="exp-date"><BsCalendar /> May 2019 - Present</div>
                  </div>
                </div>


                {/* <!-- Research Assistant at SAU --> */}
                <div class="col-md-7 col-sm-8">
                  <h4 class={ExperienceCss.h4}>Research Assistant</h4>
                  <h5 class="exp-comp"><BsBriefcase /> St. Ambrose University </h5>
                  <ul class="exp-ul">
                    <li>Assisted Dr. Robert Mitchell with improving performance and precision of the calculation to find the distance of supernovae in other galaxies using Expanding Photosphere Method (EPM) while processing the spectroscopic data into MATLAB code</li>
                    <li>Facilitated by creating new programs and improving existing programs in MATLAB to increase precision for calculating wavelengths of different elements</li>
                    <li>Performed debugging/troubleshooting of code to ensure it delivers expected results when plotting data</li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-4  pb-5">
                  <div class="exp-info">
                    <div class="exp-loc"><GoLocation/> Davenport, IA</div>
                    <div class="exp-date"><BsCalendar /> July - Aug 2018</div>
                  </div>
                </div>

                {/* <!-- Mentor --> */}
                <div class="col-md-7 col-sm-8">
                  <h4 class={ExperienceCss.h4}>Mentor</h4>
                  <h5 class="exp-comp"><BsBriefcase /> Alcoa Learning Center </h5>
                  <ul class="exp-ul">
                    <li>Worked closely with senior mentors and students to facilitate the designing and construction process of the robot</li>
                    <li>Used C programming language to control the robot via joystick and successfully made it autonomous to traverse 4.5 ft. carrying, lifting, and dropping a box into 5 ft. high plate</li>
                    <li>Optimized parts of the robot efficiently to build it under the budget, weight, and size limit to meet the standard of FIRST ROBOTICS competition</li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-4  pb-5">
                  <div class="exp-info">
                    <div class="exp-loc"><GoLocation/> Bettendorf, IA</div>
                    <div class="exp-date"><BsCalendar /> Feb - Dec 2018</div>
                  </div>
                </div>


                {/* <!-- Robotics Club --> */}
                <div class="col-md-7 col-sm-8">
                  <h4 class={ExperienceCss.h4}>President</h4>
                  <h5 class="exp-comp"><BsBriefcase /> GoldenGate Robotics Club </h5>
                  <ul class="exp-ul">
                    <li>Responsible for holding meetings, delegating tasks, fundraising, financial management, and educational outreach</li>
                    <li>Led a team of up to 7 students to create four science projects: Solar Plane Assuring Safety Aviation (SPASA), Garbage Power Plant - to generate electricity, Concentrated Solar Thermal Power Plant - to generate electricity, Line Following Robot - programmed using C</li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-4  pb-5">
                  <div class="exp-info">
                    <div class="exp-loc"><GoLocation/> Kathmandu, Nepal</div>
                    <div class="exp-date"><BsCalendar /> Aug 2013 - May 2015</div>
                  </div>
                </div>

                {/* <!-- Comment about job --> */}
                  {/* <div class="col-md-7 col-sm-8">
                    <h4 class={ExperienceCss.h4}>Job Title</h4>
                    <h5 class="exp-comp"><BsBriefcase /> Employer </h5>
                    <ul class="exp-ul">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-sm-4">
                    <div class="exp-info">
                      <div class="exp-loc"><GoLocation/>Location</div>
                      <div class="exp-date"><BsCalendar /> Date</div>
                    </div>
                  </div> */}

              </div>
            </div>
      </section>
    </div>
  )
}
