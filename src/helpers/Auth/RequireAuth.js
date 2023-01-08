import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth/useAuth"

export default function RequireAuth() {
  const { auth } = useAuth()

  //try refresh login here
  //if user was logged in - send him to login page, otherwise send to auth

  if (auth?.access_token) {
    ;<Outlet />
    //if 401 thrown
  }

  return auth?.access_token ? <Outlet /> : <Navigate to="/unauth" />
}
