import React from "react";
import { Link } from "react-router-dom";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 animate-pulse"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <Link to="/" className="flex justify-center mb-8">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-16 w-auto animate-pulse"
          />
        </Link>

        {/* Loading Spinner */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-20 h-20 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin absolute top-0 left-0"></div>

          {/* Middle spinning ring */}
          <div className="w-14 h-14 border-4 border-indigo-400/20 rounded-full absolute top-3 left-3"></div>
          <div
            className="w-14 h-14 border-4 border-transparent border-t-indigo-400 rounded-full animate-spin absolute top-3 left-3"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          ></div>

          {/* Inner spinning ring */}
          <div className="w-8 h-8 border-4 border-indigo-300/20 rounded-full absolute top-6 left-6"></div>
          <div
            className="w-8 h-8 border-4 border-transparent border-t-indigo-300 rounded-full animate-spin absolute top-6 left-6"
            style={{ animationDuration: "0.6s" }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-white animate-pulse">
            Loading...
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Please wait while we load your content
          </p>
        </div>

        {/* Loading Dots */}
        <div className="mt-6 flex gap-2">
          <div
            className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 translate-y-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75 animate-pulse"
        />
      </div>
    </div>
  );
}
