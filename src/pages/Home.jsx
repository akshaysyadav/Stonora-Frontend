import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import pest from "../assets/pest.webp";
import car from "../assets/washing.webp";
import ac from "../assets/ac.webp";
import electric from "../assets/electric.webp";
import plumbing from "../assets/plumbing.webp";
import cleaning from "../assets/dusting.webp";

const services = [
  { title: "Pest Control", img: pest, price: "From ₹299" },
  { title: "Car Wash", img: car, price: "From ₹199" },
  { title: "AC Service", img: ac, price: "From ₹399" },
  { title: "Electrical", img: electric, price: "From ₹249" },
  { title: "Plumbing", img: plumbing, price: "From ₹199" },
  { title: "Cleaning", img: cleaning, price: "From ₹299" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(id);
  }, [goNext]);

  const handleViewServices = () => {
    navigate("/services");
  };

  const handleBookService = () => {
    const phoneNumber = "+919890003000";
    const message = encodeURIComponent("Hi! I want to book a home service.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const progressWidth = ((current + 1) / services.length) * 100;

  return (
    <section className="min-h-screen bg-deepForest text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden py-12 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr,1.6fr] gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            All your home{" "}
            <span className="text-richGold block lg:inline">services </span>
            
            <span className="block lg:inline"> in one place</span>
          </h1>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg">
            Book verified professionals for cleaning, repairs, pest control and
            more, at a time that works best for you.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <button
              onClick={handleBookService}
              className="bg-richGold text-deepForest px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Book a service
            </button>
            <button
              onClick={handleViewServices}
              className="border border-white/20 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/5 hover:border-richGold/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
            >
              View all services
            </button>
          </div>
        </div>

        <div className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[520px] xl:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 mx-auto max-w-md sm:max-w-lg lg:max-w-none">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                i === current
                  ? "translate-x-0 scale-100 opacity-100"
                  : i < current
                  ? "-translate-x-full scale-95 opacity-30"
                  : "translate-x-full scale-95 opacity-30"
              }`}
            >
              <img
                src={s.img}
                alt={s.title}
                width="1200"
                height="800"
                loading={i === current ? "eager" : "lazy"}
                fetchPriority={i === current ? "high" : "auto"}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
                      {s.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-richGold font-semibold mt-1">
                      {s.price}
                    </p>
                  </div>
                  <button className="bg-richGold text-deepForest px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex-shrink-0 w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-white/30 rounded-full overflow-hidden shadow-md">
            <div
              className="h-full bg-gradient-to-r from-richGold to-yellow-400 rounded-full shadow-sm transition-all duration-500 ease-linear"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 sm:w-10 h-9 sm:h-10 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-110 shadow-2xl shadow-black/50 z-20 hover:z-30"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 sm:w-10 h-9 sm:h-10 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-110 shadow-2xl shadow-black/50 z-20 hover:z-30"
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                  i === current
                    ? "w-6 sm:w-8 bg-white shadow-lg shadow-white/50"
                    : "bg-white/40 hover:bg-white/60 hover:w-2.5 sm:hover:w-3"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
