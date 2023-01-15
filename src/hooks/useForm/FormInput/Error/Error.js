import React from "react"
import "./Error.css"

function Error({ data }) {
  if (!data) return null
  return (
    <p
      className={data.className ? data.className : "error"}
      style={{ display: data.errorMessage ? "block" : "none" }}
    >
      *{data.errorMessage}
    </p>
  )
}

export default Error
