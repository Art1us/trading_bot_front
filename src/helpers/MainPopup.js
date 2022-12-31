import React from "react"
import OverlayingPopup from "./OverlayingPopup/OverlayingPopup"

function MainPopup({ isOpened, onClose, className, children }) {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <div className={className}>{children}</div>
    </OverlayingPopup>
  )
}

export default MainPopup
