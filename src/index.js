import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuthProvider } from "./contexts/AuthContext"
import { ModalContextProvider } from "./contexts/ModalContext"
import { ThemeContextProvider } from "./contexts/ThemeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ModalContextProvider>
    </AuthProvider>
  </React.StrictMode>
)
