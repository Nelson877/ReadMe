import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

const ChangeTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleThemeChange = (newTheme) => {
    updateTheme(newTheme);
  };

  return (
    <div className={`
      max-w-4xl mx-auto p-6
      ${theme === 'dark' ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'}
      transition-colors duration-200
    `}>
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'dark:text-white' : 'text-black'}`}>
          Theme Settings
        </h1>
        <p className={`${theme === 'dark' ? 'dark:text-gray-300' : 'text-gray-600'}`}>
          Choose your preferred theme for the library interface
        </p>
      </div>

      <div className={`
        rounded-lg shadow-sm border p-6
        ${theme === 'dark' 
          ? 'dark:bg-gray-800 dark:border-gray-700' 
          : 'bg-white border-gray-200'}
      `}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Light Theme Option */}
          <div 
            onClick={() => handleThemeChange('light')}
            className={`
              cursor-pointer rounded-lg border-2 p-6
              ${theme === 'light' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-700 hover:border-gray-600 dark:bg-gray-700'}
              transition-all duration-200
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Sun className="h-6 w-6 text-yellow-500" />
                <h2 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>Light Theme</h2>
              </div>
              <div className={`
                w-4 h-4 rounded-full border-2
                ${theme === 'light'
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300 dark:border-gray-500'}
              `} />
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              A bright, clean interface perfect for daytime use with high contrast and clear visibility.
            </p>
          </div>

          {/* Dark Theme Option */}
          <div 
            onClick={() => handleThemeChange('dark')}
            className={`
              cursor-pointer rounded-lg border-2 p-6
              ${theme === 'dark' 
                ? 'border-blue-500 dark:bg-gray-700' 
                : 'border-gray-200 hover:border-gray-300'}
              transition-all duration-200
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Moon className="h-6 w-6 text-blue-500" />
                <h2 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>Dark Theme</h2>
              </div>
              <div className={`
                w-4 h-4 rounded-full border-2
                ${theme === 'dark'
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'}
              `} />
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Easy on the eyes with darker colors, perfect for night time reading and reduced eye strain.
            </p>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>Your theme preference will be saved automatically and applied across all devices when you're signed in.</p>
        </div>
      </div>
    </div>
  );
};

export default ChangeTheme;