import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"

export function useModalContext() {
  const data = useContext(ModalContext)
  return data
}
