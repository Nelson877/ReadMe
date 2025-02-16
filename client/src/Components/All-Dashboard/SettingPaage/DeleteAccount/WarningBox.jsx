import React from 'react'


const WARNING_POINTS = [
    'All your data will be permanently deleted',
    'Active subscriptions will be canceled',
    'This action cannot be reversed'
  ];

const WarningBox = () => {


  return (
    <div className="bg-red-50 p-4 rounded-lg">
    <p className="text-red-800 text-sm">Before proceeding, please note that:</p>
    <ul className="list-disc ml-5 mt-2 text-sm text-red-800">
      {WARNING_POINTS.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
  )
}

export default WarningBox