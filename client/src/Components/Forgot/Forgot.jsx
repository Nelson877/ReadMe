import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotImage from "../../assets/images/forgotImage.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../Loading/Loading";

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(`Kid's ID request submitted for ${fullName}`);
      setIsSubmitting(false);
    }, 2000);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Back Button */}
      <div className='p-4'>
        <button
          onClick={() => navigate("/login-form")}
          className='flex items-center text-slate-700 hover:text-orange-500 transition-colors'
        >
          <IoMdArrowRoundBack size={24} className='mr-2' />
          <span className='text-lg font-medium'>Back</span>
        </button>
      </div>

      <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
        <div className='space-y-8 max-w-md'>
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
              Forgot your ID?
            </h1>
            <p className='text-slate-600 text-lg'>
              Enter the following information
            </p>
          </div>

          {error && <p className='text-red-500'>{error}</p>}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='fullName'
                  className='text-sm font-medium text-slate-600'
                >
                  Kid's Full Name
                </label>
                <input
                  id='fullName'
                  type='text'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder='John Doe'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-slate-600'
                >
                  Parent's Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='doe@example.com'
                  className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                  required
                />
              </div>
            </div>
            <div className='text-slate-600 text-sm'>
              <p>Kid's ID will be sent to parent's email address.</p>
            </div>

            <button
              type='submit'
              className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium disabled:opacity-50'
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Get ID"}
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
