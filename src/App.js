import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import MainPage from "./pages/MainPage/MainPage"
import ExchangePage from "./pages/ExchangePage/ExchangePage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import RequireAuth from "./helpers/RequireAuth"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
