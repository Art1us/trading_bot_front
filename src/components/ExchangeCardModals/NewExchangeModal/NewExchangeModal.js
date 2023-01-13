import React, { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import "./NewExchangeModal.css"
import useForm from "../../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"
import { SimpleAnimatedModal } from "../../../helpers/SimpleAnimatedModal/SimpleAnimatedModal"
import { useApi } from "../../../hooks/useApi/useApi"
import { fetchExchanges } from "../../../api/services/fetchExchanges"
import { useAuth } from "../../../hooks/useAuth/useAuth"
import { postUserExchange } from "../../../api/userExchanges/postUserExchange"
import { getUserExchanges } from "../../../api/userExchanges/getUserExchanges"

function NewExchangeModal({ showNewModal, setShowNewModal }) {
  const { auth } = useAuth()
  const exchanges = useApi(fetchExchanges)
  const addExchange = useApi(postUserExchange)
  const userExchanges = useApi(getUserExchanges)
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
  console.log("exchanges", exchanges?.response?.data?.data)

  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return

    const { publicKey, secretKey } = formValues
    const exchangeId =
      exchanges?.response?.data?.data?.filter(
        item => item.name === formValues.exchange
      )[0].id || 0
    const body = { exchangeId, publicKey, secretKey }
    addExchange.request(body, auth.access_token, addExchangeController)

    console.log(
      "req",
      userExchanges.request(auth.access_token, addExchangeController)
    )

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
