import React, { useState, useEffect } from 'react';

const LibraryId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [libraryId, setLibraryId] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // API URL from environment or default
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Generate a secure random number (10 digits)
  const generateRandomNumbers = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  // Generate Library ID based on name
  const generateLibraryId = (name) => {
    if (!name) return '';
    
    const names = name.trim().split(' ');
    if (names.length < 2) return '';

    const firstInitial = names[0][0]?.toUpperCase() || '';
    const lastInitial = names[names.length - 1][0]?.toUpperCase() || '';
    
    const randomDigits = generateRandomNumbers();

    return `${firstInitial}${lastInitial}-${randomDigits}`;
  };

  // Generate Library ID when full name changes
  useEffect(() => {
    if (fullName) {
      setLibraryId(generateLibraryId(fullName));
    }
  }, [fullName]);

  // Validate Ghanaian phone number
  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleanedPhone = phone.replace(/\D/g, '');
    
    // Check if the phone number is exactly 10 digits
    if (cleanedPhone.length !== 10) {
      return false;
    }
    
    // Ensure the phone number starts with valid Ghanaian mobile prefixes
    const validPrefixes = ['020', '024', '050', '054', '055', '059'];
    const prefix = cleanedPhone.slice(0, 3);
    
    return validPrefixes.includes(prefix);
  };

  // Format phone number for clean input
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    return cleaned.slice(0, 10);
  };

  // Handle phone number input changes
  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhone);
    
    // Validation message for Ghanaian phone numbers
    if (!validatePhoneNumber(formattedPhone)) {
      setPhoneError('Invalid phone number. Must be 10 digits with valid Ghanaian prefix.');
    } else {
      setPhoneError('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Invalid phone number. Must be 10 digits with valid prefix.');
      return;
    }
  
    setIsLoading(true);
    setError('');
    setPhoneError('');
  
    try {
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
      const response = await fetch(`${API_URL}/api/library/library-get-id`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          libraryId,
          fullName,
          phoneNumber: cleanedPhoneNumber,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      if (responseData.success) {
        window.location.href = '/library-card';
      } else {
        throw new Error(responseData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Full Registration Error:', error);
      setError(error.message || 'Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Regenerate Library ID
  const handleRegenerateId = () => {
    if (fullName) {
      setLibraryId(generateLibraryId(fullName));
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
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
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

              <div className="flex-1">
                <label className="text-sm font-medium text-slate-600">Phone Number</label>
                <input
                  type="tel"
                  placeholder="020-800-9524"
                  className="w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  maxLength="10"
                  required
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-600">Your Library ID</label>
                <button 
                  type="button"
                  onClick={handleRegenerateId}
                  className="text-sm text-orange-500 hover:text-orange-600"
                >
                  Generate New ID
                </button>
              </div>
              <input
                type="text"
                className="w-full mt-2 p-3 bg-slate-50 border-b-2 border-slate-200 outline-none text-slate-800"
                value={libraryId}
                readOnly
              />
              <p className="text-sm text-slate-500 mt-1">
                This is your secure library ID using your initials. Please save it for future logins.
              </p>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button 
              type="submit" 
              className="w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium disabled:opacity-50"
              disabled={!libraryId || !fullName || !phoneNumber || !!phoneError}
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