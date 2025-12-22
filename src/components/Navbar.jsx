import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/stonora-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", isWhatsApp: true, phoneNumber: "+919890003000" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user && user.email) {
      setIsAuthenticated(true);
      setUserInitial(user.email.charAt(0).toUpperCase());
    } else {
      setIsAuthenticated(false);
      setUserInitial("");
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setUserInitial("");
  };

  const whatsappLink = (phone) => `https://wa.me/${phone}`;

  const MenuItems = ({ isMobile }) => (
    <>
      {navItems.map(({ label, href, isWhatsApp, phoneNumber }) => {
        const baseClasses =
          "transition-colors duration-200 focus:outline-none focus-visible:ring-2";
        const normalClasses = isMobile
          ? "block text-white hover:text-richGold"
          : "hover:text-richGold";

        return (
          <li key={label}>
            {isWhatsApp ? (
              <a
                href={whatsappLink(phoneNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${normalClasses} ${baseClasses}`}
                onClick={() => isMobile && setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                to={href}
                className={`${normalClasses} ${baseClasses}`}
                onClick={() => isMobile && setOpen(false)}
              >
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-deepForest text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Stonora Logo" className="h-10 md:h-12" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus-visible:ring-2 focus-visible:ring-richGold"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <MenuItems isMobile={false} />

          {!isAuthenticated ? (
            <Link
              to="/signin"
              className="bg-richGold text-deepForest px-3 py-1 rounded font-semibold"
            >
              Login
            </Link>
          ) : (
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-richGold text-deepForest font-semibold">
                {userInitial}
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white text-deepForest rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden space-y-3 px-4 pb-4">
          <MenuItems isMobile={true} />

          {!isAuthenticated ? (
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="block bg-richGold text-deepForest px-3 py-2 rounded font-semibold"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="block text-white hover:text-richGold"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="block text-white hover:text-richGold"
              >
                Logout
              </button>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
