import { apiClient } from "../apiClient"
import { REFRESH_TOKEN_URL } from "../constantURLs"

export function fetchRefreshToken(accessToken, refreshToken, controller) {
  return apiClient.post(
    REFRESH_TOKEN_URL,
    JSON.stringify({
      refreshToken,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      signal: controller?.signal,
    }
  )
}
