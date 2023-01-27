import React from "react"

import "./AddExchangeCard.css"
import { FaPlus } from "react-icons/fa"

function AddExchangeCard({ setShowNewModal }) {
  return (
    <div className="addExchangeCard" onClick={() => setShowNewModal(true)}>
      <FaPlus className="addExchangeCard--empty" />
    </div>
  )
}

export default AddExchangeCard
