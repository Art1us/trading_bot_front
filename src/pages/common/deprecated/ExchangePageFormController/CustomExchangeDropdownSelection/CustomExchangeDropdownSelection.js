import React, { useContext, useRef, useEffect } from "react"
import "./CustomExchangeDropdownSelection.css"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { Context } from "../../../Context"

function CustomExchangeDropdownSelection({
  displayedDropdown,
  setDisplayedDropdown,
  id,
}) {
  const exchangeDropdownRef = useRef()
  const { selectedBotSettings } = useContext(Context)

  useEffect(() => {
    function outsideClickHandler(e) {
      if (e.target !== exchangeDropdownRef.current) {
        setDisplayedDropdown("0")
      }
    }
    document.body.addEventListener("click", outsideClickHandler)

    return () => document.body.removeEventListener("click", outsideClickHandler)
  }, [])

  function exchangeClickHandler(e) {
    e.stopPropagation()
    if (displayedDropdown === id) {
      setDisplayedDropdown("0")
    } else {
      setDisplayedDropdown(id)
    }
  }

  return (
    <div
      className="customExchangeDropdownSelection"
      onClick={exchangeClickHandler}
    >
      <div className="customExchangeDropdownSelection__container">
        {selectedBotSettings.exchange.name}
        <RiArrowDropDownLine fontSize={25} />
      </div>
      <div className="customExchangeDropdownSelection__buttonWrapper">
        {displayedDropdown === id ? (
          <Link to="/main" style={{ textDecoration: "none" }}>
            <div className="customExchangeDropdownSelection__btnContainer">
              <button className="customExchangeDropdownSelection__btn">
                Change Exchange?
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default CustomExchangeDropdownSelection
