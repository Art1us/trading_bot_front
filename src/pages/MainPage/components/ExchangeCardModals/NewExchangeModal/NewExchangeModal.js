import React, { useContext, useEffect } from "react"

import "./NewExchangeModal.css"
import { AiOutlineClose } from "react-icons/ai"
import { SimpleAnimatedModal } from "helpers/SimpleAnimatedModal/SimpleAnimatedModal"

import { useForm, useAuth, useApi } from "hooks"
import { ExchangeCardsContext } from "contexts/ExchangeCardsContext"
import { fetchExchanges } from "api/services/fetchExchanges"
import { formInputsData } from "./data"

function NewExchangeModal({ showNewModal, setShowNewModal }) {
  const { addExchange } = useContext(ExchangeCardsContext)
  const { auth } = useAuth()
  const exchanges = useApi(fetchExchanges)

  const addExchangeController = new AbortController()

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()
    if (mounted) {
      exchanges.request(auth?.access_token, controller)
    }
    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  useEffect(() => {
    formInputsData[0].list =
      exchanges.response?.status === 200
        ? [...exchanges?.response?.data?.data]
        : []
  }, [exchanges.response])

  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return

    addExchange.request(formValues, auth.access_token, addExchangeController)
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
