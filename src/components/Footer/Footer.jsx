import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../../assets/STONORA logo.jpg";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "How It Works", to: "/how-it-works" },
  ];

  const services = [
    "Car Washing",
    "Pest Control",
    "Supply Drivers",
    "Plumbing",
    "Electrical Services",
    "Home Cleaning",
  ];

  return (
    <footer className="bg-richGold text-deepForest font-inter pt-14 pb-5">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src={logo}
            alt="Stonora Logo"
            className="w-48 mb-4"
            loading="lazy"
          />

          <p className="font-poppins text-lg leading-relaxed">
            Your one-stop solution for all home services.
            <br />
            <span className="text-sm">Save time, save money, live better.</span>
          </p>

          <div className="flex gap-4 mt-5 text-2xl">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-black transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <nav>
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:underline hover:text-black transition text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service} className="text-lg hover:text-black transition">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Contact Us
          </h3>
          <ul className="space-y-3 text-base font-poppins">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Mira Road, Gaurav Valley,
                <br />
                near JP Infra, 401107
              </span>
            </li>

            <li className="flex gap-3">
              <FaCar />
              <span>On-Site Car Service Available</span>
            </li>

            <li className="flex gap-3">
              <FaPhone />
              <a href="tel:+919890003000" className="hover:underline">
                +91 98900 03000
              </a>
            </li>

            <li className="flex gap-3">
              <FaEnvelope />
              <a
                href="mailto:official.stonora@gmail.com"
                className="hover:underline"
              >
                official.stonora@gmail.com
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="text-center border-t border-deepForest mt-10 pt-4 text-sm font-poppins">
        © 2025 Stonora. All rights reserved. | <span>Privacy Policy</span> |{" "}
        <span>Terms of Service</span>{" "}
      </div>
    </footer>
  );
}
