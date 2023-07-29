import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Navbar from "../Components/Pages/Navbar";
import CounterRedux from "../Components/CounterRedux";
import SignUp from "../ProductsApp/Users/SignUp";
import { Toaster } from "react-hot-toast";
import Signin from "../ProductsApp/Users/Signin";

const MainRouter = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Toaster />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
