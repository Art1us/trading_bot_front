import { useState, useEffect } from "react"
import PortalReactDOM from "react-dom"

function Portal({ children }) {
  const [container] = useState(() => document.createElement("div"))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return PortalReactDOM.createPortal(children, container)
}

export default Portal
