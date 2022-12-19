import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExchangeCard.css";
import EditExchangeModal from "../../ExchangeCardModals/EditExchangeModal/EditExchangeModal";
import { BiPencil } from "react-icons/bi";

function ExchangeCard(props) {
  const { exchangeName, img, publicKey } = props;

  const [hovered, setHovered] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  function mouseEnterHandler() {
    setHovered(true);
  }
  function mouseLeaveHandler() {
    setHovered(false);
  }

  function editClickHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    setShowEditModal(true);
  }

  return (
    <>
      {showEditModal && (
        <EditExchangeModal
          setShowEditModal={setShowEditModal}
          exchangeData={props}
        />
      )}
      <Link to="/exchange" style={{ textDecoration: "none" }}>
        <div
          className="exchangeCard"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
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
            <h3>{exchangeName}</h3>
          </div>
          <div className="exchangeCard__curentinfo">
            <div className="exchangeCard__currencyInfo--text">Your public key:</div>
            <div className="exchangeCard__currencyInfo--number">
              {publicKey.slice(0, 8)}
              {publicKey.length > 8 ? "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ExchangeCard;
