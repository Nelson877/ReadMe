import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const PrivacyHelp = () => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Back button added to the top left */}
      <div className="mb-4">
        <button   onClick={() => navigate("/")} className="flex items-center text-orange-500 hover:text-orange-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>
      </div>

      <div className="border-b-2 border-orange-500 pb-4 mb-8">
        <h1 className="text-4xl font-bold text-orange-500">Privacy Help</h1>
        {/* <p clas sName="text-gray-600 mt-2">Your privacy matters to us</p> */}
      </div>
      
      <section className="mb-8 bg-orange-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We value your privacy and are committed to protecting your personal information. This page explains how we collect, use, and safeguard your data while using our library services.
        </p>
      </section>
      
      <section className="mb-8 bg-orange-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-orange-700">Personal Information:</span>
              <p className="text-gray-700">Name, library card number, contact details (only if provided for services like reservations or notifications).</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-orange-700">Usage Data:</span>
              <p className="text-gray-700">Borrowing history, login activity for digital resources, and search queries in our catalog (collected anonymously).</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-orange-700">Device and Network Data:</span>
              <p className="text-gray-700">When accessing online services, we may collect IP addresses and browser details for security purposes.</p>
            </div>
          </li>
        </ul>
      </section>
      
      <section className="mb-8 bg-orange-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">Your data is used to:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-orange-100 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-orange-600 font-medium">Provide and improve services</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-orange-100 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-orange-600 font-medium">Manage loans and notices</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-orange-100 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-orange-600 font-medium">Facilitate digital access</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-orange-100 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-orange-600 font-medium">Maintain security</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8 bg-orange-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
          Who Has Access to Your Data?
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="text-orange-500 mr-3">•</div>
            <p className="text-gray-700">Library staff members who need it to assist with services.</p>
          </li>
          <li className="flex items-start">
            <div className="text-orange-500 mr-3">•</div>
            <p className="text-gray-700">Third-party service providers (e.g., digital book platforms), but only when necessary and with privacy safeguards in place.</p>
          </li>
          <li className="flex items-start bg-red-50 p-2 rounded border-l-4 border-orange-500">
            <div className="text-orange-600 mr-3 font-bold">⚠</div>
            <p className="text-gray-700">We <strong>never</strong> sell or share your personal data with advertisers or other third parties for marketing purposes.</p>
          </li>
        </ul>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">5</span>
            Data Protection & Security
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700">Your data is encrypted and stored securely.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700">Access to personal information is limited to authorized personnel only.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700">We follow industry best practices to protect against unauthorized access.</span>
            </li>
          </ul>
        </section>
        
        <section className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">6</span>
            Your Privacy Choices
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              <span className="text-gray-700">You can request a copy of your personal data.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="text-gray-700">You may ask us to correct or delete your information.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-gray-700">Opt-out of email notifications by adjusting your preferences.</span>
            </li>
          </ul>
        </section>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <section className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">7</span>
            Cookies & Online Tracking
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Our website may use cookies to improve user experience.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">You can manage cookie preferences through your browser.</span>
            </li>
          </ul>
        </section>
        
        <section className="bg-orange-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">8</span>
            Third-Party Links & Services
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
              </svg>
              <span className="text-gray-700">Our website may link to external resources.</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-gray-700">We are not responsible for their privacy policies.</span>
            </li>
          </ul>
        </section>
      </div>
      
      <section className="mb-8 mt-6 bg-orange-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">9</span>
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700">
          We may update this policy periodically. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>
      
      <section className="mb-8 bg-orange-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3 text-orange-600 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">10</span>
          Contact Us
        </h2>
        <p className="text-gray-700 mb-4">For privacy-related questions or requests, contact us at:</p>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-700">privacy@library.org</span>
          </div>
          <div className="flex items-center mb-3">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-700">(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-gray-700">123 Library Street, Bookville, BK 12345</span>
          </div>
        </div>
      </section>
      
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>Last updated: March 2025</p>
      </div>
    </div>
  );
};

export default PrivacyHelp;