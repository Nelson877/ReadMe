import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../Pages/LoginForm';
import Forgot from '../Components/Forgot/Forgot';


const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </Router>
  );
};

export default Routers;
