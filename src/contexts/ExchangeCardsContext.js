import { createContext, useState } from "react"

const ExchangeCardsContext = createContext({})

function ExchangeCardsProvider({ children }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [exchangeToDelete, setExchangeToDelete] = useState("")

  return (
    <ExchangeCardsContext.Provider
      value={{
        showDeleteModal,
        setShowDeleteModal,
        exchangeToDelete,
        setExchangeToDelete,
        exchangeToDelete,
        setExchangeToDelete,
      }}
    >
      {children}
    </ExchangeCardsContext.Provider>
  )
}

export { ExchangeCardsContext, ExchangeCardsProvider }
