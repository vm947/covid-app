import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Country Name</th>
        <th scope="col">Today's Cases</th>
        <th scope="col">Total Deaths</th>
        <th scope="col">Today's Deaths</th>
        <th scope="col">Case Per One Million</th>
      </tr>
    </thead>
  );
};

export default TableHead;
