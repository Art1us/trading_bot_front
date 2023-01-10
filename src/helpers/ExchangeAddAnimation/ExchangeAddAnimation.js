import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { ANIMATION_TIME } from "./const"
import animationStyles from "./animation.module.css"

const exchangeAddAnimation = {
  enter: animationStyles.exchangeAddAnimationEnter,
  enterActive: animationStyles.exchangeAddAnimationEnterActive,
  /*  exit: animationStyles.exchangeAddAnimationExit,
  exitActive: animationStyles.exchangeAddAnimationExitActive, */
}

export function ExchangeAddAnimation({ children, opened }) {
  const [animationIn, setAnimationIn] = useState(false)

  useEffect(() => {
    setAnimationIn(true)
    console.log("rendered")
  }, [opened])

  return (
    <CSSTransition
      in={animationIn}
      timeout={ANIMATION_TIME}
      unmountOnExit
      classNames={exchangeAddAnimation}
    >
      {children}
    </CSSTransition>
  )
}
