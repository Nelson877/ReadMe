import React, { useState } from 'react';
import EditNotes from './EditNotes';
import { myFavoriteBooksData } from '../../AllAPI/api';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CiBookmarkRemove, CiEdit } from 'react-icons/ci';

const Favorite = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReadingModalOpen, setIsReadingModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [myFavoriteBooks, setMyFavoriteBooks] = useState(myFavoriteBooksData);

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const handleReadClick = (book) => {
    setSelectedBook(book);
    setIsReadingModalOpen(true);
  };

  const handleSaveNotes = (updatedNotes) => {
    setMyFavoriteBooks(books => 
      books.map(book => 
        book.id === selectedBook.id 
          ? { ...book, ...updatedNotes }
          : book
      )
    );
    setIsEditModalOpen(false);
    setSelectedBook(null);
  };

  const handleDeleteBook = (bookId) => {
    setMyFavoriteBooks(books => books.filter(book => book.id !== bookId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white">
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {myFavoriteBooks.map(book => (
            <div 
              key={book.id} 
              className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleReadClick(book)} // Clicking the book opens the reading modal
            >
              <div className="flex gap-4">
                <img 
                  src={book.cover}
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded shadow"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                  <p className="text-gray-600">by {book.author}</p>
                  <p className="text-sm text-gray-500">{book.category}</p>
                  
                  <div className="mt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span>Rating: {book.rating} ⭐</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-500">Added: {book.dateAdded}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-gray-700">My Notes</h3>
                  <p className="text-sm text-gray-600">{book.personalNotes}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Status: {book.readingStatus}
                    {book.progress && ` (${book.progress})`}
                  </span>
                  {book.dateFinished && (
                    <span className="text-sm text-gray-500">
                      Finished: {book.dateFinished}
                    </span>
                  )}
                </div>

                <div className="border-t pt-3">
                  <h3 className="font-medium mb-2 text-gray-700">Library Status</h3>
                  <p className="text-sm text-gray-600">{book.libraryStatus}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering book reading modal
                      handleEditClick(book);
                    }}
                    className="text-sm px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  >
                    <CiEdit />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteBook(book.id);
                    }}
                    className="text-sm px-4 py-2 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Notes Modal */}
        {isEditModalOpen && selectedBook && (
          <EditNotes
            book={selectedBook}
            onSave={handleSaveNotes}
            onClose={() => {
              setIsEditModalOpen(false);
              setSelectedBook(null);
            }}
          />
        )}

        {/* Reading Modal */}
        {isReadingModalOpen && selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
              <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
              <p className="text-gray-600 mb-4">by {selectedBook.author}</p>
              <div className="h-96 overflow-y-auto border p-4">
                <p className="text-gray-700 text-sm">{selectedBook.content}</p>
              </div>
              <button 
                onClick={() => setIsReadingModalOpen(false)}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
