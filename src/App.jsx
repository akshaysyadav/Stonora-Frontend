import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Login/SignUp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";

const Service = lazy(() => import("./components/Service.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Hero = lazy(() => import("./pages/Hero.jsx"));
const HowItWorks = lazy(() => import("./pages/Working.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));

export default function App() {
  return (
    <div className="min-h-screen bg-deepForest text-richGold font-poppins">
      <Router>
        <Navbar />

        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Service />
                  <Hero />
                </>
              }
            />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
}
