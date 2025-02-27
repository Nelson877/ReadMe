import { useState, useEffect } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import ReadingImage from "../assets/images/reaading.png";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

          <form className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Student ID
                </label>
                <input
                  type='text'
                  placeholder='Enter your student ID'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                />
              </div>

             
            </div>

          
            <div className='grid grid-cols-2 gap-4'>
            <button className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'>
              Start Reading
            </button>
             <button
               onClick={handleLibraryCardClick}
               className='p-3 border-2 border-slate-200 rounded-full text-slate-700 hover:bg-slate-50 transition-colors font-medium'
             >
               Library Card
             </button>
           </div>

          
            <div className='text-center pt-2'>
              <a
                href='/forgot-password'
                className='text-slate-600 text-sm hover:text-orange-500 block'
              >
                Forgot your student ID?
              </a>
              <div className='text-slate-600 text-sm'>
                New student?{" "}
                <a
                  href='/new-student'
                  className='text-orange-500 hover:text-orange-400 font-medium'
                >
                  Register with your student ID
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
