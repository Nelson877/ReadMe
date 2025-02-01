import React, { useState } from "react";
import audiobooks from "./audiobooksApi";

const AudiobookCards = ({ onBookSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = audiobooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          className='bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105'
          onClick={() => onBookSelect(book)}
        >
          <img
            src={book.cover}
            alt={book.title}
            className='w-full h-48 object-cover'
          />
          <div className='p-4'>
            <h3 className='text-xl font-bold truncate'>{book.title}</h3>
            <p className='text-gray-600 truncate'>by {book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudiobookCards;