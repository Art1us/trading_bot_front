import { apiClient } from "../apiClient"
import { USER_EXCHANGES } from "../constantURLs"

export function postUserExchange(body, accessToken, controller) {
  const { exchangeId, publicKey, secretKey } = body
  return apiClient.post(
    USER_EXCHANGES,
    JSON.stringify({
      exchangeId,
      publicKey,
      secretKey,
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
