import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import ReadingImage from "../../assets/images/reaading.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen bg-white flex'>
      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Register to start your reading journey
            </h1>
            {/* <p className='text-slate-600 text-lg'>
              Register to continue your learning adventure
            </p> */}
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

              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-[60%] -translate-y-1/2 text-slate-400 hover:text-slate-600'
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'>
              Register
            </button>

            <div className='text-center '>
              <div className='text-slate-600'>
                Already having an account ?{" "}
                <a
                  href='/login-form'
                  className='text-orange-500 hover:text-orange-400 font-medium'
                >
                  LogIn with your student ID
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

export default Register;
