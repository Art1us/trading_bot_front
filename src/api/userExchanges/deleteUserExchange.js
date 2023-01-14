import { apiClient } from "../apiClient"
import { USER_EXCHANGES } from "../constantURLs"

export function deleteUserExchange(userExchangeId, accessToken, controller) {
  return apiClient.delete(USER_EXCHANGES, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      userExchangeId,
    },
    signal: controller?.signal,
  })
}
