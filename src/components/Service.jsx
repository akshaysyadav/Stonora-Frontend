import React from "react";
import {
  FaCar,
  FaBug,
  FaBolt,
  FaTools,
  FaBroom,
  FaSnowflake,
} from "react-icons/fa";
import Button from "./Button.jsx";

const PHONE_NUMBER = "+919890003000";

const services = [
  {
    title: "Daily Car Washing",
    description: "Professional car wash at your doorstep every day.",
    icon: <FaCar size={32} />,
  },
  {
    title: "Pest Control",
    description: "Effective pest control for a clean and healthy home.",
    icon: <FaBug size={32} />,
  },
  {
    title: "Electrician Services",
    description: "Expert electrical repairs and installations.",
    icon: <FaBolt size={32} />,
  },
  {
    title: "Plumbing",
    description: "Reliable solutions for all your plumbing needs.",
    icon: <FaTools size={32} />,
  },
  {
    title: "Dusting",
    description: "Thorough dusting to keep your home spotless.",
    icon: <FaBroom size={32} />,
  },
  {
    title: "AC/RO Service",
    description: "AC and RO maintenance by certified technicians.",
    icon: <FaSnowflake size={32} />,
  },
];

const ServiceCard = ({ title, description, icon }) => {
  const handleGetStarted = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=Hi! I want to book ${title}.`,
      "_blank"
    );
  };

  return (
    <article
      className="flex flex-col items-center justify-between bg-white rounded-xl shadow-lg border border-gray-100 p-8 min-h-[280px] hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      tabIndex={0}
      aria-label={`${title} service card`}
    >
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-richGold text-white mb-6 text-3xl"
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-deepForest mb-2 font-poppins">
          {title}
        </h3>
        <p className="text-lg text-gray-600 text-center font-inter leading-relaxed">
          {description}
        </p>
      </div>

      {/* Add top margin to increase gap */}
      <div className="mt-8 w-full">
        <Button text="Get Started" onClick={handleGetStarted} />
      </div>
    </article>
  );
};

const Service = () => (
  <section className="py-20 bg-deepForest min-h-screen">
    <div className="container mx-auto px-4 max-w-7xl text-center">
      <h2 className="text-richGold text-4xl font-bold text-center mb-2">
        Our Services
      </h2>
      <h2
        className="text-white font-extrabold text-2xl md:text-4xl mb-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Premium, Reliable Utility Services
      </h2>

      <p className="text-gray-100 max-w-3xl mx-auto mb-14 font-inter text-xl">
        Daily car washing, pest control, plumbing, electrical repairs, dusting,
        AC/RO services, and much more—all crafted to ease your lifestyle.
      </p>

      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </div>
  </section>
);

export default Service;
