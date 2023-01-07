import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import MainPage from "./pages/MainPage/MainPage"
import ExchangePage from "./pages/ExchangePage/ExchangePage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
