import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HowItWorks from "./pages/Working.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./components/Service.jsx";
import Services from "./pages/Services.jsx";
import Hero from "./pages/Hero.jsx";
import Login from "./components/Login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./components/Login/SignUp.jsx";
export default function App() {
  return (
    <div className="min-h-screen bg-deepForest text-richGold font-poppins">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <AboutUs /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services /> <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Service />
                <Hero />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
