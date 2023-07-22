import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Navbar from "../Components/Pages/Navbar";
import CounterRedux from "../Components/CounterRedux";

const MainRouter = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<CounterRedux />} />
          <Route path="/about/:id/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
