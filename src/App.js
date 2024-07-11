// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './components/Template';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
        
      </Routes>
    </Router>
  );
}

export default App;
