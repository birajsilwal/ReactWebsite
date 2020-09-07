import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";
import GithubStat from "../components/GithubStat";

export default function Home() {
  return (
    <div>
      <div>

        <Banner />

        {/* main containers in the home page */}
        <main>   
          <AboutMe />
          <Experience />
          <Portfolio />
          <GithubStat />
          <h3>More coming soon...</h3>
        </main>

      </div>
    </div>
  )
}
