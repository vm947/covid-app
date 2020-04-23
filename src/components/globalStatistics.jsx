import React, { Component } from "react";
import WorldStatistic from "./common/worldStatistic";
import axios from "axios";
import "./comp.css";

const countries = "https://corona.lmao.ninja/v2/all";

class GlobalStatistics extends Component {
  state = {
    globalStatistics: [],
  };

  async componentDidMount() {
    const { data: globalStatistics } = await axios.get(countries);
    this.setState({ globalStatistics });
  }

  render() {
    const { globalStatistics } = this.state;

    return (
      <React.Fragment>
        <WorldStatistic
          cases={globalStatistics.cases}
          todayCases={globalStatistics.todayCases}
          todayDeaths = {globalStatistics.todayDeaths}
          recovered = {globalStatistics.recovered}
          casesPerOneMillion = {globalStatistics.casesPerOneMillion}
          deathsPerOneMillion ={globalStatistics.deathsPerOneMillion}
        />
      </React.Fragment>
    );
  }
}

export default GlobalStatistics;
