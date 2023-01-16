import React from "react"
import "./Dashboard.css"
import { VscAccount } from "react-icons/vsc"
import happyBot from "../../../assets/pictures/smile.png"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import { useModalContext } from "../../../hooks/contextHooks/useModalContext/useModalContext"
import InfoCard from "../InfoCard/InfoCard"

function Dashboard() {
  const { setShowLogoutModal } = useModalContext()

  function logoutClickHandler() {
    setShowLogoutModal(true)
  }

  return (
    <div className="dashboard">
      <ProfileHeader title="Dashboard" />
      <div className="dashboard__wrapper">
        <div className="dashboard__account">
          <h3 className="dashboard__account--title">Your Account</h3>
          <div className="dashboard__account--person">
            <div className="dashboard__account--name">
              <VscAccount />
              <p>Name: Vasya Bulkin</p>
            </div>
            <p className="dashboard__account--balance">
              Your balance: 2.228.228$
            </p>
            <button
              className="dashboard__account--btn"
              onClick={logoutClickHandler}
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="dashboard__botsStatistics">
          <h3 className="dashboard__botsStatistics--title">Bot's Statistics</h3>
          <div className="dashboard__botStatistics--bots">
            <p className="dashboard__botsStatistics--total">
              <img
                src={happyBot}
                alt="happy"
                className="dashboard__botEmotion"
              />
              Total Bots: 228
            </p>
            <p className="dashboard__botsStatistics--running">
              <img
                src={happyBot}
                alt="happy"
                className="dashboard__botEmotion"
              />
              Bots running: 26
            </p>
            <p className="dashboard__botsStatistics--stopped">
              <img
                src={happyBot}
                alt="happy"
                className="dashboard__botEmotion"
              />
              Bots stopped: 202
            </p>
          </div>
        </div>
        <div className="dashboard__topBot">
          <h3 className="dashboard__topBot--title">Your top</h3>
          <div className="dashboard__topBot--content">
            <div className="dashboard__topBot--firstBot">
              <p className="dashboard__topBot--nameBot">Name: C-3PO</p>
              <p className="dashboard__topBot--time">Time:228 hour</p>
              <p className="dashboard__topBot--exchange">Binance</p>
              <p className="dashboard__topBot--profit">Profit: 123$</p>
            </div>
            <div className="dashboard__topBot--secondBot">
              <p className="dashboard__topBot--nameBot">Name: R-2D2</p>
              <p className="dashboard__topBot--time">Time:332 hour</p>
              <p className="dashboard__topBot--exchange">Coinbase</p>
              <p className="dashboard__topBot--profit">Profit: 228$</p>
            </div>
          </div>
        </div>
        <InfoCard title={"Hui"} content={<div>Pizda</div>} />
      </div>
    </div>
  )
}

export default Dashboard
