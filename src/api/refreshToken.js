import client from "./client"
import { REFRESH_TOKEN_URL } from "./apiConstants"

function postRefreshToken(accessToken, refreshToken) {
  return client.post(
    REFRESH_TOKEN_URL,
    JSON.stringify({
      refreshToken,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}

export default postRefreshToken
