import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AudiobookCards from './AudiobookCards';

const Audio = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const openBookModal = (book) => {
    setSelectedBook(book);
  };

  const closeBookModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="relative w-64 mb-10">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
          <FaSearch size={18} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-8 h-9 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:border-transparent"
        />
      </div>

      {/* Audiobook Cards */}
      <AudiobookCards onBookSelect={openBookModal} />

      {/* Book Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeBookModal}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-gray-600 mb-2">by {selectedBook.author}</p>
            <p className="text-gray-600 mb-4">{selectedBook.description}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Runtime: {selectedBook.runtime}</p>
              <p className="text-blue-500">Genre: {selectedBook.genre}</p>
            </div>
            <audio
              controls
              className="w-full"
              src={selectedBook.audioUrl}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default Audio;