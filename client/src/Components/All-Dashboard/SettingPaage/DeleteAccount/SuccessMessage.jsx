import React from "react";

const SuccessMessage = ({ onCancel }) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="md:text-3xl text-2xl font-semibold text-slate-900">
        Request Submitted
      </h2>
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-800">
          Your account deletion request has been received. We'll process it
          within 24 hours.
        </p>
      </div>
      <button
        className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default SuccessMessage;
