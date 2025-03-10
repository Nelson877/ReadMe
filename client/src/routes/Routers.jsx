import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../Pages/LoginForm';
import Forgot from '../Components/Forgot/Forgot';
import Register from '../Pages/ Register/ Register';
import LibraryCard from '../Pages/ LibraryCard/ LibraryCard';
import LibraryId from '../Components/LibraryId/LibraryId';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddReader from '../Components/AddReader/AddReader';
import PrivacyHelp from '../Components/UI/PrivacyHelp';


const Routers = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/forgot-kids-id" element={<Forgot />} />
        <Route path="/new-student" element={<Register />} />
        <Route path="/adding-new-reader" element={<AddReader />} />
        <Route path="/library-card" element={<LibraryCard />} />
        <Route path="/get-library-id-now" element={<LibraryId />} />
        <Route path="/user-readme-dash-board" element={<Dashboard />} />
        <Route path="/privacy-help" element={<PrivacyHelp />} />
      </Routes>
    </Router>
  );
};

export default Routers;
