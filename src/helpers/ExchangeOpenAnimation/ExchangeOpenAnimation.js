import React from "react"
import { CSSTransition } from "react-transition-group"
import { ANIMATION_TIME } from "./const"
import animationStyles from "./animation.module.css"

const exchangeOpenAnimation = {
  exitActive: animationStyles.exchangeOpenAnimationExitActive,
}

export function ExchangeOpenAnimation({ children, exchangeSelected }) {
  return (
    <CSSTransition
      in={!exchangeSelected}
      timeout={ANIMATION_TIME}
      unmountOnExit
      classNames={exchangeOpenAnimation}
    >
      {children}
    </CSSTransition>
  )
}
