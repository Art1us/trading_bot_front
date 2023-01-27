import { useContext } from "react"
import { AuthContext } from "contexts/AuthContext"

export function useAuth() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  return { auth, setAuth, logout }
}
