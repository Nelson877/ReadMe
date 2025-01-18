import React, { useState } from 'react';
import DeleteAccount from './DeleteAccount/DeleteAccount';

const AccountManagement = () => {
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteAccount(true);
  };

  const handleCloseModal = () => {
    setShowDeleteAccount(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">Account Management</h2>
      <p className="text-sm text-gray-600">Manage your account settings and preferences.</p>
      <button 
        className="mt-2 px-4 py-2  bg-orange-500 text-white rounded-md hover:bg-orange-600"
        onClick={handleDeleteClick}
      >
        Delete Account
      </button>
      {showDeleteAccount && <DeleteAccount onClose={handleCloseModal} />}
    </div>
  );
};

export default AccountManagement;
