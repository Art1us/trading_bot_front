import React from "react";
import "./BotTable.css";
import data from '../botInfoTestData'


function Row(props) {
  const { name, profit, height } = props;

  return (
    <tr className="botTable__row">
      <td className="botTable__cell">{name}</td>
      <td className="botTable__cell">{profit}</td>
      <td className="botTable__cell">{height}</td>
    </tr>
  );
}

function BotTable() {
  return (
    <table className="botTable">
      <thead>
        <tr>
          <th className="botTable__header">Name</th>
          <th className="botTable__header">Profit</th>
          <th className="botTable__header">Height</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Row
            key={index}
            name={row.name}
            profit={row.profit}
            height={row.height}
          />
        ))}
      </tbody>
    </table>
  );
}

export default BotTable;
