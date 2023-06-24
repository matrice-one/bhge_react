// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
// import AboutPage from './components/AboutPage';
// import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />

        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} /> */}
      </Routes>
    </Router>
  );
};

export default App;
