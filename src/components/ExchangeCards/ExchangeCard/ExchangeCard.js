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
          <div>
            {" "}
            PublicKey:{publicKey.slice(0, 8)}
            {publicKey.length > 8 ? "..." : ""}
          </div>
          <div className="exchangeCard__info">
            <div className="exchangeCard__currencyInfo">
              <p className="exchangeCard__currencyInfo--text">BUSD:</p>
              <p className="exchangeCard__currencyInfo--green">+228%</p>
            </div>
            <div className="exchangeCard__currencyInfo">
              <p className="exchangeCard__currencyInfo--text">BNB:</p>
              <p className="exchangeCard__currencyInfo--red">-322%</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ExchangeCard;
