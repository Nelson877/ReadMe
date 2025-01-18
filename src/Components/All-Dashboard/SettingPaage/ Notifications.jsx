import React from 'react'

const  Notifications = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <p className="text-sm text-gray-600">Manage your notification preferences.</p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Manage Notifications
          </button>
        </div>
  )
}

export default  Notifications