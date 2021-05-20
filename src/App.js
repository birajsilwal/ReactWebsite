import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Tutoring from "./pages/Tutoring";
import More from "./pages/More";
import test from "./pages/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import IconBarHeader from "./components/IconBarHeader";
import ReactGA from "react-ga";

function App() {

  ReactGA.initialize('UA-142536391-1', {
    
    gaOptions: {
      siteSpeedSampleRate: 100
  }
  });
  ReactGA.pageview("/HomePage")

  return (
    <Router>  
      <div className="App">
        <Header />
        <IconBarHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/tutoring" component={Tutoring} />
          <Route exact path="/more" component={More} />
          <Route exact path="/test" component={test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
