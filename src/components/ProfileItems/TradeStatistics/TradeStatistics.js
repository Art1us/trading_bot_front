import React from "react"
import "./TradeStatistics.css"
import ProfileHeader from "../ProfilesHeader/ProfileHeader"

function TradeStatistics() {
  return (
    <div className="tradeStatistics">
      <ProfileHeader title="Trade Statistics" />
      <div className="tradeStatistics__wrapper">
        <table cellspacing="0">
          <tr>
            <th className="tradeStatistics__table--header">ID</th>
            <th className="tradeStatistics__table--header">Name</th>
            <th className="tradeStatistics__table--header">Status</th>
            <th className="tradeStatistics__table--header">Started</th>
            <th className="tradeStatistics__table--header">Exchange</th>
            <th className="tradeStatistics__table--header">Pair</th>
            <th className="tradeStatistics__table--header">Strategy</th>
            <th className="tradeStatistics__table--header">Profit</th>
          </tr>
        </table>
        <div className="tradeStatistics__table--content">
          You dont have any bots yet
        </div>
      </div>
    </div>
  )
}

export default TradeStatistics
