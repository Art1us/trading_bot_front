import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<>Auth</>} />
        <Route path="/main" element={<>After Login</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
