import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCss from "../css/Home.module.css";
import "../css/Home.css";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";
import ro from "../static/robot2.png";

export default function Home() {
  return (
    <div>
      <div>

        {/* top banner with picture */}
        <div class="container-fluid">
          <div class="banner">
            <div class="row">
              <div class="col-lg-6">
                <img src={ro} alt=""></img>
              </div>
              <div class="col-lg-6">
                <div class="banner-content">
                  <h1 class="banner-title">Hi! I'm Biraj.</h1>
                  <h4 className={HomeCss.bannerCaption}>Computer Science + Business Management @ UNM '21</h4>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* main containers in the home page */}
        <main>   
          <AboutMe />
          <Experience />
          <Portfolio />
          <h3>More coming soon...</h3>
        </main>

      </div>
    </div>
  )
}
