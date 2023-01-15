import React, { useState } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import "./HintIcon.css"

function HintIcon({ text }) {
  const [hintActive, setHintActive] = useState(false)

  return (
    <div className="hintIcon__container">
      <AiOutlineQuestionCircle
        className="hintIcon"
        onMouseEnter={() => setHintActive(true)}
        onMouseLeave={() => setHintActive(false)}
      />
      {hintActive ? <div className="hintIcon__description">{text}</div> : ""}
    </div>
  )
}

export default HintIcon
