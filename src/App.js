import React from "react";
import NavBar from "./components/navBar";
import {Route, Switch, Redirect} from "react-router-dom";
import GlobalStatistics from "./components/globalStatistics";
import AllCountries from "./components/allCountries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/globalStats" component={GlobalStatistics}></Route>
      <Route path="/allCountries" component={AllCountries}></Route>
    </div>
  );
}

export default App;
