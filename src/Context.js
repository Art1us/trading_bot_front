import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const BOT_OPTIONS = {
    mode: ["Test Mode", "Start Mode"],
    strategy: ["Standard", "Advanced", "Preliminary", "Intermediate"],
  };
  const EXCHANGES_LIST = "/exchange_list";

  const [exchangesList, setExchangesList] = useState([
    { id: 1, name: "Binance" },
    { id: 2, name: "Kraken" },
    { id: 3, name: "FTX" },
  ]);
  const [userExchanges, setUserExchanges] = useState([]);
  const [selectedBotSettings, setSelectedBotSettings] = useState({
    mode: "",
    date: { from: "", to: "" },
    strategy: "",
  });

  useEffect(() => {
    async function getExchangesList() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}${EXCHANGES_LIST}`
        );

        if (response.status !== 200) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        setExchangesList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getExchangesList();
  }, []);

  return (
    <Context.Provider
      value={{
        exchangesList,
        userExchanges,
        setUserExchanges,
        selectedBotSettings,
        setSelectedBotSettings,
        BOT_OPTIONS,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
