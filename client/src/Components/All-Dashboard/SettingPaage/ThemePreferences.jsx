import React, { useState } from "react";
import ChangeTheme from "./ChangeTheme/ChangeTheme";
import { ThemeProvider } from "./ChangeTheme/ThemeContext";

const ThemePreferences = () => {
  // State to manage the visibility of the ChangeTheme component
  const [isThemeVisible, setIsThemeVisible] = useState(false);

  // Toggle function to show/hide the ChangeTheme component
  const toggleThemeVisibility = () => {
    setIsThemeVisible((prevState) => !prevState);
  };

  return (
    <div className='bg-white shadow-md rounded-md p-4'>
      <h2 className='text-lg font-semibold mb-2'>Theme Preferences</h2>
      <p className='text-sm text-gray-600'>
        Choose your preferred theme (light/dark).
      </p>
      <button
        onClick={toggleThemeVisibility}
        className='mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
      >
        Change Theme
      </button>
      {isThemeVisible && (
        <ThemeProvider>
          <ChangeTheme />
        </ThemeProvider>
      )}
    </div>
  );
};

export default ThemePreferences;
