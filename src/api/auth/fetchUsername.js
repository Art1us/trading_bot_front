import { apiClient } from "../apiClient"
import { PROFILE } from "../constantURLs"

export function fetchUsername(accessToken, controller) {
  return apiClient.get(PROFILE, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    signal: controller?.signal,
  })
}
