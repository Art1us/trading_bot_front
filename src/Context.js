import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  const BOT_OPTIONS = {
    mode: [
      { id: 1, name: "Test Mode" },
      { id: 2, name: "Start Mode" },
    ],
    pair: [
      { id: 1, name: "BTC/USDT" },
      { id: 2, name: "ETH/USDT" },
      { id: 3, name: "BNB/USDT" },
    ],
    strategy: [
      { id: 1, name: "Standard" },
      { id: 2, name: "Advanced" },
      { id: 3, name: "Preliminary" },
      { id: 4, name: "Intermediate" },
    ],
  }

  const [userExchanges, setUserExchanges] = useState([])
  const [selectedBotSettings, setSelectedBotSettings] = useState({
    mode: { id: "", name: "" },
    date: { from: "", to: "" },
    pair: { id: "", name: "" },
    strategy: { id: "", name: "" },
    exchange: { id: "", name: "" },
  })

  return (
    <Context.Provider
      value={{
        userExchanges,
        setUserExchanges,
        selectedBotSettings,
        setSelectedBotSettings,
        BOT_OPTIONS,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
