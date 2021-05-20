import React from 'react';
import HomeCss from "../css/Home.module.css";
import profilePic from "../static/profilePic.png";


export default function AboutMe() {
  return (
    <div>
      <section className= {`${HomeCss.bgDark1} py-5`} > 
        <div class="container">
          <h2 class="text-center text-uppercase text-white font-light">About Me</h2>
          <br></br>
          <div class="row justify-content-center align-items-center">
            <div class="col-xl-2 col-md-3 col-sm-4">
              <img className={HomeCss.profilePicture1} src={profilePic} alt="" width="100%"></img>
            </div>
            <div class="col-md-6 col-sm-8">
              <p className={`${HomeCss.pLight1} text-left`}>
                Hi! I'm a senior studying computer science and economics at the University of New Mexico. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
