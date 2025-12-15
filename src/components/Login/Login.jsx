import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../../assets/stonora-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { emailOrPhone, password } = formData;

    if (!emailOrPhone || !password) {
      setError("Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        (u.email === emailOrPhone || u.phone === emailOrPhone) &&
        u.password === password
    );

    if (user) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-deepForest px-4">
      <div className="w-full max-w-md bg-transparent rounded-xl shadow-lg p-8 text-white border border-richGold">
        <div className="flex flex-col items-center justify-center bg-deepForest rounded-lg py-6 px-4 mb-6">
          <img src={logo} alt="Stonora Logo" className="h-16 mb-2" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-richGold">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Login to continue your experience
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-500 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-richGold">
            <FaEnvelope className="text-richGold mr-2" />
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter email or phone"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-500 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-richGold relative">
            <FaLock className="text-richGold mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 text-sm text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="text-right text-sm text-richGold hover:underline cursor-pointer">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full bg-richGold text-deepForest font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span
              className="text-richGold font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
