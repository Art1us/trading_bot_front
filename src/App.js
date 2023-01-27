import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Modals } from "pages/common/components"
import {
  ExchangePage,
  Login,
  MainPage,
  PageNotFound,
  Profile,
  Register,
  Unauthorized,
  Welcome,
} from "pages"
import RequireAuth from "helpers/Auth/RequireAuth"
import { ExchangeCardsProvider } from "contexts/ExchangeCardsContext"

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
