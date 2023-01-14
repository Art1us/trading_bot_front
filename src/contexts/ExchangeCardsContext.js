import { createContext, useState } from "react"
import { getUserExchanges } from "../api/userExchanges/getUserExchanges"
import { postUserExchange } from "../api/userExchanges/postUserExchange"
import { deleteUserExchange } from "../api/userExchanges/deleteUserExchange"
import { useApi } from "../hooks/useApi/useApi"

const ExchangeCardsContext = createContext({})

function ExchangeCardsProvider({ children }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [exchangeToDelete, setExchangeToDelete] = useState("")

  const userExchanges = useApi(getUserExchanges)
  const addExchange = useApi(postUserExchange)
  const deleteExchange = useApi(deleteUserExchange)

  return (
    <ExchangeCardsContext.Provider
      value={{
        showDeleteModal,
        setShowDeleteModal,
        exchangeToDelete,
        setExchangeToDelete,
        userExchanges,
        addExchange,
        deleteExchange,
      }}
    >
      {children}
    </ExchangeCardsContext.Provider>
  )
}

export { ExchangeCardsContext, ExchangeCardsProvider }
