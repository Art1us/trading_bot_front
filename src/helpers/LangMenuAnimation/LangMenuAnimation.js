import React, { useEffect, useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { ANIMATION_TIME } from "./const"
import animationStyles from "./animation.module.css"
import { useMount } from "hooks/useMount/useMount"

const langMenuAnimation = {
  enter: animationStyles.langMenuAnimationEnter,
  enterActive: animationStyles.langMenuAnimationEnterActive,
  /* enterDone: animationStyles.langMenuAnimationEnterDone, */
  exit: animationStyles.langMenuAnimationExit,
  exitActive: animationStyles.langMenuAnimationExitActive,
  /* exitDone: animationStyles.langMenuAnimationExitDone, */
}

export function LangMenuAnimation({ children, opened }) {
  const [animationIn, setAnimationIn] = useState(false)
  const ref = useRef()

  useEffect(() => {
    setAnimationIn(opened)
  }, [opened])

  return (
    <CSSTransition
      in={animationIn}
      timeout={{
        enter: 300,
        exit: 300,
      }}
      classNames={langMenuAnimation}
      mountOnEnter
      unmountOnExit
      nodeRef={ref}
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  )
}
