import { apiClient } from "../apiClient"
import { REGISTRATION_URL } from "../constantURLs"

export function fetchRegistration(email, password, controller) {
  return apiClient.post(
    REGISTRATION_URL,
    JSON.stringify({
      email,
      password,
    }),
    {
      headers: { "Content-Type": "application/json" },
      signal: controller?.signal,
    }
  )
}
