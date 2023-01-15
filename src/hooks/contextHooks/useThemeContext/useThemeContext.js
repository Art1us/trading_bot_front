import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export function useThemeContext() {
  const data = useContext(ThemeContext)
  return data
}
