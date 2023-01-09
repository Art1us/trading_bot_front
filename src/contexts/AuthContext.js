import { createContext, useEffect, useState } from "react"
import { apiClient } from "../api/apiClient"
import { fetchRefreshToken } from "../api/auth/fetchRefreshToken"
import { useApi } from "../hooks/useApi/useApi"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  const refreshToken = useApi(fetchRefreshToken)
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

  const controller = new AbortController()

  apiClient.interceptors.response.use(
    function (response) {
      return response
    },
    async function (error) {
      const prevRequest = error?.config

      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true
        const newAccessToken = await refreshToken.request(
          auth?.access_token,
          auth?.refresh_token,
          controller
        )
        prevRequest.headers[
          "Authorization"
        ] = `Bearer ${newAccessToken?.data?.data?.access_token}`
        return apiClient(prevRequest)
      } else {
        logout()
      }
      return Promise.reject(error)
    }
  )

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
