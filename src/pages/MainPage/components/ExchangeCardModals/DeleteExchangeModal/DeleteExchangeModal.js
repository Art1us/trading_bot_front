import React, { useContext } from "react"

import "./DeleteExchangeModal.css"
import { SimpleAnimatedModal } from "helpers/SimpleAnimatedModal/SimpleAnimatedModal"

import { useAuth } from "hooks"
import { ExchangeCardsContext } from "contexts/ExchangeCardsContext"

function DeleteExchangeModal({ showDeleteModal, setShowDeleteModal }) {
  const { exchangeToDelete, deleteExchange } = useContext(ExchangeCardsContext)
  const { auth } = useAuth()

  function yesClickHandler() {
    const controller = new AbortController()
    if (auth?.access_token) {
      deleteExchange.request(exchangeToDelete, auth.access_token, controller)
      setShowDeleteModal(false)
    }
  }

  function noClickHandler() {
    setShowDeleteModal(false)
  }

  return (
    <SimpleAnimatedModal
      opened={showDeleteModal}
      onClose={e => {
        e.stopPropagation()
        setShowDeleteModal(false)
      }}
    >
      <div className="deleteExchangeModal__container">
        <h2 className="deleteExchangeModal__title">Are you sure?</h2>
        <div className="deleteExchangeModal__buttons">
          <button
            className="deleteExchangeModal__button--del"
            onClick={yesClickHandler}
          >
            Delete
          </button>
          <button
            className="deleteExchangeModal__button--cncl"
            onClick={noClickHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </SimpleAnimatedModal>
  )
}

export default DeleteExchangeModal
