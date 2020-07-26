import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { Route, Link } from "react-router-dom";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
