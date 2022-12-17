import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./pages/Login/Login";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<>After Login</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
