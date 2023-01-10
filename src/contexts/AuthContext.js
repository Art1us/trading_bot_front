import { createContext, useEffect, useState } from "react"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  console.log("context", auth)

  useEffect(() => {
    if (auth?.access_token) {
      localStorage.setItem("auth", JSON.stringify(auth))
    }
  }, [auth])

  function logout() {
    setAuth({})
    localStorage.removeItem("auth")
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
