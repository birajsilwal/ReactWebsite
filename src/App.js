import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Tutoring from "./pages/Tutoring";
import { Route } from "react-router-dom";
import NewHeader from "./components/NewHeader";
import ReactGA from "react-ga";

function App() {

  ReactGA.initialize('UA-142536391-1', {
    
    gaOptions: {
      siteSpeedSampleRate: 100
  }
  });
  ReactGA.pageview("/HomePage")

  return (
    <div className="App">
      <NewHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/tutoring" component={Tutoring} />
    </div>
  );
}

export default App;
