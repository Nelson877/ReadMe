import React, { useState } from 'react';
import EditProfile from './EditProfile/EditProfile';

const ProfileSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">Profile Settings</h2>
      <p className="text-sm text-gray-600">
        Update your name, email, and other profile information.
      </p>
      <button
        onClick={handleOpenModal}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Edit Profile
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-md shadow-lg w-96 p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <EditProfile />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
