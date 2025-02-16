import React, { useState } from "react";
import UIimage1 from "../../assets/images/ui.png";
import UIimage2 from "../../assets/images/ui1.webp";
import UIimage3 from "../../assets/images/ui2.avif";
import UIimage4 from "../../assets/images/ui3.avif";

import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      image: UIimage1,
      title: "Discover Your Next Reading Adventure",
      description:
        "Join our community of book lovers. Access thousands of books, share your thoughts, and connect with fellow readers worldwide.",
    },
    {
      image: UIimage2,
      title: "Reduces Stress",
      description:
        "Reading a good book takes you in a new world and helps you relieve your day to day stress. It has several positive effects on your mind, body, and soul. It stimulates your brain muscles and keeps your brain healthy and strong.",
    },
    {
      image: UIimage3,
      title: "Makes you more empathetic",
      description:
        "According to studies, losing yourself in books, especially fiction, might increase your empathy.",
    },
    {
      image: UIimage4,
      title: "Develops your Analytical Skills",
      description:
        "By active reading, you explore several aspects of life. It involves questioning what you read. It helps you develop your thoughts and express your opinions.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='text-center max-w-2xl w-full'>
        <div className='mb-8'>
          <div className=' mx-auto mb-6'>
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className='max-w-full h-auto mx-auto'
            />
          </div>

          <h1 className='text-4xl font-bold text-gray-500 mb-4'>
            {slides[currentSlide].title}
          </h1>
          <p className='text-gray-400 mb-8'>
            {slides[currentSlide].description}
          </p>
        </div>

        <div className='flex justify-center space-x-2 mb-8'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-orange-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        <buttonn
          onClick={() => navigate("/login-form")}
          className='bg-orange-500 text-white px-8 py-3 cursor-pointer rounded-lg hover:bg-orange-600 transition-colors'
        >
          START READING
        </buttonn>
      </div>
    </div>
  );
};

export default Hero;
