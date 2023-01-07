import "./Profile.css"
import { useState } from "react"
import Dashboard from ".../Profileitems/Dashbord/ProfilComponents.js"

function Profile() {
  const [activeProfile, setActiveProfile] = useState()

  const profileItems = [
    { id: 1, value: "Dashboard" },
    { id: 2, value: "Marketplace" },
    { id: 3, value: "Bot Quick Start" },
    { id: 4, value: "Bots" },
    { id: 5, value: "Trade Statistics" },
    { id: 6, value: "Wallets" },
    { id: 7, value: "API Keys" },
    { id: 8, value: "Tools" },
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
              <p className="profile__paragraf">{item.value}</p>
            </li>
          </div>
        ))}
      </ul>
      <div className="profile__main">
        {activeProfile === 1 && Dashboard}
        {activeProfile === 2 && "Marketplace"}
        {activeProfile === 3 && "Bot Quick Start"}
        {activeProfile === 4 && "Bots"}
        {activeProfile === 5 && "Trade Statistics"}
        {activeProfile === 6 && "Wallets"}
        {activeProfile === 7 && "API Keys"}
        {activeProfile === 8 && "Tools"}
      </div>
    </div>
  )
}

export default Profile
