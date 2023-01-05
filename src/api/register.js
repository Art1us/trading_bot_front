import client from "./client"
import { REGISTRATION_URL } from "./apiConstants"

function postRegistration(email, password) {
  return client.post(
    REGISTRATION_URL,
    JSON.stringify({
      email,
      password,
    })
  )
}

export default postRegistration
