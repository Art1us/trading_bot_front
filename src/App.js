import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import MainPage from "./pages/MainPage/MainPage";
import ExchangePage from "./pages/ExchangePage/ExchangePage";
import Login from "./pages/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
