import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Project from './Project';
import Blog from './Project';
import Footer from './Footer';

export default function App() {
  return (
      <div>
      <Navbar />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      <Footer />
      </div>
  )
}
