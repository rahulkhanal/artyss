import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Consulatation from "./pages/Consulatation";
import Thankyou from "./pages/Thankyou";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consulatation />} />
          <Route path="/sucess-response" element={<Thankyou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
