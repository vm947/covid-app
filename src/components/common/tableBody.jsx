import React from "react";

const TableBody = ({ info }) => {
  return (
    <tbody>
      {info.map((stat) => (
        <tr key={stat.country}>
          <th scope="row">
            <a href={`https://en.wikipedia.org/wiki/${stat.country}`} target = "_blank">
              {stat.country}
            </a>
          </th>
          <td>{stat.todayCases}</td>
          <td>{stat.deaths}</td>
          <td>{stat.todayDeaths}</td>
          <td>{stat.casesPerOneMillion}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
