import React from "react"
import "./Bots.css"

import ProfileHeader from "../ProfileHeader/ProfileHeader"

function Bots() {
  return (
    <div className="bots">
      <ProfileHeader title="Bots" />
      <div className="bots__wrapper">
        <table className="bots_tableContainer">
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
