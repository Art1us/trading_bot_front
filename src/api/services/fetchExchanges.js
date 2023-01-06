import { apiClient } from "../apiClient"
import { EXCHANGE_LIST } from "../constantURLs"

export function fetchExchanges(accessToken, controller) {
  return apiClient.get(
    EXCHANGE_LIST,
    {
      signal: controller.signal,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}
