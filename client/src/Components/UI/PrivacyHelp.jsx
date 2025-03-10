import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaDatabase,
  FaPlus,
  FaRegBuilding,
} from "react-icons/fa6";
import { MdOutlineDeviceHub, MdOutlineErrorOutline } from "react-icons/md";
import {
  IoSettingsOutline,
  IoShieldCheckmarkOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { RiDownload2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { VscMail } from "react-icons/vsc";
import { IoMdCall } from "react-icons/io";

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
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      {/* Back button added to the top left */}
      <div className='mb-4'>
        <button
          onClick={() => navigate("/")}
          className='flex items-center text-orange-500 hover:text-orange-700 transition-colors'
        >
          <FaArrowLeft className='mr-2' />
          <span>Back</span>
        </button>
      </div>

      <div className=' pb-2 mb-4'>
        <h1 className='text-4xl font-bold text-orange-500'>Privacy Help</h1>
      </div>

      <section className='mb-8 bg-orange-50 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          Introduction
        </h2>
        <p className='text-gray-700 leading-relaxed'>
          We value your privacy and are committed to protecting your personal
          information. This page explains how we collect, use, and safeguard
          your data while using our library services.
        </p>
      </section>

      <section className='mb-8 bg-orange-50 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          Information We Collect
        </h2>
        <p className='text-gray-700 mb-4'>
          We may collect the following types of information:
        </p>
        <ul className='space-y-3'>
          <li className='flex items-start'>
            <div className='bg-orange-100 p-2 rounded-full mr-3 mt-1'>
              <FaPlus className='text-orange-500' />
            </div>
            <div>
              <span className='font-semibold text-orange-700'>
                Personal Information:
              </span>
              <p className='text-gray-700'>
                Name, library card number, contact details (only if provided for
                services like reservations or notifications).
              </p>
            </div>
          </li>
          <li className='flex items-start'>
            <div className='bg-orange-100 p-2 rounded-full mr-3 mt-1'>
              <FaDatabase className='text-orange-500' />
            </div>
            <div>
              <span className='font-semibold text-orange-700'>Usage Data:</span>
              <p className='text-gray-700'>
                Borrowing history, login activity for digital resources, and
                search queries in our catalog (collected anonymously).
              </p>
            </div>
          </li>
          <li className='flex items-start'>
            <div className='bg-orange-100 p-2 rounded-full mr-3 mt-1'>
              <MdOutlineDeviceHub className='text-orange-500' />
            </div>
            <div>
              <span className='font-semibold text-orange-700'>
                Device and Network Data:
              </span>
              <p className='text-gray-700'>
                When accessing online services, we may collect IP addresses and
                browser details for security purposes.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className='mb-8 bg-orange-50 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          How We Use Your Information
        </h2>
        <p className='text-gray-700 mb-4'>Your data is used to:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-white p-4 rounded shadow-sm'>
            <div className='flex items-center mb-2'>
              <div className='bg-orange-100 p-1 rounded-full mr-2'>
                <FaCheck className='text-orange-500' />
              </div>
              <span className='text-orange-600 font-medium'>
                Provide and improve services
              </span>
            </div>
          </div>
          <div className='bg-white p-4 rounded shadow-sm'>
            <div className='flex items-center mb-2'>
              <div className='bg-orange-100 p-1 rounded-full mr-2'>
                <FaCheck className='text-orange-500' />
              </div>
              <span className='text-orange-600 font-medium'>
                Manage loans and notices
              </span>
            </div>
          </div>
          <div className='bg-white p-4 rounded shadow-sm'>
            <div className='flex items-center mb-2'>
              <div className='bg-orange-100 p-1 rounded-full mr-2'>
                <FaCheck className='text-orange-500' />
              </div>
              <span className='text-orange-600 font-medium'>
                Facilitate digital access
              </span>
            </div>
          </div>
          <div className='bg-white p-4 rounded shadow-sm'>
            <div className='flex items-center mb-2'>
              <div className='bg-orange-100 p-1 rounded-full mr-2'>
                <FaCheck className='text-orange-500' />
              </div>
              <span className='text-orange-600 font-medium'>
                Maintain security
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-8 bg-orange-50 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          Who Has Access to Your Data?
        </h2>
        <ul className='space-y-3'>
          <li className='flex items-start'>
            <div className='text-orange-500 mr-3'>•</div>
            <p className='text-gray-700'>
              Library staff members who need it to assist with services.
            </p>
          </li>
          <li className='flex items-start'>
            <div className='text-orange-500 mr-3'>•</div>
            <p className='text-gray-700'>
              Third-party service providers (e.g., digital book platforms), but
              only when necessary and with privacy safeguards in place.
            </p>
          </li>
          <li className='flex items-start bg-red-50 p-2 rounded border-l-4 border-orange-500'>
            <div className='text-orange-600 mr-3 font-bold'>
              <IoWarningOutline />
            </div>
            <p className='text-gray-700'>
              We <strong>never</strong> sell or share your personal data with
              advertisers or other third parties for marketing purposes.
            </p>
          </li>
        </ul>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <section className='bg-orange-50 p-6 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
            Data Protection & Security
          </h2>
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <IoShieldCheckmarkOutline className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                Your data is encrypted and stored securely.
              </span>
            </li>
            <li className='flex items-center'>
              <IoShieldCheckmarkOutline className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                Access to personal information is limited to authorized
                personnel only.
              </span>
            </li>
            <li className='flex items-center'>
              <IoShieldCheckmarkOutline className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                We follow industry best practices to protect against
                unauthorized access.
              </span>
            </li>
          </ul>
        </section>

        <section className='bg-orange-50 p-6 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
            Your Privacy Choices
          </h2>
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <RiDownload2Line className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                You can request a copy of your personal data.
              </span>
            </li>
            <li className='flex items-center'>
              <FaRegEdit className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                You may ask us to correct or delete your information.
              </span>
            </li>
            <li className='flex items-center'>
              <GiSettingsKnobs className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                Opt-out of email notifications by adjusting your preferences.
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <section className='bg-orange-50 p-6 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
            Cookies & Online Tracking
          </h2>
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <MdOutlineErrorOutline className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                Our website may use cookies to improve user experience.
              </span>
            </li>
            <li className='flex items-center'>
              <IoSettingsOutline className='text-orange-500 mr-2' />
              <span className='text-gray-700'>
                You can manage cookie preferences through your browser.
              </span>
            </li>
          </ul>
        </section>

        <section className='bg-orange-50 p-6 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
            Third-Party Links & Services
          </h2>
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-orange-500 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101'
                />
              </svg>
              <span className='text-gray-700'>
                Our website may link to external resources.
              </span>
            </li>
            <li className='flex items-center'>
              <IoWarningOutline className='text-orange-500 mr-2 ' />

              <span className='text-gray-700'>
                We are not responsible for their privacy policies.
              </span>
            </li>
          </ul>
        </section>
      </div>

      <section className='mb-8 mt-6 bg-orange-50 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          Changes to This Privacy Policy
        </h2>
        <p className='text-gray-700'>
          We may update this policy periodically. Any changes will be posted on
          this page with an updated revision date.
        </p>
      </section>

      <section className='mb-8 bg-orange-100 p-6 rounded-lg shadow-sm'>
        <h2 className='text-2xl font-semibold mb-3 text-orange-600 flex items-center'>
          Contact Us
        </h2>
        <p className='text-gray-700 mb-4'>
          For privacy-related questions or requests, contact us at:
        </p>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='flex items-center mb-3'>
            <div className='bg-orange-100 p-2 rounded-full mr-3'>
              <VscMail className='text-orange-500 ' />
            </div>
            <span className='text-gray-700'>
              <a href='mailto:privacy@library.org'>privacy@library.org</a>
            </span>
          </div>
          <div className='flex items-center mb-3'>
            <div className='bg-orange-100 p-2 rounded-full mr-3'>
              <IoMdCall className='text-orange-500 ' />
            </div>
            <span className='text-gray-700'>
              <a href='tel:+233208409514'>(+233) 208-409-514</a>
            </span>
          </div>
          <div className='flex items-center'>
            <div className='bg-orange-100 p-2 rounded-full mr-3'>
              <FaRegBuilding className='text-orange-500 ' />
            </div>
            <span className='text-gray-700'>
              <a
                href='https://www.google.com/maps/search/?q=153+Library+Street,+Accra,+GZ+12452'
                target='_blank'
                rel='noopener noreferrer'
              >
                153 Library Street, Accra, GZ 12452
              </a>
            </span>
          </div>
        </div>
      </section>

      <div className='text-center text-gray-500 text-sm mt-8'>
        <p>Last updated: March 2025</p>
      </div>
    </div>
  );
};

export default PrivacyHelp;
