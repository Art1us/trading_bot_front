import { apiClient } from "../apiClient"
import { REGISTRATION_URL } from "../constantURLs"

export function fetchRegistration(email, password) {
  return apiClient.post(
    REGISTRATION_URL,
    JSON.stringify({
      email,
      password,
    })
  )
}
