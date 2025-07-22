import React from 'react';
import './components/LandingPage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import DashboardPage from './components/Dashboard';
import Profile from './components/profile';
import SupportPage from './components/SupportPage';
import Homepage from './components/home';
import Manage from './components/manage';
import Condition from './components/condition';
import Refer from './components/refer';
import OurOffer from './components/OurOffer';

import Task from './components/task.jsx';
 // Import the Support component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/SupportPage" element={<SupportPage/>} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/manage" element={<Manage/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/condition" element={<Condition/>}/>
        <Route path="/refer" element={<Refer/>}/>
        <Route path="/our-offer" element={<OurOffer />} />
      </Routes>
    </Router>
  );
}

export default App;
