import { apiClient } from "../apiClient"
import { USER_EXCHANGES } from "../constantURLs"

export function getUserExchanges(accessToken, controller) {
  return apiClient.get(USER_EXCHANGES, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    signal: controller?.signal,
  })
}
