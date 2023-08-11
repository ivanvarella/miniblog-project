import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
