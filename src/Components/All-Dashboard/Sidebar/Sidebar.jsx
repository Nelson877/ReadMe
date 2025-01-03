import React, { useState, useEffect } from "react";
import {
  FaHeadphones,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import Profile from "../../../assets/images/profile.png";
import Classroom from "../Classroom/Classroom";
import Homework from "../Homework/Homework";
import AudioBooks from "../AudioBooks/AudioBooks";
import MyLibrary from "../MyLibrary/MyLibrary";
import Classmates from "../Classmates/Classmates";
import Settings from "../Settings/Settings";
import Help from "../Help/Help";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("Classroom");

  // Load active section from localStorage
  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  // Save active section to localStorage
  const handleSectionChange = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Classroom":
        return <Classroom />;
      case "Homework":
        return <Homework />;
      case "Audio Books":
        return <AudioBooks />;
      case "My Library":
        return <MyLibrary />;
      case "Classmates":
        return <Classmates />;
      case "Settings":
        return <Settings />;
      case "Help":
        return <Help />;
      default:
        return <Classroom />;
    }
  };

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='w-64 bg-orange-500 p-6'>
        {/* Profile Section */}
        <div className='flex flex-col items-center space-y-2 p-4'>
          {/* Profile Image */}
          <img
            src={Profile}
            alt='Profile'
            className='w-20 h-20 rounded-full border-2 border-orange-500'
          />

          {/* Profile Name */}
          <h3 className='text-white text-lg font-semibold'>Dzik Nel</h3>
        </div>

        {/* Line below the profile */}
        <div className='border-t border-white my-4'></div>

        {/* Navigation Links */}
        <nav className='space-y-4'>
          <button
            onClick={() => handleSectionChange("Classroom")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Classroom" && "font-bold"
            }`}
          >
            <MdOutlineHomeWork />
            <span>Classroom</span>
          </button>
          <button
            onClick={() => handleSectionChange("Homework")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Homework" && "font-bold"
            }`}
          >
            <FaRegCalendarCheck />
            <span>Homework</span>
          </button>
          <button
            onClick={() => handleSectionChange("Audio Books")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Audio Books" && "font-bold"
            }`}
          >
            <FaHeadphones />
            <span>Audio Books</span>
          </button>
          <button
            onClick={() => handleSectionChange("My Library")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "My Library" && "font-bold"
            }`}
          >
            <FaFolderOpen />
            <span>My Library</span>
          </button>
          <button
            onClick={() => handleSectionChange("Classmates")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Classmates" && "font-bold"
            }`}
          >
            <FaUserFriends />
            <span>Classmates</span>
          </button>

          {/* Line above Settings */}
          <div className='border-t border-white my-4'></div>

          <button
            onClick={() => handleSectionChange("Settings")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Settings" && "font-bold"
            }`}
          >
            <FaCog />
            <span>Settings</span>
          </button>
          <button
            onClick={() => handleSectionChange("Help")}
            className={`flex items-center text-white hover:text-black space-x-3 ${
              activeSection === "Help" && "font-bold"
            }`}
          >
            <FaQuestionCircle />
            <span>Help</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-6'>
        <h1 className='text-2xl font-bold mb-4'>{activeSection}</h1>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
