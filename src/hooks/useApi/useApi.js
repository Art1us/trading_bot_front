import { useEffect, useState } from "react"
import { useAuth } from "../useAuth/useAuth"
import { apiClient } from "api/apiClient"

import { fetchRefreshToken } from "api/auth/fetchRefreshToken"

export function useApi(apiFunc) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { auth, setAuth, logout } = useAuth()

  useEffect(() => {
    const controller = new AbortController()

    const responseIntercept = apiClient.interceptors.response.use(
      function (response) {
        return response
      },
      async function (error) {
        const prevRequest = error?.config
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true
          const resp = await fetchRefreshToken(
            auth?.access_token,
            auth?.refresh_token,
            controller
          )
          const newAccessToken = resp?.data?.data?.access_token
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          setAuth(prev => ({ ...prev, access_token: newAccessToken }))
          return apiClient(prevRequest)
        } else {
          logout()
        }
        return Promise.reject(error)
      }
    )

    return () => {
      apiClient.interceptors.response.eject(responseIntercept)
      controller.abort()
    }
  }, [error])

  async function request(...args) {
    setLoading(true)
    try {
      const response = await apiFunc(...args)
      setResponse(response)
      return Promise.resolve(response)
    } catch (err) {
      const status = err?.response?.status || ""
      let error = { status }
      switch (status) {
        case 401:
          error.message = "You have no access"
          break
        case 404:
          error.message = "Page not found"
          break
        case 422:
          error.message = "User already exists"
          break
        default:
          error.message = "Unexpected Error"
      }
      if (!err?.response) {
        error.message = "No response from the server"
      }
      setError(error)
      return Promise.reject(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    response,
    error,
    loading,
    request,
  }
}
