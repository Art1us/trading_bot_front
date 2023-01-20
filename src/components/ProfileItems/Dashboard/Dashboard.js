import React from "react"
import "./Dashboard.css"
import DashboardAccount from "./DashboardAccount/DashboardAccount"
import DashboardStatistics from "./DashboardStatistics/DashboardStatistics"
import DashboardTopBot from "./DashboardTopBot/DashboardTopBot"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import InfoCard from "../InfoCard/InfoCard"

function Dashboard() {
  return (
    <div className="dashboard">
      <ProfileHeader title="Dashboard" />
      <div className="dashboard__wrapper">
        <InfoCard title={"Your account"} content={<DashboardAccount />} />
        <InfoCard
          title={"Bot's statististics"}
          content={<DashboardStatistics />}
        />
        <InfoCard title={"Your top of Bots"} content={<DashboardTopBot />} />
      </div>
    </div>
  )
}

export default Dashboard
