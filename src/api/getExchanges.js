import client from "./client"
import { EXCHANGE_LIST } from "./apiConstants"

function getExchanges(accessToken) {
  return client.get(EXCHANGE_LIST, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default getExchanges
