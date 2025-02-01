import React, { useState } from "react";
import { Download, Heart } from "lucide-react";
import {bestbooks} from "../../../AllAPI/api";

const MyLibraryBooks = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBestBooks = bestbooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {filteredBestBooks.map((book) => (
        <div
          key={book.id}
          className='bg-white rounded-lg shadow-md overflow-hidden'
        >
          <div className='relative'>
            <img
              src={book.coverUrl}
              alt={book.title}
              className='w-full h-48 object-cover'
            />
            {/* icons selections  */}
            <div className='absolute top-2 right-2 flex gap-2'>
              <button className='p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors'>
                <Download className='w-5 h-5 text-gray-600' />
              </button>
              <button className='p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors'>
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(book.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>
            {/* end icons selections  */}
          </div>

          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-1'>{book.title}</h3>
            <p className='text-gray-600 mb-3'>{book.author}</p>

            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div className='text-sm text-gray-600'>
                  Progress:{" "}
                  <span className='font-semibold'>{book.progress}%</span>
                </div>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200'>
                <div
                  style={{ width: `${book.progress}%` }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyLibraryBooks;
