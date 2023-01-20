import React from "react"
import "./DashboardStatistics.css"
import happyBot from "../../../../assets/pictures/smile.png"

function DashboardStatistics() {
  return (
    <div className="dashboardStatistics__bots">
      <p className="dashboardStatistics__total">
        <img
          src={happyBot}
          alt="happy"
          className="dashboardStatistics__botEmotion"
        />
        Total Bots: 228
      </p>
      <p className="dashboardStatistics__running">
        <img
          src={happyBot}
          alt="happy"
          className="dashboardStatistics__botEmotion"
        />
        Bots running: 26
      </p>
      <p className="dashboardStatistics__stopped">
        <img
          src={happyBot}
          alt="happy"
          className="dashboardStatistics__botEmotion"
        />
        Bots stopped: 202
      </p>
    </div>
  )
}

export default DashboardStatistics
