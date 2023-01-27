import React from "react"

import "./EditExchangeModal.css"
import { AiOutlineClose } from "react-icons/ai"
import { SimpleAnimatedModal } from "helpers/SimpleAnimatedModal/SimpleAnimatedModal"

import { useForm } from "hooks"
import { formInputsData } from "./data"

function EditExchangeModal({ showEditModal, setShowEditModal, exchangeData }) {
  const { exchange } = exchangeData
  const { inputComponents, isSubmitInvalid, formValues } = useForm(
    formInputsData,
    exchangeData
  )

  function saveClickHandler() {
    if (isSubmitInvalid()) return

    setShowEditModal(false)
  }

  function closeHandler(e) {
    e.preventDefault()
    setShowEditModal(false)
  }

  return (
    <SimpleAnimatedModal
      opened={showEditModal}
      onClose={e => {
        e.stopPropagation()
        setShowEditModal(false)
      }}
      innerClassName="editExchangeModal__inner"
    >
      <AiOutlineClose
        className="editExchangeModal__cross"
        onClick={e => closeHandler(e)}
      />
      <div className="editExchangeModal__container">
        <div className="editExchangeModal__title">
          <h2>{exchange}</h2>
        </div>
        <div className="editExchangeModal__formContainer">
          <form className="editExchangeModal__keyForm" autoComplete="off">
            {inputComponents}
            <div className="editExchangeModal_formBtn">
              <button
                type="button"
                className="editExchangeModal__saveBtn"
                onClick={saveClickHandler}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </SimpleAnimatedModal>
  )
}

export default EditExchangeModal
