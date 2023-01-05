import React, { useEffect, useState } from "react"
import Fetcher from "./api/Fetcher/Fetcher"

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
  const fetch = Fetcher()

  const [exchangesList, setExchangesList] = useState([])

  const [userExchanges, setUserExchanges] = useState([])
  const [selectedBotSettings, setSelectedBotSettings] = useState({
    mode: { id: "", name: "" },
    date: { from: "", to: "" },
    pair: { id: "", name: "" },
    strategy: { id: "", name: "" },
  })

  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("isDarkTheme"))
  )

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light")
    JSON.stringify(localStorage.setItem("isDarkTheme", isDarkTheme))
  }, [isDarkTheme])

  useEffect(() => {
    fetch.fetchExchanges(setExchangesList)
  }, [isDarkTheme])
  return (
    <Context.Provider
      value={{
        exchangesList,
        userExchanges,
        setUserExchanges,
        selectedBotSettings,
        setSelectedBotSettings,
        BOT_OPTIONS,
        isDarkTheme,
        setIsDarkTheme,
        setExchangesList,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
