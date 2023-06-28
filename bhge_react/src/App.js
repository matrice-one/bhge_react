// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';

const App = () => {
  return (
    <Router basename="/bhge">
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
