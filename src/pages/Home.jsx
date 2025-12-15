import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added

import pest from "../assets/pest.png";
import car from "../assets/washing.png";
import ac from "../assets/ac.png";
import electric from "../assets/electric.png";
import plumbing from "../assets/plumbing.png";
import cleaning from "../assets/dusting.png";

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
  const navigate = useNavigate(); // ✅ Navigate hook

  // simple autoplay slider
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % services.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  // ✅ Navigate to /services
  const handleViewServices = () => {
    navigate("/services");
  };

  return (
    <section className="min-h-[90vh] bg-deepForest text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-[1.1fr,1.6fr] gap-8 items-center">
        {/* LEFT: 25–35% */}
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            All your home <span className="text-richGold">services</span>
            <br />
            in one place
          </h1>

          <p className="text-gray-300 max-w-md text-sm md:text-base">
            Book verified professionals for cleaning, repairs, pest control and
            more, at a time that works best for you.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-richGold text-deepForest px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-[1.02] transition-all duration-300">
              Book a service
            </button>
            {/* ✅ View all services → Navigate to /services */}
            <button
              onClick={handleViewServices}
              className="border border-white/20 px-5 py-2.5 rounded-lg text-xs md:text-sm hover:bg-white/5 hover:border-richGold/50 transition-all duration-300"
            >
              View all services
            </button>
          </div>
        </div>

        {/* RIGHT: BIGGER hero slider */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-richGold mt-1">
                      {s.price}
                    </p>
                  </div>
                  <button className="bg-richGold text-deepForest px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
