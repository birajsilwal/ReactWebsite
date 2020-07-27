import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCss from "../css/Home.module.css";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div>
      <div>

        {/* top banner with picture */}
        <div class="banner container-fluid">
          <h1 class="banner-title">Hi! I'm Biraj.</h1>
          <h4 className={HomeCss.bannerCaption}>Computer Science + Business Management @ UNM '21</h4>
        </div>

        {/* main containers in the home page */}
        <main>   
          <AboutMe />
          <Experience />
          <Portfolio />
        </main>

      </div>
    </div>
  )
}
