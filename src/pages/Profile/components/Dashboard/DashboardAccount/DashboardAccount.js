import React from "react"
import "./DashboardAccount.css"
import { VscAccount } from "react-icons/vsc"
import { useModalContext } from "hooks/contextHooks/useModalContext/useModalContext"

function DashboardAccount() {
  const { setShowLogoutModal } = useModalContext()

  function logoutClickHandler() {
    setShowLogoutModal(true)
  }

  return (
    <div className="dashboardAccount__person">
      <div className="dashboardAccount__name">
        <VscAccount />
        <p>Name: Vasya Bulkin</p>
      </div>
      <p className="dashboardAccount__balance">Your balance: 2.228.228$</p>
      <button className="dashboardAccount__btn" onClick={logoutClickHandler}>
        Log Out
      </button>
    </div>
  )
}

export default DashboardAccount
