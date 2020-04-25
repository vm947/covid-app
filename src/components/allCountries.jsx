import React, { Component } from "react";
import axios from "axios";
import SearchBox from "./common/searchBox";
import TableHead from './common/tableHead';
import TableBody from "./common/tableBody";

const countryData = "https://corona.lmao.ninja/v2/countries?sort=country";

class AllCountries extends Component {
  state = {
    allCountries: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: allCountries } = await axios.get(countryData);
    this.setState({ allCountries });
  }

  handSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  getData = () => {
    const { allCountries, searchQuery } = this.state;

    let filtered = allCountries;
    if (searchQuery) {
      filtered = allCountries.filter((c) =>
        c.country.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    }
    return filtered;
  };

  render() {
    const { searchQuery } = this.state;
    const info = this.getData();
    
    return (
      <div>
        <SearchBox onChange={this.handSearch} value={searchQuery} />
        <table className="table table-light mt-4">
          <TableHead />
          <TableBody info={info} />
        </table>
      </div>
    );
  }
}

export default AllCountries;
