import React, { useState } from "react";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { allBooks } from "../../../AllAPI/api";

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const categories = [
    "All",
    "Sci-Fi",
    "Fantasy",
    "Drama",
    "Business",
    "Education",
    "Geography",
  ];

  

  const filteredBooks =
    activeCategory === "All"
      ? allBooks
      : allBooks.filter((book) => book.category === activeCategory);

  return (
    <div className='w-full bg-gray-50 mt-10 rounded-xl p-4'>
      {/* Header with Menu Icon */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold text-navy-900'>
          Categories
        </h2>
        <button
          className='sm:hidden  bg-orange-200 p-1 rounded-md text-orange-500 hover:text-orange-600 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <LuArrowDownNarrowWide size={24} />
        </button>
      </div>

      {/* Scrollable or Toggleable Categories */}
      <div
        className={`flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 transition-all duration-300 
          ${
            isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          } sm:max-h-none`}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setIsMenuOpen(false); // Close menu after selection
            }}
            className={`px-3 py-2 rounded-full text-sm sm:text-base text-center
              ${
                category === activeCategory
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Grid for Books */}
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4'>
        {filteredBooks.map((book, index) => (
          <div key={index} className='relative cursor-pointer group'>
            <div className='relative aspect-[3/4] rounded-xl overflow-hidden mb-2'>
              <img
                src={book.cover}
                alt={book.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-2 right-2 bg-black bg-opacity-50 text-yellow-400 px-2 py-1 rounded-lg text-xs sm:text-sm flex items-center gap-1'>
                ★ {book.rating}
              </div>
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200' />
            </div>
            <h3 className='font-semibold text-gray-900 text-sm sm:text-base truncate'>
              {book.title}
            </h3>
            <p className='text-gray-600 text-xs sm:text-sm truncate'>
              {book.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
