import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-bold mb-4">Library Services</h4>
        <ul>
          <li>Book Borrowing</li>
          <li>Study Rooms</li>
          <li>Computer Access</li>
          <li>Printing Services</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contact Us</h4>
        <p>123 Library Street</p>
        <p>Email: info@readmelibrary.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" className="text-2xl">📘</a>
          <a href="#" className="text-2xl">🐦</a>
          <a href="#" className="text-2xl">📷</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer