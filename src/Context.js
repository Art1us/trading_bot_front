import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const EXCHANGES_LIST = "/exchange_list";

  const [exchangesList, setExchangesList] = useState([]);
  const [userExchanges, setUserExchanges] = useState([]);

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
      value={{ exchangesList, userExchanges, setUserExchanges }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
