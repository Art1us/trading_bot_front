import React from "react";
import './BotTable.css'

const myData = [
  {
    name: "London",
    temperature: "50F",
  },
  {
    name: "New York",
    temperature: "33F",
  },
  {
    name: "San Francisco",
    temperature: "44F",
  },
  {
    name: "Munich",
    temperature: "66F",
  },
];

function Row(props) {
  const { name, temperature } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{temperature}</td>
    </tr>
  );
}

function BotTable(props) {
  return (
    <div className="botTable">
      <thead>
        <tr>
          <th>The table header</th>
          <th>The table header</th>
        </tr>
      </thead>
      <table>
        <tbody>
          {myData.map((row, index) => (
            <Row key={index} name={row.name} temperature={row.temperature} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BotTable;
