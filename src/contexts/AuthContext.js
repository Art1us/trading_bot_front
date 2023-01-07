import { createContext, useEffect, useState } from "react"
import { useApi } from "../hooks/useApi/useApi"
import { fetchRefreshToken } from "../api/auth/fetchRefreshToken"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  console.log(auth)
  useEffect(() => {
    if (auth?.access_token) {
      localStorage.setItem("auth", JSON.stringify(auth))
    }
  }, [auth])

  const refreshToken = useApi(fetchRefreshToken)

  function getRefreshedTokens() {
    refreshToken.request(auth.access_token, auth.refresh_token)
  }

  function logout() {
    setAuth({})
    localStorage.removeItem("auth")
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, getRefreshedTokens, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }