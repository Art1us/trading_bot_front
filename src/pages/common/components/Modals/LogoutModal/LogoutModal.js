import React from "react"
import { useNavigate } from "react-router-dom"
import { SimpleAnimatedModal } from "helpers/SimpleAnimatedModal/SimpleAnimatedModal"
import { useAuth } from "hooks/useAuth/useAuth"
import "./LogoutModal.css"
import { useModalContext } from "hooks/contextHooks/useModalContext/useModalContext"

function LogoutModal() {
  const { showLogoutModal, setShowLogoutModal } = useModalContext()
  const { logout } = useAuth()
  const navigate = useNavigate()

  function logoutClickHandler() {
    logout()
    setShowLogoutModal(false)
    navigate("/")
  }

  function closeClickHandler() {
    setShowLogoutModal(false)
  }

  return (
    <SimpleAnimatedModal
      opened={showLogoutModal}
      onClose={() => setShowLogoutModal(false)}
    >
      <div className="logoutModal__container">
        <h2 className="logoutModal__title">Are you sure?</h2>
        <div className="logoutModal__buttons">
          <button
            className="logoutModal__button--logout"
            onClick={logoutClickHandler}
          >
            Logout
          </button>
          <button
            className="logoutModal__button--cncl"
            onClick={closeClickHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </SimpleAnimatedModal>
  )
}

export default LogoutModal
