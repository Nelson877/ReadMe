import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaBell, FaTimes, FaTrash } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children, title, buttonRef }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="absolute right-2 top-14 bg-white rounded-lg shadow-lg w-80 border z-50"
    >
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaTimes size={16} />
        </button>
      </div>
      {children}
    </div>
  );
};

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-2 top-14 bg-white rounded-lg shadow-lg w-72 border z-50 p-4">
      <h3 className="text-sm font-semibold mb-2">Delete Notification</h3>
      <p className="text-xs text-gray-600 mb-4">
        Are you sure you want to delete this notification?
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-3 py-1 text-sm rounded-md border hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const TopNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const buttonRef = useRef(null);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New message from John", time: "5m ago" },
    { id: 2, text: "Your post was liked", time: "1h ago" },
    { id: 3, text: "Meeting reminder: Team sync", time: "2h ago" }
  ]);

  const handleDelete = (notification) => {
    setSelectedNotification(notification);
    setIsDeleteDialogOpen(true);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedNotification) {
      setNotifications(notifications.filter(n => n.id !== selectedNotification.id));
    }
    setIsDeleteDialogOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div className="relative">
      <nav className="w-full h-16 px-4 border-b flex items-center justify-between bg-white">
        {/* Search Area */}
        <div className="relative w-64">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
            <FaSearch size={18} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 h-9 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:border-transparent"
          />
        </div>

        {/* Notification Area */}
        <div className="flex items-center">
          <button 
            ref={buttonRef}
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaBell className='' size={20} />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>
        </div>
      </nav>

      {/* Notification Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Notifications"
        buttonRef={buttonRef}
      >
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500 text-sm">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 border-b hover:bg-gray-50 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{notification.text}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(notification)}
                    className="ml-2 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete notification"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Modal>

      {/* Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <ConfirmationDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default TopNav;