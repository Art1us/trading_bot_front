import React from "react"

import "./Dashboard.css"
import { InfoCard } from "pages/common/ui"

import DashboardAccount from "./DashboardAccount/DashboardAccount"
import DashboardStatistics from "./DashboardStatistics/DashboardStatistics"
import DashboardTopBot from "./DashboardTopBot/DashboardTopBot"
import ProfileHeader from "../ProfileHeader/ProfileHeader"

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
