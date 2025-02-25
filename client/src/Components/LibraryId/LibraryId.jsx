import React, { useState, useEffect } from 'react';

const LibraryId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [libraryId, setLibraryId] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const generateLibraryId = (name, phone) => {
    if (!name || !phone) return '';
    
    const names = name.trim().split(' ');
    if (names.length < 2) return '';

    const firstInitial = names[0][0]?.toUpperCase() || '';
    const lastInitial = names[names.length - 1][0]?.toUpperCase() || '';
    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length !== 10) return '';

    return `${firstInitial}${lastInitial}-${cleanPhone}`;
  };

  useEffect(() => {
    setLibraryId(generateLibraryId(fullName, phoneNumber));
  }, [fullName, phoneNumber]);

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    try {
      const response = await fetch(`${API_URL}/api/library/library-get-id`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ libraryId, fullName, phoneNumber }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        window.location.href = '/library-card';
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8">
        <div className="space-y-8 max-w-md">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
            Welcome! Get Your Library ID
          </h1>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="flex gap-10">
              <div>
                <label className="text-sm font-medium text-slate-600">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">Phone Number</label>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  maxLength="12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">Your Library ID</label>
              <input
                type="text"
                className="w-full mt-2 p-3 bg-slate-50 border-b-2 border-slate-200 outline-none text-slate-800"
                value={libraryId}
                readOnly
              />
              <p className="text-sm text-slate-500 mt-1">
                Auto-generated based on your name and phone number
              </p>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button 
              type="submit" 
              className="w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium disabled:opacity-50"
              disabled={!libraryId}
            >
              {isLoading ? 'Registering...' : 'Get Started'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LibraryId;
