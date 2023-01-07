import { useState } from "react"

export function useApi(apiFunc) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

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
      console.log(error)
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
