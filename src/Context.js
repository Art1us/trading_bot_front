import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const exchangesListUrl = "http://52.58.189.186:3000/exchange_list";
  const [exchangesList, setExchangesList] = useState([]);

  useEffect(() => {
    async function getExchangesList() {
      try {
        const response = await fetch(exchangesListUrl);

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        //setExchangesList(data)
      } catch (error) {
        console.log(error)
      }
    }

    getExchangesList()
  }, []);

  return (
    <Context.Provider value={{ exchangesList }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
