import React from 'react';
import {Routes,Route} from 'react-router-dom';
import '../index.css';
import Home from './Home';
import About from './About';
import Project from './Project';
import Blog from './Blog';

export default function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
      </div>
  )
}
