import React, { useContext } from "react"
import "./EditExchangeModal.css"
import { AiOutlineClose } from "react-icons/ai"
import useForm from "../../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"
import { SimpleAnimatedModal } from "../../../helpers/SimpleAnimatedModal/SimpleAnimatedModal"
import { Context } from "../../../Context"

function EditExchangeModal({ showEditModal, setShowEditModal, exchangeData }) {
  const { exchange } = exchangeData
  const { setUserExchanges } = useContext(Context)
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
