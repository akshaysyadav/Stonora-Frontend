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
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
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
        {/* Logo & Info */}
        <div>
          <img src={logo} alt="Stonora Logo" className="w-48 mb-4" />
          <p className="font-poppins text-base leading-relaxed text-lg">
            Your one-stop solution for all home services.
            <br />
            <span className="text-sm">Save time, save money, live better.</span>
          </p>

          <div className="flex gap-4 mt-5 text-2xl">
            {socialLinks.map(({ icon, href }, i) => (
              <a key={i} href={href} className="hover:text-black transition">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline hover:text-black transition text-lg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((service, i) => (
              <li key={i} className="hover:text-black transition text-lg">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 font-poppins">
            Contact Us
          </h3>
          <ul className="space-y-3 text-base font-poppins">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <span>
                Mira Road, Gaurav Valley,
                <br /> near JP Infra, 401107
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaCar className="text-lg" />
              <span>On-Site Car Service Available</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-lg" />
              <a href="tel:+919890003000" className="hover:underline">
                +91 98900 03000
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a
                href="mailto:official.stonora@gmail.com"
                className="hover:underline"
              >
                official.stonora@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center border-t border-deepForest mt-10 pt-4 text-sm font-poppins">
        © 2025 Stonora. All rights reserved. |{" "}
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
