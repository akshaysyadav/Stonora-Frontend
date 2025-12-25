import React from "react";
import {
  FaCalendarAlt,
  FaUserTie,
  FaStar,
  FaTags,
  FaUsers,
  FaBolt,
  FaClock,
} from "react-icons/fa";

export default function HowItWorks() {
  const PHONE_NUMBER = "919890003000";

  const handleGetStarted = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=Hi! I'm ready to get started with Stonora services.`,
      "_blank"
    );
  };

  const steps = [
    {
      number: "01",
      title: "Book Service",
      desc: "Choose service, date & time",
      icon: FaCalendarAlt,
    },
    {
      number: "02",
      title: "Pro Arrives",
      desc: "Verified experts, on-time",
      icon: FaUserTie,
    },
    {
      number: "03",
      title: "Perfect Results",
      desc: "4.9⭐ | 50K+ customers",
      icon: FaStar,
    },
  ];

  const offers = [
    {
      title: "First Service",
      badge: "20% OFF",
      price: "Save ₹100+",
      icon: FaTags,
    },
    {
      title: "Unlimited Cleaning",
      badge: "POPULAR",
      price: "₹999/mo",
      icon: FaUsers,
    },
    {
      title: "Family Plan",
      badge: "SAVE 30%",
      price: "4 homes",
      icon: FaUsers,
    },
    {
      title: "Priority Booking",
      badge: "PREMIUM",
      price: "Skip wait",
      icon: FaBolt,
    },
  ];

  return (
    <div className="bg-deepForest text-white min-h-screen py-24 px-6">
      
      <div className="max-w-2xl mx-auto text-center mb-32">
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-richGold via-yellow-400 to-richGold bg-clip-text text-transparent leading-tight tracking-[-0.05em]">
          How It Works
        </h1>
        <p className="text-lg text-gray-400 mt-4 leading-relaxed">
          3 steps. 60 seconds.
        </p>
      </div>

      
      <div className="max-w-4xl mx-auto mb-32 relative">
        <div className="flex items-start justify-between gap-12 md:gap-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center group gap-4 flex-1 min-w-0"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-richGold to-yellow-500 text-deepForest rounded-2xl flex items-center justify-center font-bold text-xl shadow-2xl group-hover:scale-110 transition-all duration-500">
                {step.number}
              </div>
              <step.icon className="w-12 h-12 text-richGold group-hover:text-yellow-400 group-hover:rotate-6 transition-all duration-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-richGold to-yellow-400 bg-clip-text text-transparent tracking-tight">
            Special Offers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group flex flex-col items-center p-6 hover:scale-105 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-richGold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-all">
                <offer.icon className="w-7 h-7 text-richGold group-hover:text-yellow-400" />
              </div>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                {offer.badge}
              </span>
              <h3 className="text-lg font-bold text-white text-center mb-2">
                {offer.title}
              </h3>
              <p className="text-2xl font-black bg-gradient-to-r from-richGold to-yellow-500 bg-clip-text text-transparent mb-6">
                {offer.price}
              </p>
              <div
                className="w-28 h-10 bg-gradient-to-r from-richGold to-yellow-500 text-deepForest rounded-xl flex items-center justify-center font-bold text-sm shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={handleGetStarted}
              >
                Get Now
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-md mx-auto text-center">
        <FaClock className="w-16 h-16 text-richGold/40 mx-auto mb-8" />
        <h2 className="text-3xl font-black mb-6 text-white">Ready to start?</h2>
        <p className="text-lg text-gray-500 mb-10">Join 50K+ customers.</p>
        <div
          className="group inline-flex bg-gradient-to-r from-richGold to-yellow-500 text-deepForest px-10 py-4 rounded-2xl text-lg font-black shadow-xl hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 cursor-pointer"
          onClick={handleGetStarted}
        >
          Book First Service
        </div>
      </div>
    </div>
  );
}
