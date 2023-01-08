import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export function useApi(apiFunc) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { refreshTokens } = useContext(AuthContext)

  async function request(...args) {
    setLoading(true)
    try {
      const response = await apiFunc(...args)
      setResponse(response)
    } catch (err) {
      const status = err?.response?.status || ""
      let error = { status }

      switch (status) {
        case 401:
          error.message = "You have no access"
          refreshTokens()
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
