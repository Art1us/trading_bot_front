import "./Profile.css"
import { useState } from "react"
import TradeStatistics from "./components/TradeStatistics/TradeStatistics"
import ProfileComponent from "./components/ProfileComponent/ProfileComponent"
import Bots from "./components/Bots/Bots"
import Dashboard from "./components/Dashboard/Dashboard"

function Profile() {
  const [activeProfile, setActiveProfile] = useState(1)

  const profileItems = [
    { id: 1, value: "Dashboard" },
    { id: 2, value: "Profile" },
    { id: 3, value: "Bots" },
    { id: 4, value: "Trade Statistics" },
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
              <p className="profileItem__paragraph">{item.value}</p>
            </li>
          </div>
        ))}
      </ul>
      <div className="profile__main">
        {activeProfile === 1 && <Dashboard />}
        {activeProfile === 2 && <ProfileComponent />}
        {activeProfile === 3 && <Bots />}
        {activeProfile === 4 && <TradeStatistics />}
      </div>
    </div>
  )
}

export default Profile
