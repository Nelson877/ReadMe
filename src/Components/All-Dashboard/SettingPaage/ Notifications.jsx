import React, { useState } from "react";
import ManageNotifications from "./ManageNotifications/ManageNotifications";

const Notifications = () => {
  const [showNotification, setNotification] = useState(false);

  const handleNotificationClick = () => {
    setNotification((presvState) => !presvState);
  };

  const handleClose = () => {
    setNotification(false);
  };

  return (
    <div className='bg-white shadow-md rounded-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Notifications</h2>
      <p className='text-sm text-gray-600'>
        Manage your notification preferences.
      </p>
      <button
        onClick={handleNotificationClick}
        className='mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600'
      >
        Manage Notifications
      </button>
      {showNotification && <ManageNotifications  onClose={handleClose}/>}
    </div>
  );
};

export default Notifications;
