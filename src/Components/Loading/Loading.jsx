import React from 'react'; // Ensure React is imported
import { ClimbingBoxLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryColor">
      <ClimbingBoxLoader color="#FB8C00" size={10} />
    </div>
  );
};

export default Loading;
