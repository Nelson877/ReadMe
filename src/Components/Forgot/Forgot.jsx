import { useState } from "react";
import ForgotImage from "../../assets/images/forgotImage.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
  };

  return (
    <div className='min-h-screen bg-white flex'>
        
         <div className='text-center pt-4 ml-10 hidden md:block'>
              <a
                href='/login-form'
                className='text-orange-500 hover:text-orange-400 font-medium flex items-center justify-center gap-2'
              >
                <IoMdArrowRoundBack />
                Back to Login
              </a>
            </div>
      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Forgot your password?
            </h1>
            <p className='text-slate-600 text-lg'>
              Enter your student ID to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Student ID
                </label>
                <input
                  type='text'
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder='Enter your student ID'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>

              {/* <div>
                <label className="text-sm font-medium text-slate-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors"
                  required
                />
              </div> */}
            </div>

            <button
              type='submit'
              className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'
            >
              Reset Password
            </button>

           
          </form>
        </div>

        <div className='hidden md:block'>
          <img
            src={ForgotImage}
            alt='Forgot illustration'
            className='w-full max-w-lg mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Forgot;
