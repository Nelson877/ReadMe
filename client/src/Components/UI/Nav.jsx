import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
  return (
    <nav className='px-8 py-4 bg-white shadow-sm flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <div className='h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center'></div>
        <span className='text-2xl font-bold text-orange-500'>ReadMe</span>
      </div>
      <button
        onClick={() => navigate("/privacy-help")}
        className='bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium'
      >
       Privacy Help
      </button>
    </nav>
  );
};

export default Nav;
