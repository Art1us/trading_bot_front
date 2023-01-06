import React, { useContext, useEffect } from "react"
import { Context } from "../../../Context"
import { AiOutlineClose } from "react-icons/ai"
import "./NewExchangeModal.css"
import { v4 as uuidv4 } from "uuid"
import useForm from "../../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"
import { SimpleAnimatedModal } from "../../../helpers/SimpleAnimatedModal/SimpleAnimatedModal"

import { useApi } from "../../../hooks/useApi/useApi"
import { fetchExchanges } from "../../../api/services/fetchExchanges"
import { AuthContext } from "../../../contexts/AuthContext"

function NewExchangeModal({ showNewModal, setShowNewModal }) {
  const { setUserExchanges } = useContext(Context)
  const { auth } = useContext(AuthContext)
  const exchanges = useApi(fetchExchanges)

  useEffect(() => {
    exchanges.request(auth?.access_token)
  }, [])

  formInputsData[0].list = [{ id: 1, name: "Binance" }]
  /* useEffect(() => {
    if (exchanges.data) {
      formInputsData[0].list = [...exchanges.data.data]
    }
  }, [exchanges.data]) */

  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return
    setUserExchanges(prev => [...prev, { ...formValues, id: uuidv4() }])
    setShowNewModal(false)
  }

  return (
    <SimpleAnimatedModal
      opened={showNewModal}
      onClose={() => setShowNewModal(false)}
      innerClassName="newExchangeModal__inner"
    >
      <AiOutlineClose
        className="newExchangeModal__cross"
        onClick={() => setShowNewModal(false)}
      />
      <form className="newExchangeModal__form" onSubmit={submitHandler}>
        <div className="newExchangeModal__formCol">{inputComponents}</div>
        <button className="newExchangeModal__saveBtn">Save</button>
      </form>
    </SimpleAnimatedModal>
  )
}

export default NewExchangeModal
