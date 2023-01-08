import { fetchRefreshToken } from "../../api/auth/fetchRefreshToken"
import { useApi } from "../useApi/useApi"
import { useAuth } from "../useAuth/useAuth"

export function useRefreshTokens() {
  const refreshToken = useApi(fetchRefreshToken)
  const controller = new AbortController()
  const { auth, setAuth } = useAuth()

  function refresh() {
    refreshToken.request(auth.access_token, auth.refresh_token, controller)
  }

  useEffect(() => {
    let mounted = true
    if (refreshToken.response?.status === 200 && mounted) {
      console.log(refreshToken.response?.data?.data)
      //setAuth(refreshToken.response?.data?.data)
    }
    return () => {
      mounted = false
      controller.abort()
    }
  }, [refreshToken.response])

  return refresh
}
