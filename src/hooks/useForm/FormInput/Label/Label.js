import React from "react"
import HintIcon from "../../../../helpers/HintIcon/HintIcon"

function Label({ data }) {
  if (!data) return null
  return (
    <div className={data.className}>
      {data.text} {data.hint && <HintIcon text={data.hint} />}
    </div>
  )
}

export default Label
