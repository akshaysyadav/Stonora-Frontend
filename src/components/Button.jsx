import React from "react";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-richGold hover:bg-deepForest text-white font-semibold px-5 py-2 rounded-lg shadow transition"
    >
      {text}
    </button>
  );
}
