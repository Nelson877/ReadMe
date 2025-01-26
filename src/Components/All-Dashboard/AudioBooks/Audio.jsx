import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Audio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const audiobooks = [
    {
      id: 1,
      title: 'Becoming',
      author: 'Michelle Obama',
      narrator: 'Michelle Obama',
      runtime: '19 hrs 3 mins',
      genre: 'Biography',
      cover: 'https://example.com/becoming.jpg',
      audioUrl: 'https://example.com/audio/becoming.mp3',
      description: 'A deeply personal memoir by Michelle Obama, sharing her journey from childhood to becoming the First Lady of the United States.'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      narrator: 'James Clear',
      runtime: '5 hrs 35 mins',
      genre: 'Self-Help',
      cover: 'https://example.com/atomic-habits.jpg',
      audioUrl: 'https://example.com/audio/atomic-habits.mp3',
      description: 'Transformative book on how tiny changes can lead to remarkable results in personal and professional life.'
    },
    {
      id: 3,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      narrator: 'Roger Wayne',
      runtime: '6 hrs 15 mins',
      genre: 'Philosophy',
      cover: 'https://example.com/subtle-art.jpg',
      audioUrl: 'https://example.com/audio/subtle-art.mp3',
      description: 'A counterintuitive approach to living a good life, focusing on what truly matters.'
    }
  ];

  const filteredBooks = audiobooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div 
            key={book.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openBookModal(book)}
          >
            <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold truncate">{book.title}</h3>
              <p className="text-gray-600 truncate">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>

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