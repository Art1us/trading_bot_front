import React, { useEffect, useRef, useState } from "react"
import Portal from "../Portal"
import "./OverlayingPopup.css"
import { useMount } from "../../hooks/useMount/useMount"
import { CSSTransition } from "react-transition-group"

function OverlayingPopup({ children, onClose, isOpened }) {
  const { mounted } = useMount(isOpened)

  const overlayRef = useRef()
  const contentRef = useRef()

  const [animationIn, setAnimationIn] = useState(false)
  console.log(animationIn)
  useEffect(() => {
    setAnimationIn(isOpened)
  }, [isOpened])

  if (!mounted) {
    return null
  }

  return (
    <Portal>
      <div className="overlayingPopup">
        <CSSTransition
          in={animationIn}
          nodeRef={overlayRef}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="overlayAnimation"
        >
          <div
            className="overlayingPopup__overlay"
            onClick={onClose}
            ref={overlayRef}
          />
        </CSSTransition>
        <CSSTransition
          in={animationIn}
          nodeRef={contentRef}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="contentAnimation"
        >
          <div className="overlayingPopup__content" ref={contentRef}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </Portal>
  )
}

export default OverlayingPopup
