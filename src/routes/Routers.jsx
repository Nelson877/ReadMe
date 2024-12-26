import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../Pages/LoginForm';


const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login-form" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default Routers;
