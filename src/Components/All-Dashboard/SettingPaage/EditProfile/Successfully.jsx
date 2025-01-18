import React from 'react';

const Successfully = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Profile Updated Successfully!</h2>
        <p className="text-gray-700 mb-6">
          Your changes have been saved. You can continue using your account with the updated information.
        </p>
        <button
          onClick={() => window.location.reload()} // Adjust this to navigate elsewhere if needed
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Successfully;
