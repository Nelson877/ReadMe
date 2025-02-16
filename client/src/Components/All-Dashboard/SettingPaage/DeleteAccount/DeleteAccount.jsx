import React, { useState } from "react";
import Layout from "./Layout ";
import SuccessMessage from "./SuccessMessage";
import Header from "./Header";
import WarningBox from "./WarningBox";
import FeedbackForm from "./FeedbackForm ";

const DeleteAccount = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setSubmitted(true);
  };

  const handleCancel = () => {
    // Reset the state to cancel the process
    setFeedback("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <Layout>
        <SuccessMessage onCancel={handleCancel} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <Header />
        <WarningBox />
        <FeedbackForm
          feedback={feedback}
          setFeedback={setFeedback}
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default DeleteAccount;
