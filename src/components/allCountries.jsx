import React, { Component } from "react";
import axios from "axios";

const countryData = "https://corona.lmao.ninja/v2/countries?sort=country";

class AllCountries extends Component {
  state = {
    allCountries: [],
  };

  async componentDidMount() {
    const { data: allCountries } = await axios.get(countryData);
    console.log(allCountries);
    this.setState({ allCountries });
  }

  render() {
    return (
      <table className="table table-light mt-4">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Today's Cases</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Today's Deaths</th>
            <th scope="col">Case Per One Million</th>
          </tr>
        </thead>
        <tbody>
          {this.state.allCountries.map((stat) => (
            <tr key={stat.country}>
              <th scope="row">{stat.country}</th>
              <td>{stat.todayCases}</td>
              <td>{stat.deaths}</td>
              <td>{stat.todayDeaths}</td>
              <td>{stat.casesPerOneMillion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default AllCountries;
