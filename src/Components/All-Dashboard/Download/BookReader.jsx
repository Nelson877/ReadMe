import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MdClose } from "react-icons/md";

const BookReader = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{book.title}</h1>
        <button 
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900"
        >
          <MdClose/>
        </button>
      </div>

      <div className="flex-1 overflow-auto p-8 max-w-3xl mx-auto">
        <div className="prose lg:prose-xl">
          <p>Chapter {currentPage}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="bg-white border-t p-4 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeft size={20} /> Previous
        </button>
        <span className="text-gray-600">Page {currentPage}</span>
        <button 
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-100"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BookReader;