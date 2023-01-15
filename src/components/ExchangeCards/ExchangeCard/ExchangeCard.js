import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./ExchangeCard.css"
import EditExchangeModal from "../../ExchangeCardModals/EditExchangeModal/EditExchangeModal"
import { BiTrash } from "react-icons/bi"
import { ExchangeOpenAnimation } from "../../../helpers/ExchangeOpenAnimation/ExchangeOpenAnimation"
import { ExchangeCardsContext } from "../../../contexts/ExchangeCardsContext"
import EditPencil from "../../EditPencil/EditPencil"

function ExchangeCard({ setShowDeleteModal, ...exchangeData }) {
  const { id, name, img, publicKey } = exchangeData
  const { setExchangeToDelete, setSelectedExchangeId } =
    useContext(ExchangeCardsContext)

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
    setShowEditModal(true)
  }

  function deleteClickHandler(e) {
    e.stopPropagation()
    e.preventDefault()
    setShowDeleteModal(true)
    setExchangeToDelete(id)
  }

  function clickHandler() {
    //setExchangeSelected(true)
    setSelectedExchangeId(id)

    //setTimeout(() => navigate("/exchange"), 100)
  }

  return (
    <ExchangeOpenAnimation opened={!exchangeSelected}>
      <>
        <EditExchangeModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
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
              <EditPencil
                stylings="exchangeCard__pencil"
                onClick={editClickHandler}
              />

              <BiTrash
                className="exchangeCard__trash"
                onClick={deleteClickHandler}
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
            <h3>{name}</h3>
          </div>
          <div className="exchangeCard__curentinfo">
            <div className="exchangeCard__currencyInfo--text">
              Your public key:
            </div>
            <div className="exchangeCard__currencyInfo--number">
              {publicKey?.slice(0, 8)}
              {publicKey?.length > 8 ? "..." : ""}
            </div>
          </div>
        </div>
      </>
    </ExchangeOpenAnimation>
  )
}

export default ExchangeCard
