import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import AboutPage from '../components/AboutPage';
import Home from '../components/Home'
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} /> 
        <Route path="/App" exact element={<App />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        
      </Routes>
    </Router>
  );
}