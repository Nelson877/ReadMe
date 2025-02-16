import React from 'react'

const FeedbackForm  = ({ feedback, setFeedback, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <label htmlFor="feedback" className="block text-sm font-medium text-slate-700 mb-2">
        Please tell us why you're leaving
      </label>
      <textarea
        id="feedback"
        value={feedback}
        required={true}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full h-32 px-4 py-3 outline-none rounded-lg border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400"
        placeholder="Your feedback helps us improve our service..."
      />
    </div>
    <div className="pt-4">
      <button
        type="submit"
        className="w-full bg-orange-500  text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200"
      >
        Permanently Delete Account
      </button>
      <p className="text-xs text-center text-slate-500 mt-4">
        By clicking this button, you agree to the permanent deletion of your account
      </p>
    </div>
  </form>
  )
}

export default FeedbackForm 