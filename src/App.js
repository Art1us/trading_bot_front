import "./App.css"
import { useContext } from "react"
import { Context } from "./Context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import MainPage from "./pages/MainPage/MainPage"
import ExchangePage from "./pages/ExchangePage/ExchangePage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  const { isDarkTheme } = useContext(Context)

  return (
    <div className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/exchange" element={<ExchangePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
