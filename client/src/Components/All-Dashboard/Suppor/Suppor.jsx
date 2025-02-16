import React from 'react';

const Support = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-6">Library Support</h1> */}

      {/* Contact Information Section */}
      <div className="mb-4 border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>library.support@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>123 Library Lane, City, State 12345</p>
          </div>
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p>Mon-Fri: 8am-8pm, Sat: 10am-6pm</p>
          </div>
        </div>
      </div>

      {/* Library Services Section */}
      <div className="mb-4 border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Library Services</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Borrowing books and digital resources</li>
          <li>Interlibrary loan</li>
          <li>Research assistance</li>
          <li>Study space reservations</li>
        </ul>
      </div>

      {/* Online Resources Section */}
      <div className="mb-4 border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Online Resources</h2>
        <div className="space-y-2">
          <a href="#" className="text-blue-600 hover:underline">
            Access Research Databases
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            E-book Platform
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Digital Journal Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
