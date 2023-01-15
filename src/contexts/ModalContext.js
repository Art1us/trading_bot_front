import { createContext, useState } from "react"

const ModalContext = createContext({})

function ModalContextProvider({ children }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  return (
    <ModalContext.Provider value={{ showLogoutModal, setShowLogoutModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalContextProvider }
