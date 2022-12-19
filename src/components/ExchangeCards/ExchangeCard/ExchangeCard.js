import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExchangeCard.css";
import { BiPencil } from "react-icons/bi";

function ExchangeCard({ name, img, setShowEditModal }) {
  const [hovered, setHovered] = useState(false);

  function mouseEnterHandler() {
    setHovered(true);
  }
  function mouseLeaveHandler() {
    setHovered(false);
  }

  function editClickHandler() {
    setShowEditModal(true);
  }

  return (
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
          <h3>{name}</h3>
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
  );
}

export default ExchangeCard;
