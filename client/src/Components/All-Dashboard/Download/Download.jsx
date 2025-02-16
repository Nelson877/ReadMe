import React, { useState } from 'react';
import { FaBookReader } from "react-icons/fa";
import BookReader from './BookReader';
import { books } from '../../AllAPI/api';
const Download = () => {
    const [selectedBook, setSelectedBook] = useState(null);




  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <div 
            key={book.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group"
          >
            <img 
              src={book.cover} 
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 truncate">{book.title}</h3>
              <p className="text-gray-600 text-sm">{book.author}</p>
            </div>
            <button 
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setSelectedBook(book)}
            >
              <FaBookReader className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookReader 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </div>
  );
};

export default Download;