import React, { useState } from "react";
import "./ExchangeCard.css";
import {BiPencil} from 'react-icons/bi'

function ExchangeCard({ content,setShowModal }) {

  const [hovered, setHovered] =useState(false) 

  function mouseEnterHandler(){
    setHovered(true)
  }
  function mouseLeaveHandler(){
    setHovered(false)
  }

  function editClickHandler(){
    setShowModal(true)
  }

 
  return (
    <div className="exchangeCard" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
      {hovered && <BiPencil className="exchangeCard__pencil" onClick={editClickHandler}/>}
      <div className="exchangeCard__logo">
        <img
          src={require(`../../../assets/pictures/exchangeLogos/${content.img}`)}
          alt=""
        />
      </div>
      <div className="exchangeCard__title">
        <h3>{content.name}</h3>
      </div>
      <div className="exchangeCard__info">
        <div className="exchangeCard__currencyInfo">
          <p>BUSD:</p>
          <p className="exchangeCard__currencyInfo--green">+228%</p>
        </div>
        <div className="exchangeCard__currencyInfo">
          <p>BNB:</p>
          <p className="exchangeCard__currencyInfo--red">-322%</p>
        </div>
      </div>
    </div>
  );
}

export default ExchangeCard;
