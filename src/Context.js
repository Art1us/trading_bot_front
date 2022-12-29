import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const EXCHANGES_LIST = "/exchange_list";

  const [exchangesList, setExchangesList] = useState([]);
  const [strategiesList, setStrategiesList] = useState([
    { id: "str_adv1", name: "Advanced" },
    { id: "str_pro2", name: "Pro" },
    { id: "str_spr3", name: "Super" },
    { id: "str_xtr4", name: "Extra" },
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
        strategiesList,
        setStrategiesList,
        selectedBotSettings,
        setSelectedBotSettings,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
