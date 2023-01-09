import { useEffect } from "react"
import { fetchRefreshToken } from "../../api/auth/fetchRefreshToken"
import { useApi } from "../useApi/useApi"

export function useRefreshTokens() {
  const refreshToken = useApi(fetchRefreshToken)
  const controller = new AbortController()

  async function refresh(auth) {
    const response = await refreshToken.request(
      auth?.access_token,
      auth?.refresh_token,
      controller
    )
    console.log("resp", response)
    return response
  }
  /* 
  useEffect(() => {
    console.log("resp", refreshToken.response)
    console.log("err", refreshToken.response)
  }, [refreshToken.response, refreshToken.error]) */

  return refresh
}
