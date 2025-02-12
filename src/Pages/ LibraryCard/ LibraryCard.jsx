import React, { useState } from 'react';

const LibraryCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [libraryId, setLibraryId] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/library-start-reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ libraryId: libraryId.trim() })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to dashboard on success
      window.location.href = '/user-readme-dash-board';
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8">
        <div className="space-y-8 max-w-md">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
            Welcome back, enjoy reading, stay happy
          </h1>
          <p className="text-slate-600 text-lg">Enter your Library ID to start reading</p>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="text-sm font-medium text-slate-600">Library ID</label>
              <input
                type="text"
                placeholder="JD-1234567890"
                className="w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors"
                value={libraryId}
                onChange={(e) => setLibraryId(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button 
              type="submit" 
              className="w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Start Reading'}
            </button>
          </form>

          <div className="text-center">
            <p className="text-slate-600">
              Do not have library ID?{" "}
              <a href="/get-library-id-now" className="text-orange-500 hover:text-orange-400 font-medium">
                Get ID Now
              </a>
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full max-w-lg mx-auto bg-slate-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📖</div>
            <h2 className="text-xl font-semibold text-slate-800">Digital Library Access</h2>
            <p className="text-slate-600 mt-2">Your gateway to endless knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;