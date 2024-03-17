import "./App.css";
import { useState, useEffect } from "react";

import Landing from "../pages/Landing.jsx";
import Counter from "../pages/Counter.jsx";
import Category from "../pages/Category.jsx";
import Data from "../pages/Data.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Footer from "../components/Footer.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/data-page/:categoryID" element={<Data />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
