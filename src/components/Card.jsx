import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-xl mx-auto">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-deepForest">{title}</h2>
      )}
      <div>{children}</div>
    </div>
  );
}
