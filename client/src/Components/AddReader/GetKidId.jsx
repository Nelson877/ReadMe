import React from 'react';
import { LiaCheckCircleSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const GetKidId = ({ kidId, onClose }) => {
  const navigate = useNavigate();
  
  // Function to handle printing and navigation to home
  const handleSaveAndNavigate = () => {
    // First print the page
    window.print();
    
    setTimeout(() => {
      // Navigate to home page
      navigate('/');
    }, 500);
  };
  
  // Function to directly navigate to dashboard (auto-login)
  const handleStartReading = () => {
    // Store the kid's info in localStorage (simplified)
    const readerInfo = {
      kidId: kidId
      // Other reader info would typically come from API response
    };
    
    localStorage.setItem('readerInfo', JSON.stringify(readerInfo));
    
    // Navigate to dashboard
    navigate('/user-readme-dash-board');
  };
  
  // Stop event propagation to prevent modal close when clicking inside
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div onClick={handleModalClick} className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="mb-2 flex justify-center">
          <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center">
            <LiaCheckCircleSolid className="h-20 w-20 text-orange-500" />
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold text-orange-500 mb-2 text-center">
          Successfully!
        </h1>
        <p className="text-slate-800 font-medium text-sm mb-4 text-center">
          Your child's ID has been successfully generated and is ready for use.
        </p>
            
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-slate-700 font-medium mb-2 text-center">
            ID: <span className="font-bold">{kidId}</span>
          </p>
          <p className="text-sm text-slate-500 text-center">
            Please save this ID for future logins
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <button
            className="p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium"
            onClick={handleSaveAndNavigate}
          >
            Save ID Card
          </button>
          
          <button
            className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
            onClick={handleStartReading}
          >
            Start Reading Now
          </button>
          
          <button
            className="p-4 border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-colors font-medium"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetKidId;