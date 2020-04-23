import React from "react";

const WorldStatistic = ({
  cases,
  todayCases,
  todayDeaths,
  recovered,
  casesPerOneMillion,
  deathsPerOneMillion,
}) => {
  
  return (
    <div id="casesBody">
      <table id="tableBody">
        <tbody>
          <tr>
            <td>Total Cases: {cases}</td>
          </tr>
          <tr>
            <td>Todays Cases: {todayCases}</td>
          </tr>
          <tr>
            <td>Deaths Today: {todayDeaths}</td>
          </tr>
          <tr>
            <td>Number Recovered: {recovered}</td>
          </tr>
          <tr>
            <td>Cases Per Million: {casesPerOneMillion}</td>
          </tr>
          <tr>
            <td>Death Per Million: {deathsPerOneMillion}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorldStatistic;
