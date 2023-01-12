import React from "react"
import "./Bots.css"
import NewBotBtn from "../NewBotBtn/NewBotBtn"

function Bots() {
  return (
    <div className="bots">
      <div className="bots__header">
        Bots <NewBotBtn />
      </div>
      <div className="bots__wrapper">
        <table cellspacing="0">
          <tr>
            <th className="bots__table--header">ID</th>
            <th className="bots__table--header">Name</th>
            <th className="bots__table--header">Status</th>
            <th className="bots__table--header">Started</th>
            <th className="bots__table--header">Exchange</th>
            <th className="bots__table--header">Pair</th>
            <th className="bots__table--header">Strategy</th>
            <th className="bots__table--header">Profit</th>
          </tr>
        </table>
        <div className="bots__table--content">You dont have any bots yet</div>
      </div>
    </div>
  )
}

export default Bots
