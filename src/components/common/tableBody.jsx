import React from "react";

const TableBody = ({info}) => {
  return (
    <tbody>
      {info.map((stat) => (
        <tr key={stat.country}>
          <th scope="row">{stat.country}</th>
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
