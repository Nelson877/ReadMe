import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookUI from '../../assets/images/booklistUi.webp';

const Booklist = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      title: 'Adults', 
      color: 'bg-blue-500',
      path: '/books/adults',
    //   description: 'Fiction and non-fiction books for adult readers'
    },
    { 
      title: 'Bestseller', 
      color: 'bg-emerald-500',
      path: '/books/bestseller',
      description: 'Current most popular and trending books'
    },
    { 
      title: 'Kids & Teen', 
      color: 'bg-orange-400',
      path: '/books/kids-teen',
    //   description: 'Books for children and young adults'
    },
    { 
      title: 'Local', 
      color: 'bg-purple-500',
      path: '/books/local',
    //   description: 'Books from local authors and about local topics'
    },
    { 
      title: 'Mystery', 
      color: 'bg-slate-600',
      path: '/books/mystery',
    //   description: 'Mystery, thriller, and suspense books'
    },
    { 
      title: 'Top Requests', 
      color: 'bg-red-500',
      path: '/books/top-requests',
    //   description: 'Most requested books in our library'
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(category.path);
  };

  const handleAlertClick = () => {
    navigate('/alerts/signup');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-700 mb-4">
              Booklists
            </h1>
            <p className="text-slate-600">
              Explore critical review lists of books and other materials within our most popular categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div 
                key={category.title} 
                className="relative"
                onClick={() => handleCategoryClick(category)}
              >
                <div 
                  className={`absolute -right-1 top-4 w-8 h-12 ${category.color} rounded-l-sm z-10`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 50% 50%)' }}
                />
                
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 cursor-pointer group">
                  <h2 className="text-xl text-slate-700 font-normal group-hover:text-slate-900">
                    {category.title}
                  </h2>
                  {/* <p className="mt-2 text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {category.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>

          <div 
            className="mt-8 bg-orange-400 text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-orange-500 transition-colors duration-200"
            onClick={handleAlertClick}
          >
            <div>
              <h3 className="text-lg font-medium">
                Text message alerts now available!
              </h3>
             
            </div>
            <div className="text-2xl">
              →
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <img 
            src={BookUI}
            alt="Child reading a book"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Booklist;