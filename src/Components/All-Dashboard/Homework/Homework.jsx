import React from 'react';
import { Download } from 'lucide-react';
import { FaEye } from "react-icons/fa6";

const Homework = ({ selectedBook }) => {
  if (!selectedBook) return null;

  return (
    <div className="relative w-full mt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Book Cover */}
          <div className="md:w-1/3">
            <img
              src={selectedBook.coverUrl}
              alt={selectedBook.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{selectedBook.title}</h1>
              <p className="text-gray-600">{selectedBook.author}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <FaEye className="w-5 h-5" />
                <span>Reading Progress: {selectedBook.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${selectedBook.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Download Options */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Download Options</h2>
              
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium">PDF Version</h3>
                  <p className="text-sm text-gray-500">Best for desktop reading</p>
                </div>
                <Download className="w-5 h-5 text-gray-600" />
              </button>

              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium">EPUB Version</h3>
                  <p className="text-sm text-gray-500">Best for mobile devices</p>
                </div>
                <Download className="w-5 h-5 text-gray-600" />
              </button>

              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium">MOBI Version</h3>
                  <p className="text-sm text-gray-500">Best for Kindle devices</p>
                </div>
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;