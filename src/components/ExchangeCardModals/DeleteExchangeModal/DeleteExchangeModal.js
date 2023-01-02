import React from "react"
import "./DeleteExchangeModal.css"
import { SimpleAnimatedModal } from "../../../helpers/SimpleAnimatedModal/SimpleAnimatedModal"

function DeleteExchangeModal({ showDeleteModal, setShowDeleteModal }) {
  function yesClickHandler() {
    setShowDeleteModal(false)
    //setUserExchanges(prev => [...prev.filter(exch => exch.id !== id)])
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
        <h2>Are you sure?</h2>
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
