import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import MainPage from "./pages/MainPage/MainPage"
import ExchangePage from "./pages/ExchangePage/ExchangePage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import RequireAuth from "./helpers/Auth/RequireAuth"
import RedirectLoggedInUser from "./helpers/Auth/RedirectLoggedInUser"
import Unauthorized from "./pages/Unauthorized/Unauthorized"
import PageNotFound from "./pages/PageNotFound/PageNotFound"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/unauth" element={<Unauthorized />} />
          <Route element={<RedirectLoggedInUser />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
