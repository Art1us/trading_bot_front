import React, { useContext } from "react"
import "./AddExchangeCard.css"
import { FaPlus } from "react-icons/fa"

import AuthContext from "../../../contexts/AuthProvider"
import useApi from "../../../hooks/useApi/useApi"
import getExchanges from "../../../api/getExchanges"

function AddExchangeCard({ setShowNewModal }) {
  const { auth } = useContext(AuthContext)
  const exchanges = useApi(getExchanges)

  function fetchExchanges() {
    const { request, data, error, loading } = exchanges

    request(auth.access_token)
    if (!error && !loading && data) {
      console.log(data)
    }
  }

  return (
    <div
      className="addExchangeCard"
      onClick={/* () => setShowNewModal(true )*/ fetchExchanges}
    >
      <FaPlus className="addExchangeCard--empty" />
    </div>
  )
}

export default AddExchangeCard
