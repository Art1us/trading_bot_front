import React, { useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useAuth } from "../../../hooks/useAuth/useAuth"
import { fetchUsername } from "../../../api/auth/fetchUsername"
import { useApi } from "../../../hooks/useApi/useApi"

function Greeting({ onClick }) {
  const username = useApi(fetchUsername)
  const { auth } = useAuth()
  const controller = new AbortController()

  useEffect(() => {
    username.request(auth.access_token, controller)
  }, [auth])

  return (
    <>
      <p className="header__userName">
        Hello {username.response?.data?.data?.email || "username"}
      </p>
      <div className="header__elements--hover" onClick={onClick}>
        <RxHamburgerMenu className="header__elments-item--right" />
      </div>
    </>
  )
}

export default Greeting
