import React, { useState, useEffect } from "react";
import {
  FaHeadphones,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
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

  const menuItems = [
    { id: "Classroom", icon: <MdOutlineHomeWork size={20} />, label: "Classroom" },
    { id: "Homework", icon: <FaRegCalendarCheck size={20} />, label: "Homework" },
    { id: "Audio Books", icon: <FaHeadphones size={20} />, label: "Audio Books" },
    { id: "My Library", icon: <FaFolderOpen size={20} />, label: "My Library" },
    { id: "Classmates", icon: <FaUserFriends size={20} />, label: "Classmates" },
    { id: "Settings", icon: <FaCog size={20} />, label: "Settings" },
    { id: "Help", icon: <FaQuestionCircle size={20} />, label: "Help" }
  ];

  const SidebarContent = ({ showLabels = true }) => (
    <div className="flex flex-col h-full relative">
      {/* Desktop Toggle Button */}
      <button
        onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
        className="hidden lg:flex absolute -right-4 top-8 w-8 h-8 bg-white rounded-full shadow-md items-center justify-center text-gray-600 hover:bg-gray-50"
      >
        {isDesktopSidebarOpen ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
      </button>

      {/* Profile Section */}
      <div className={`pt-8 pb-6 px-4 ${!showLabels && 'flex justify-center'}`}>
        <div className="flex flex-col items-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-4"
          />
          {showLabels && <h3 className="text-xl font-medium text-gray-800">Kamayel Alpha</h3>}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSectionChange(item.id)}
            className={`w-full flex items-center ${showLabels ? 'gap-3 px-6' : 'justify-center px-4'} py-3 text-gray-600 hover:bg-gray-50 transition-colors ${
              activeSection === item.id
                ? "bg-gray-100 text-orange-500 font-medium"
                : ""
            }`}
            title={!showLabels ? item.label : undefined}
          >
            <span className={activeSection === item.id ? "text-orange-500" : "text-gray-400"}>
              {item.icon}
            </span>
            {showLabels && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-white shadow-lg text-gray-600 hover:bg-gray-50"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar for large screens */}
        <div 
          className={`hidden lg:block fixed h-screen bg-white shadow-lg transition-all duration-300 ${
            isDesktopSidebarOpen ? 'w-64' : 'w-20'
          }`}
        >
          <SidebarContent showLabels={isDesktopSidebarOpen} />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <SidebarContent showLabels={true} />
        </div>

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${isDesktopSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pt-12 lg:pt-0">
              {activeSection}
            </h1>
            <div>{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;