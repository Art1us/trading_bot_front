import React from "react"
import "./TestModeTables.css"

function TestModeTables() {
  return (
    <div className="testModeTables">
      <div className="testModeTables__container">
        <div className="testModeTables__header">
          <div className="testModeTables__header--left">
            <h4>Start</h4>
            <p>228$</p>
          </div>
          <div className="testModeTables__header--left">
            <h4>Finish</h4>
            <p>322$</p>
          </div>
        </div>
        <div className="testModeTables__finishedDeals">
          <h3>Finished Deals Table</h3>
          <table className="testModeTables__tableContainer">
            <thead>
              <tr>
                <th>N</th>
                <th>Start</th>
                <th>Finish</th>
                <th>Trade Pair</th>
                <th>Holding Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N</td>
                <td>Start</td>
                <td>Current</td>
                <td>Trade Pair</td>
                <td>Holding Time</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="testModeTables__currentDeals">
          <h3>Current Deals Table</h3>
          <table className="testModeTables__tableContainer">
            <thead>
              <tr>
                <th>N</th>
                <th>Start</th>
                <th>Finish</th>
                <th>Trade Pair</th>
                <th>Holding Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N</td>
                <td>Start</td>
                <td>Finish</td>
                <td>Trade Pair</td>
                <td>Holding Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TestModeTables
