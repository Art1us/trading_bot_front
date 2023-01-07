import "./Profile.css"
import { useState } from "react"
import Dashboard from "../../components/ProfileItems/TradeStatistics/TradeStatistic"
import ProfileComponent from "../../components/ProfileItems/ProfileComponent/ProfileComponent"
import Boots from "../../components/ProfileItems/Bots/Bots"
import Trade from "../../components/ProfileItems/Dashboard/Dashboard"

function Profile() {
  const [activeProfile, setActiveProfile] = useState()

  const profileItems = [
    { id: 1, value: "Dashboard" },
    { id: 2, value: "Profile" },
    { id: 3, value: "Bots" },
    { id: 4, value: "Trade Statistic" },
  ]

  return (
    <div className="profile__wrapper">
      <ul className="profile__list">
        {profileItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveProfile(item.id)}
            className={
              activeProfile === item.id
                ? "profile__item--active"
                : "profile__item"
            }
          >
            <li>
              <div className="profileItem__paragraph">{item.value}</div>
            </li>
          </div>
        ))}
      </ul>
      <div className="profile__main">
        {activeProfile === 1 && <Dashboard />}
        {activeProfile === 2 && <ProfileComponent />}
        {activeProfile === 3 && <Boots />}
        {activeProfile === 4 && <Trade />}
      </div>
    </div>
  )
}

export default Profile
