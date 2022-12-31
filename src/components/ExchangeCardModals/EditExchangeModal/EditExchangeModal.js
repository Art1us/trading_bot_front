import React, { useContext } from "react"
import "./EditExchangeModal.css"
import Portal from "../../../helpers/Portal"
import { AiOutlineClose } from "react-icons/ai"
import { Context } from "../../../Context"
import useForm from "../../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"

function EditExchangeModal({ setShowEditModal, exchangeData }) {
  const { setUserExchanges } = useContext(Context)
  const { exchange } = exchangeData
  const { inputComponents, isSubmitInvalid, formValues } = useForm(
    formInputsData,
    exchangeData
  )

  function saveClickHandler() {
    if (isSubmitInvalid()) return
    setUserExchanges(prev => {
      return [...prev.filter(exch => exch.id !== exchangeData.id), formValues]
    })
    setShowEditModal(false)
  }

  function deleteClickHandler() {
    setUserExchanges(prev => [
      ...prev.filter(exch => exch.id !== exchangeData.id),
    ])
    setShowEditModal(false)
  }

  function closeHandler(e) {
    e.preventDefault()
    setShowEditModal(false)
  }

  return (
    <Portal>
      <div className="editExchangeModal">
        <div className="editExchangeModal__inner">
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
                  <button
                    type="button"
                    className="editExchangeModal__deleteBtn"
                    onClick={deleteClickHandler}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default EditExchangeModal
