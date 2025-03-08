import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import ReadingImage from "../../assets/images/reaading.png";
import GetKidId from "./GetKidId";

const AddReader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showKidId, setShowKidId] = useState(false);
  const [kidId, setKidId] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define API base URL - adjust this to match your backend
  const API_URL = 'http://localhost:5000'; // Your Express server port
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
    grade: "",
    gender: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    // Debug log
    console.log("Submitting to:", `${API_URL}/api/addNewReader/add-new-reader`);
    console.log("Form data:", formData);
    
    try {
      // Fix: Use the correct route based on your server.js configuration
      const response = await fetch(`${API_URL}/api/addNewReader/add-new-reader`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });
      
      // Debug log
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Response data:", data);
      
      // Set the kid ID from the API response
      setKidId(data.reader.kidId);
      
      // Show the success modal
      setShowKidId(true);
      
      console.log("Reader registered successfully:", data);
    } catch (error) {
      console.error("Error registering reader:", error);
      setError(error.message || "Failed to register reader. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeKidIdModal = () => {
    setShowKidId(false);
    // Reset the form after successful submission
    setFormData({ firstName: "", lastName: "", school: "", grade: "", gender: "" });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen bg-white flex'>
      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Add a new reader, to enjoy reading
            </h1>
            <p className='text-slate-600 text-lg'>Kids Details</p>
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='flex space-x-4 justify-center items-center'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Kid's First Name
                </label>
                <input
                  type='text'
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder='John'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Kid's Last Name
                </label>
                <input
                  type='text'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder='Doe'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Kid's School
                </label>
                <input
                  type='text'
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder='Star School'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-600'>
                  Kid's Grade
                </label>
                <input
                  type='text'
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  placeholder='Grade 1'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>

            {/* gender Select */}
            <div className='mt-4'>
              <p className='text-sm font-medium text-slate-600 mb-2'>Gender</p>
              <div className='flex space-x-4'>
                <label className='flex items-center'>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={formData.gender === 'male'}
                    onChange={handleGenderChange}
                    className='w-4 h-4 text-orange-500 focus:ring-0 outline-none'
                    required
                  />
                  <span className='ml-2 text-slate-700'>Male</span>
                </label>
                <label className='flex items-center'>
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={formData.gender === 'female'}
                    onChange={handleGenderChange}
                    className='w-4 h-4 text-orange-500 focus:ring-0 outline-none'
                  />
                  <span className='ml-2 text-slate-700'>Female</span>
                </label>
                <label className='flex items-center'>
                  <input
                    type='radio'
                    name='gender'
                    value='other'
                    checked={formData.gender === 'other'}
                    onChange={handleGenderChange}
                    className='w-4 h-4 text-orange-500 focus:ring-0 outline-none'
                  />
                  <span className='ml-2 text-slate-700'>Other</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Get kid\'s ID'}
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
      
      {/* Render the GetKidId component when showKidId is true */}
      {showKidId && <GetKidId kidId={kidId} onClose={closeKidIdModal} />}
    </div>
  );
};

export default AddReader;