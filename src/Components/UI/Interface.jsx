import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import UIimage from "../../assets/images/ui.webp";

const Interface = () => {
const [isLoading, setLoading] = useState(true);
const navigate = useNavigate();


useEffect(() =>{
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2000)

    return() => clearTimeout(timer)
}, [])

if (isLoading){
    return <Loading/>
}

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="px-8 py-4 bg-white shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center">
            {/* <BookOpenIcon className="h-6 w-6 text-white" /> */}
          </div>
          <span className="text-2xl font-bold text-orange-500">ReadMe</span>
        </div>
        <button 
          onClick={() => navigate('/login-form')}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
        >
          Get Started
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-slate-800 leading-tight">
              Discover Your Next 
              <span className="text-orange-500"> Reading Adventure</span>
            </h1>
            <p className="text-lg text-slate-600">
              Join our community of book lovers. Access thousands of books, share your thoughts, and connect with fellow readers worldwide.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/explore')}
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
            >
              Explore Books
            </button>
            <button 
              onClick={() => navigate('/login-form')}
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md hover:bg-orange-50 transition-colors font-medium"
            >
              Join Now
            </button>
          </div>
          <div className="flex items-center gap-8 text-slate-600">
            <div>
              <p className="text-3xl font-bold">50K+</p>
              <p>Books</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100K+</p>
              <p>Active Readers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9</p>
              <p>User Rating</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-50 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5"/>
          <img 
            src={UIimage}
            alt="Person reading"
            className="w-full max-w-lg mx-auto relative z-10"
          />
        </div>
      </div>
    </div>
  );
};
export default Interface