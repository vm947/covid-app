import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import GlobalStatistics from "./components/globalStatistics";
import AllCountries from "./components/allCountries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={AllCountries}></Route>
      <Route exact path="/globalStats" component={GlobalStatistics}></Route>
    </div>
  );
}

export default App;
