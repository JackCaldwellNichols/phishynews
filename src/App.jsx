import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Newsletter />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
