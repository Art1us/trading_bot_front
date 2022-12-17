import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<>Auth</>} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
