import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchRefreshToken } from "../api/auth/fetchRefreshToken"
import { useApi } from "../hooks/useApi/useApi"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  console.log(auth)

  useEffect(() => {
    if (auth?.access_token) {
      localStorage.setItem("auth", JSON.stringify(auth))
    }
  }, [auth])

  function logout() {
    setAuth({})
    localStorage.removeItem("auth")
  }

  //const navigate = useNavigate()
  const refreshToken = useApi(fetchRefreshToken)
  const controller = new AbortController()

  function refreshTokens() {
    refreshToken.request(auth.access_token, auth.refresh_token, controller)
    console.log("refresh fetched")
  }

  useEffect(() => {
    let mounted = true
    if (refreshToken.response?.status === 200 && mounted) {
      console.log(refreshToken.response?.data?.data)
      //setAuth(refreshToken.response?.data?.data)
      //continue with previous request
    } else {
      //navigate("/login")
    }
    return () => {
      mounted = false
      controller.abort()
    }
  }, [refreshToken.response])

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, refreshTokens }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
