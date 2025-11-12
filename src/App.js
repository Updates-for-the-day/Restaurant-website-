// src/App.js (This is the corrected router setup file)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Make sure your theme file is at this path

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    // 1. ThemeProvider should wrap everything to provide the theme
    <ThemeProvider theme={theme}>
      {/* 2. BrowserRouter MUST wrap all Routes to provide routing context */}
      <BrowserRouter>
        <Routes>
          {/* 
            3. Each Route renders a page component.
               Since each page component uses <Layout>, and <Layout> uses <Header>,
               the <Header> is now correctly inside the <BrowserRouter> context.
          */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} /> {/* Catch-all for 404 pages */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;