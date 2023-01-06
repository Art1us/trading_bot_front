import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth/useAuth"

export default function RequireAuth() {
  const { auth } = useAuth()
  return auth?.access_token ? <Outlet /> : <Navigate to="/login" />
}
