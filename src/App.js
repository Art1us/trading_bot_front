import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import MainPage from "./pages/MainPage/MainPage"
import ExchangePage from "./pages/ExchangePage/ExchangePage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import RequireAuth from "./helpers/Auth/RequireAuth"
import Unauthorized from "./pages/Unauthorized/Unauthorized"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { ExchangeCardsProvider } from "./contexts/ExchangeCardsContext"
import Modals from "./components/Modals/Modals"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Modals />
        <Header />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/unauth" element={<Unauthorized />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth />}>
            <Route
              path="/main"
              element={
                <ExchangeCardsProvider>
                  <MainPage />
                </ExchangeCardsProvider>
              }
            />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
