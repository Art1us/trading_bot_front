import "./Profile.css"
import { useState } from "react"

function Profile() {
  // const [burgerMenuActive, setBurgerMenuActive] = useState(false)

  const [activeState, setActiveState] = useState(false)

  const profileItems = [
    { id: 1, value: "Dashboard" },
    { id: 2, value: "Marketplace" },
    { id: 3, value: "Bot Quick Start" },
    { id: 4, value: " Bots" },
    { id: 5, value: "Trade Statistics" },
    { id: 6, value: "Wallets" },
    { id: 7, value: "API Keys" },
    { id: 8, value: "Tools" },
  ]
  //setActiveState(prev => !prev)

  return (
    <div className="profile__wrapper">
      <ul className="profile__list">
        {profileItems.map(item => (
          <div className="profile__it" key={item.id}>
            <li
              className={`profile__item ${
                activeState ? "profile__item--active" : ""
              }`}
            >
              <p
                className="profile__paragraf"
                onClick={() => setActiveState(!activeState)}
              >
                {item.value}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Profile
