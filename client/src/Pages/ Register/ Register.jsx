import React, { useState } from 'react';
import Loading from "../../Components/Loading/Loading";
import ReadingImage from "../../assets/images/reaading.png";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error('Server response was not valid JSON');
      }

      if (!response.ok) throw new Error(data.message || 'Registration failed');
      window.location.href = '/adding-new-reader';
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-white flex'>
      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Register to start your reading journey
            </h1>
            <p className='text-slate-600 text-lg'>Parent | Guardian Details</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex space-x-4 justify-center items-center'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Parent's First Name
                </label>
                <input
                  type='text'
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='John'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Parent's Last Name
                </label>
                <input
                  type='text'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Doe'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Parent's Email Address
                </label>
                <input
                  type='email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='doe@example.com'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Mobile Number
                </label>
                <input
                  type='tel'
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder='020-002-0222'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button 
              type="submit" 
              className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Continue'}
            </button>

            <div className='text-center'>
              <div className='text-slate-600'>
                Already having student ID?{" "}
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