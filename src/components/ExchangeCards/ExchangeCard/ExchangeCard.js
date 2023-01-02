import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../Context"
import "./ExchangeCard.css"
import EditExchangeModal from "../../ExchangeCardModals/EditExchangeModal/EditExchangeModal"
import DeleteExchangeModal from "../../ExchangeCardModals/DeleteExchangeModal/DeleteExchangeModal"
import { BiPencil, BiTrash } from "react-icons/bi"
import { ExchangeOpenAnimation } from "../../../helpers/ExchangeOpenAnimation/ExchangeOpenAnimation"

function ExchangeCard(exchangeData) {
  const { id, exchange, img, publicKey } = exchangeData
  const { setUserExchanges } = useContext(Context)

  let navigate = useNavigate()

  const [hovered, setHovered] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [exchangeSelected, setExchangeSelected] = useState(false)

  function mouseEnterHandler() {
    setHovered(true)
  }
  function mouseLeaveHandler() {
    setHovered(false)
  }

  function editClickHandler(e) {
    e.stopPropagation()
    setShowEditModal(true)
  }

  function deleteCLickHandler(e) {
    e.stopPropagation()
    e.preventDefault()
    setShowDeleteModal(true)
  }

  function clickHandler() {
    setExchangeSelected(true)
    setTimeout(() => navigate("/exchange"), 100)
  }

  return (
    <ExchangeOpenAnimation opened={!exchangeSelected}>
      <>
        <EditExchangeModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          exchangeData={exchangeData}
        />
        <DeleteExchangeModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          exchangeData={exchangeData}
        />
        <div
          className="exchangeCard"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
        >
          {hovered && (
            <>
              <BiPencil
                className="exchangeCard__pencil"
                onClick={editClickHandler}
              />

              <BiTrash
                className="exchangeCard__trash"
                onClick={deleteCLickHandler}
              />
            </>
          )}
          <div className="exchangeCard__logo">
            <img
              src={require(`../../../assets/pictures/exchangeLogos/${img}`)}
              alt=""
            />
          </div>
          <div className="exchangeCard__title">
            <h3>{exchange}</h3>
          </div>
          <div className="exchangeCard__curentinfo">
            <div className="exchangeCard__currencyInfo--text">
              Your public key:
            </div>
            <div className="exchangeCard__currencyInfo--number">
              {publicKey.slice(0, 8)}
              {publicKey.length > 8 ? "..." : ""}
            </div>
          </div>
        </div>
      </>
    </ExchangeOpenAnimation>
  )
}

export default ExchangeCard
