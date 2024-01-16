import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
