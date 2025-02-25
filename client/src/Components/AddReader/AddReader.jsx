import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import ReadingImage from "../../assets/images/reaading.png";
import GetKidId from "./GetKidId";

const AddReader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showKidId, setShowKidId] = useState(false);
  const [kidId, setKidId] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a random ID for the kid
    const generatedId = "KID-2025-" + Math.floor(1000 + Math.random() * 9000);
    setKidId(generatedId);
    
    // Show the success modal
    setShowKidId(true);
    
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData, "Kid ID:", generatedId);
  };

  const closeKidIdModal = () => {
    setShowKidId(false);
    // Optionally reset the form here if needed
    // setFormData({ firstName: "", lastName: "", school: "", grade: "", gender: "" });
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

            <button type="submit" className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'>
              Get kid's ID
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