import React, { useContext } from "react"
//import { Context } from "../../Context"
import AuthContext from "../../contexts/AuthProvider"
import axios from "../axios"
import {
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  REGISTRATION_URL,
  EXCHANGE_LIST,
} from "./apiConstants"

function Fetcher() {
  const { auth, setAuth } = useContext(AuthContext)

  const fetcher = {
    async login(email, password) {
      try {
        const resp = await axios.post(
          LOGIN_URL,
          JSON.stringify({
            email,
            password,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        setAuth(resp?.data?.data)
      } catch (err) {
        console.log(err)
      }
    },

    async registrate(email, password) {
      try {
        const resp = await axios.post(
          REGISTRATION_URL,
          JSON.stringify({
            email,
            password,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        setAuth(resp?.data)
      } catch (err) {
        console.log(err)
      }
    },

    async refreshToken() {
      if (!auth.access_token) return
      try {
        const resp = await axios.post(
          REFRESH_TOKEN_URL,
          JSON.stringify({
            refreshToken: auth.refresh_token,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.access_token}`,
            },
          }
        )
        console.log(resp?.data)
      } catch (err) {
        console.log(err)
      }
    },

    async fetchExchanges(setExchanges) {
      try {
        const resp = await axios.get(EXCHANGE_LIST, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.access_token}`,
          },
        })
        setExchanges([...resp?.data?.data])
      } catch (err) {
        console.log(err)
      }
    },
  }

  return fetcher
}

export default Fetcher
