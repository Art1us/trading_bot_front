import React from "react"
import "./DashboardTopBot.css"

function DashboardTopBot() {
  return (
    <div className="dashboardTopBot--content">
      <div className="dashboardTopBot--firstBot">
        <p className="dashboardTopBot--nameBot">Name: C-3PO</p>
        <p className="dashboardTopBot--time">Time:228 hour</p>
        <p className="dashboardTopBot--exchange">Binance</p>
        <p className="dashboardTopBot--profit">Profit: 123$</p>
      </div>
      <div className="dashboardTopBot--secondBot">
        <p className="dashboardTopBot--nameBot">Name: R-2D2</p>
        <p className="dashboardTopBot--time">Time:332 hour</p>
        <p className="dashboardTopBot--exchange">Coinbase</p>
        <p className="dashboardTopBot--profit">Profit: 228$</p>
      </div>
    </div>
  )
}

export default DashboardTopBot
