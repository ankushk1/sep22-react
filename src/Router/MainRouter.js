import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Navbar from "../Components/Pages/Navbar";

const MainRouter = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
