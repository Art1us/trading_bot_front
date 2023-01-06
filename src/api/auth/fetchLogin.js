import { apiClient } from "../apiClient"
import { LOGIN_URL } from "../constantURLs"

export function fetchLogin(email, password, controller) {
  return apiClient.post(
    LOGIN_URL,
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
