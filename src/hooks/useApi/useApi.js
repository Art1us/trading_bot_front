import { useState } from "react"

export function useApi(apiFunc) {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function request(...args) {
    setLoading(true)
    try {
      const result = await apiFunc(...args)
      console.log(result)
      setData(result.data)
    } catch (err) {
      setError(err.message || "Unexpected Error!")
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    error,
    loading,
    request,
  }
}
