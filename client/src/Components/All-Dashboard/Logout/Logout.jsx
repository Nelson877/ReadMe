import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication tokens/data
    localStorage.removeItem('token'); // or sessionStorage
    localStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login-form');
  };

  return (
    <div className="mt-[10%] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <LogOut className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-600 mt-2">Are you sure you want to logOut?</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            LogOut
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          You'll need to logIn again to access your account
        </p>
      </div>
    </div>
  );
};

export default Logout;