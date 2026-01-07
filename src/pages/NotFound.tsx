import { Button } from "@headlessui/react";
import React, { useState } from "react";

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const colors = [
    { name: "Green", iconColor: "text-green-500", bgColor: "bg-green-500" },
    { name: "Blue", iconColor: "text-blue-500", bgColor: "bg-blue-500" },
    { name: "Yellow", iconColor: "text-yellow-500", bgColor: "bg-yellow-500" },
    { name: "Black", iconColor: "text-black-500", bgColor: "bg-black" },
    { name: "Reset", iconColor: "text-gray-500", bgColor: "bg-gray-500" },
  ];

  const [currentColor, setCurrentColor] = useState(
    colors.find((item) => item.iconColor === "text-gray-500")
  );

  return (
    <div
      className={
        "min-h-screen bg-gray-900 flex items-center justify-center px-4"
      }
    >
      <div className="w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-6xl text-white font-bold bg-clip-text">404</h1>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
              <svg
                className={`w-16 h-16 ${currentColor?.iconColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div
              className={`absolute -top-1 -right-1 w-6 h-6 ${currentColor?.bgColor} rounded-full animate-ping`}
            />
            <div
              className={`absolute -top-1 -right-1 w-6 h-6 ${currentColor?.bgColor} rounded-full`}
            />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Go Back
          </button>
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 cursor-pointer"
          >
            Go Home
          </button>
        </div>
        {/* Some Play Area */}
        <div className="m-2 p-2 rounded-lg">
          <p className="text-white mb-2 mt-2 text-xl">
            You can change the color of emoji
          </p>
          {colors.map((item, index) => (
            <Button
              key={index}
              className={`m-2 p-2 rounded-xl text-white cursor-pointer ${item.bgColor}`}
              onClick={() => setCurrentColor(item)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
