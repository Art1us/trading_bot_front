import React from "react"
import Portal from "../Portal"
import "./OverlayingPopup.css"

function OverlayingPopup({ children, onClose, isOpened }) {
  if (!isOpened) {
    return null
  }

  return (
    <Portal>
      <div className="overlayingPopup">
        <div className="overlayingPopup__overlay" onClick={onClose} />
        {children}
      </div>
    </Portal>
  )
}

export default OverlayingPopup
