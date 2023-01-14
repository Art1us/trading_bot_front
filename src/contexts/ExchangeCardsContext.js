import { createContext, useEffect, useState } from "react"
import { getUserExchanges } from "../api/userExchanges/getUserExchanges"
import { postUserExchange } from "../api/userExchanges/postUserExchange"
import { deleteUserExchange } from "../api/userExchanges/deleteUserExchange"
import { useApi } from "../hooks/useApi/useApi"

const ExchangeCardsContext = createContext({})

function ExchangeCardsProvider({ children }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [exchangeToDelete, setExchangeToDelete] = useState("")
  const [selectedExchangeId, setSelectedExchangeId] = useState(() =>
    JSON.parse(localStorage.getItem("selectedExchangeId"))
  )

  const userExchanges = useApi(getUserExchanges)
  const addExchange = useApi(postUserExchange)
  const deleteExchange = useApi(deleteUserExchange)

  useEffect(() => {
    if (selectedExchangeId) {
      JSON.stringify(
        localStorage.setItem("selectedExchangeId", selectedExchangeId)
      )
    }
  }, [selectedExchangeId])
  console.log(selectedExchangeId)
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
        setSelectedExchangeId,
      }}
    >
      {children}
    </ExchangeCardsContext.Provider>
  )
}

export { ExchangeCardsContext, ExchangeCardsProvider }
