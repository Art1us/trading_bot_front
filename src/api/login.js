import client from "./client"
import { LOGIN_URL } from "./apiConstants"

function postLogin(email, password) {
  return client.post(
    LOGIN_URL,
    JSON.stringify({
      email,
      password,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  )
}

export default postLogin
