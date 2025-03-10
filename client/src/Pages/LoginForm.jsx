import { useState, useEffect } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import ReadingImage from "../assets/images/reaading.png";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [kidId, setKidId] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  // Define API base URL
  const API_URL = 'http://localhost:5000';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    setKidId(e.target.value);
    // Clear any previous errors when user types
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!kidId.trim()) {
      setError("Please enter your kid's ID");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      // Make API call to verify kid ID
      // Fix: Add proper error handling for network issues
      const response = await fetch(`${API_URL}/api/addNewReader/reader/${kidId.trim()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      
      // Check if response exists before parsing JSON
      if (!response) {
        throw new Error("Network error. Please check your connection.");
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Invalid kid ID. Please try again.");
      }
      
      // If successful, store reader info in localStorage
      localStorage.setItem('readerInfo', JSON.stringify(data.reader));
      
      // Navigate to the dashboard
      navigate('/user-readme-dash-board');
      
    } catch (error) {
      console.error("Login error:", error);
      
      // Improved error handling with specific messages
      if (error.message === "Failed to fetch") {
        setError("Cannot connect to server. Please check your internet connection.");
      } else if (error.message.includes("Reader not found")) {
        setError("Reader not found. Please check the ID and try again.");
      } else {
        setError(error.message || "Failed to login. Please check your ID and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  // Add this function to handle navigation
  const handleLibraryCardClick = (e) => {
    e.preventDefault();
    navigate("/library-card");
  };
  
  const handleSchoolAccountClick = (e) => {
    e.preventDefault();
    navigate("/school-account");
  };
  
  const handleNewStudentClick = (e) => {
    e.preventDefault();
    navigate("/new-student");
  };

  return (
    <div className='min-h-screen bg-white flex'>
      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Welcome back to your reading journey
            </h1>
            <p className='text-slate-600 text-lg'>
              Login to continue your reading adventure
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Kid's ID
                </label>
                <input
                  type='text'
                  value={kidId}
                  onChange={handleInputChange}
                  placeholder="Enter your kid's ID"
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>
                    
            <div className='grid grid-cols-2 gap-4'>
              <button 
                type="submit"
                className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Start Reading'}
              </button>
            
              <button
                onClick={handleLibraryCardClick}
                type="button"
                className='p-3 border-2 border-slate-200 rounded-full text-slate-700 hover:bg-slate-50 transition-colors font-medium'
              >
                Library Card
              </button>
            </div>
                    
            <div className='text-center pt-2'>
              <a
                href='/forgot-kids-id'
                className='text-slate-600 text-sm hover:text-orange-500 block'
              >
                Forgot kid's ID?
              </a>
              <div className='text-slate-600 text-sm'>
                New Kid?{" "}
                <a
                  href='/new-student'
                  onClick={handleNewStudentClick}
                  className='text-orange-500 hover:text-orange-400 font-medium'
                >
                  Get your kid ID
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className='hidden md:block'>
          <img
            src={ReadingImage}
            alt='Reading illustration'
            className='w-full max-w-lg mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;