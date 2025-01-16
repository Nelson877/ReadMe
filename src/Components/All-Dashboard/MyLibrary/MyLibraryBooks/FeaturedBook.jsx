import React from "react";
import { FaEye } from "react-icons/fa6";

const FeaturedBook = () => {
  return (
    <div className="relative w-full mt-10">
      {/* Main content container */}
      <div className="relative w-full bg-gray-50 rounded-md max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Left side content */}
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Refactoring
              <br />
              User Interface
            </h1>
            <button className="flex items-center mt-8 space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <FaEye size={20} />
              <span className="text-lg font-medium">Continue Reading</span>
            </button>
          </div>

          {/* Book cover */}
          <div className="relative flex justify-center sm:justify-end">
            <div className="w-48 sm:w-56 md:w-64 lg:w-72">
              <img
                src="https://m.media-amazon.com/images/I/81wVn9L-KfL._AC_UF1000,1000_QL80_.jpg"
                alt="Refactoring UI Book"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full blur-2xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-tl from-gray-200 to-gray-400 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default FeaturedBook;
