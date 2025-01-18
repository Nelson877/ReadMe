import React from 'react'

const ThemePreferences = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
    <h2 className="text-lg font-semibold mb-2">Theme Preferences</h2>
    <p className="text-sm text-gray-600">Choose your preferred theme (light/dark).</p>
    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
      Change Theme
    </button>
  </div>
  )
}

export default ThemePreferences