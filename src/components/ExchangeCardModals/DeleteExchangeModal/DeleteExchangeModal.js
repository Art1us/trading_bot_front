import React, { useContext } from "react"
import "./DeleteExchangeModal.css"
import { SimpleAnimatedModal } from "../../../helpers/SimpleAnimatedModal/SimpleAnimatedModal"
import { Context } from "../../../Context"
import { ExchangeCardsContext } from "../../../contexts/ExchangeCardsContext"

function DeleteExchangeModal({ showDeleteModal, setShowDeleteModal }) {
  const { setUserExchanges } = useContext(Context)
  const { exchangeToDelete } = useContext(ExchangeCardsContext)

  function yesClickHandler() {
    setShowDeleteModal(false)
    setUserExchanges(prev => [
      ...prev.filter(exch => exch.id !== exchangeToDelete),
    ])
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
      innerClassName="deleteExchangeModal__inner"
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
