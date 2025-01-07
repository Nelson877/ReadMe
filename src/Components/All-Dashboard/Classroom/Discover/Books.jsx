import React, { useState } from "react";
import { LuArrowDownNarrowWide } from "react-icons/lu";

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

  const allBooks = [
    {
      title: "The Bees",
      author: "Laline Paull",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384018069i/18652002.jpg",
      category: "Sci-Fi",
      rating: 4.5,
    },
    {
      title: "Real Help",
      author: "Ayodeji Awosika",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578598360i/50372880.jpg",
      category: "Business",
      rating: 4.2,
    },
    {
      title: "The Fact of a Body",
      author: "Alexandria Marzano-Lesnevich",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1496316115i/32076678.jpg",
      category: "Drama",
      rating: 4.8,
    },
    {
      title: "The Room",
      author: "Jonas Karlsson",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394827919i/17830958.jpg",
      category: "Fantasy",
      rating: 4.3,
    },
    {
      title: "Through the Breaking",
      author: "Cate Emond",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1482291062i/33117798.jpg",
      category: "Education",
      rating: 4.6,
    },
    {
      title: "World Atlas",
      author: "John Smith",
      cover: "https://m.media-amazon.com/images/I/81CUJcDrowL._AC_UF1000,1000_QL80_.jpg",
      category: "Geography",
      rating: 4.4,
    },
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
