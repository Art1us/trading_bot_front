import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ExchangeCard.css"
import EditExchangeModal from "../../ExchangeCardModals/EditExchangeModal/EditExchangeModal"
import { BiPencil } from "react-icons/bi"
import { ExchangeOpenAnimation } from "../../../helpers/ExchangeOpenAnimation/ExchangeOpenAnimation"

function ExchangeCard(props) {
  const { exchange, img, publicKey } = props

  let navigate = useNavigate()

  const [hovered, setHovered] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [exchangeSelected, setExchangeSelected] = useState(false)

  function mouseEnterHandler() {
    setHovered(true)
  }
  function mouseLeaveHandler() {
    setHovered(false)
  }

  function editClickHandler(e) {
    e.stopPropagation()
    e.preventDefault()
    setShowEditModal(true)
  }

  function clickHandler() {
    setExchangeSelected(true)
    setTimeout(() => navigate("/exchange"), 100)
  }

  return (
    <ExchangeOpenAnimation exchangeSelected={exchangeSelected}>
      <>
        <EditExchangeModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          exchangeData={props}
        />
        <div
          className="exchangeCard"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
        >
          {hovered && (
            <BiPencil
              className="exchangeCard__pencil"
              onClick={editClickHandler}
            />
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
