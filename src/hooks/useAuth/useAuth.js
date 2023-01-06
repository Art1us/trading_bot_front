import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export function useAuth() {
  const { auth, setAuth } = useContext(AuthContext)
  return { auth, setAuth }
}
