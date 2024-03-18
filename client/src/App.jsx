import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";

import Hamburger from "../components/Nav.jsx";
import Landing from "../pages/Landing.jsx";
import Counter from "../pages/Counter.jsx";
import Categories from "../pages/Category.jsx";
import Data from "../pages/Data.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Footer from "../components/Footer.jsx";
import About from "../pages/About.jsx";

import { verify } from "../services/users.js";

import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="backgroundIMG">
      <Hamburger />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/counters/:categoryId" element={<Counter />} />
        <Route path="/data-page/:categoryID" element={<Data />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
