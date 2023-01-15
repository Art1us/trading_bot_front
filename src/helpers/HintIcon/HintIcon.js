import React from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import "./HintIcon.css"

function HintIcon({ text }) {
  return (
    <>
      <AiOutlineQuestionCircle className="hintIcon" />
      <div>{text}</div>
    </>
  )
}

export default HintIcon
