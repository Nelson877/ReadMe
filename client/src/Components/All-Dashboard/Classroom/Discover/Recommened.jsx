import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { X } from "lucide-react";
import { initialBooks } from '../../../AllAPI/api';

const Recommended = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);



  const additionalBooks = [...initialBooks];
  const displayedBooks = showAll ? [...initialBooks, ...additionalBooks] : initialBooks;

  return (
    <div className="w-full bg-gray-50 mt-10 rounded-xl relative">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Recommended
            </h2>
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center bg-orange-200 p-1 rounded-md text-orange-500 hover:text-orange-600 text-sm sm:text-base"
            >
              {showAll ? "Show Less" : "See All"}
              <FaAngleRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ${showAll ? 'transition-all duration-300' : ''}`}>
            {displayedBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="aspect-[2/3] relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 truncate">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-gray-600 mb-4">{selectedBook.author}</p>
            <div className="prose max-w-none">
              {selectedBook.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommended;