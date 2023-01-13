import React from "react"
import "./EditPencil.css"
import { BiPencil } from "react-icons/bi"

function EditPencil({ stylings, onClick }) {
  return <BiPencil className={`editPencil ${stylings}`} onClick={onClick} />
}

export default EditPencil
