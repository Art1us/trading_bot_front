import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import animationStyles from "./animation.module.css"

const langMenuAnimation = {
  enter: animationStyles.langMenuAnimationEnter,
  enterActive: animationStyles.langMenuAnimationEnterActive,
  exit: animationStyles.langMenuAnimationExit,
  exitActive: animationStyles.langMenuAnimationExitActive,
}

export function LangMenuAnimation({ children, opened }) {
  const [animationIn, setAnimationIn] = useState(false)

  useEffect(() => {
    setAnimationIn(opened)
  }, [opened])

  return (
    <CSSTransition
      in={animationIn}
      timeout={300}
      classNames={langMenuAnimation}
      mountOnEnter
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  )
}
