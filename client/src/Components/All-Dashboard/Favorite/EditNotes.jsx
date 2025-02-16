import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const EditNotes = ({ book, onSave, onClose }) => {
  const [notes, setNotes] = useState({
    personalNotes: book.personalNotes || '',
    readingStatus: book.readingStatus || 'Want to Read',
    progress: book.progress || '0%',
    personalRating: book.personalRating || 0,
    dateFinished: book.dateFinished || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 m-5 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Notes - {book.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Reading Status</label>
            <select 
              className="w-full p-2 border rounded"
              value={notes.readingStatus}
              onChange={(e) => setNotes({...notes, readingStatus: e.target.value})}
            >
              <option>Want to Read</option>
              <option>Currently Reading</option>
              <option>Finished</option>
            </select>
          </div>

          {notes.readingStatus === 'Currently Reading' && (
            <div>
              <label className="block text-sm font-medium mb-1">Progress</label>
              <input 
                type="text"
                className="w-full p-2 border rounded"
                value={notes.progress}
                onChange={(e) => setNotes({...notes, progress: e.target.value})}
                placeholder="e.g., 45%"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Personal Notes</label>
            <textarea 
              className="w-full p-2 border rounded h-32"
              value={notes.personalNotes}
              onChange={(e) => setNotes({...notes, personalNotes: e.target.value})}
              placeholder="Add your thoughts, quotes, or notes about the book..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
            <input 
              type="number"
              min="1"
              max="5"
              className="w-full p-2 border rounded"
              value={notes.personalRating}
              onChange={(e) => setNotes({...notes, personalRating: Number(e.target.value)})}
            />
          </div>

          {notes.readingStatus === 'Finished' && (
            <div>
              <label className="block text-sm font-medium mb-1">Date Finished</label>
              <input 
                type="date"
                className="w-full p-2 border rounded"
                value={notes.dateFinished}
                onChange={(e) => setNotes({...notes, dateFinished: e.target.value})}
              />
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <button 
              type="submit"
              className=" flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
                <FaSave />
              Save Changes
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;