import React, { useEffect, useState } from "react"

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
  const EXCHANGES_LIST = "/exchange_list"

  const [exchangesList, setExchangesList] = useState([
    { id: 1, name: "Binance" },
    { id: 2, name: "Kraken" },
    { id: 3, name: "FTX" },
  ])
  const [userExchanges, setUserExchanges] = useState([])
  const [selectedBotSettings, setSelectedBotSettings] = useState({
    mode: { id: "", name: "" },
    date: { from: "", to: "" },
    pair: { id: "", name: "" },
    strategy: { id: "", name: "" },
    exchange: { id: "", name: "" },
  })

  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("isDarkTheme"))
  )

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light")
    JSON.stringify(localStorage.setItem("isDarkTheme", isDarkTheme))
  }, [isDarkTheme])

  useEffect(() => {
    async function getExchangesList() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}${EXCHANGES_LIST}`
        )

        if (response.status !== 200) {
          const message = `An error has occured: ${response.status}`
          throw new Error(message)
        }

        const data = await response.json()
        setExchangesList(data)
      } catch (error) {
        console.log(error)
      }
    }
    getExchangesList()
  }, [])

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
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
