import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume';
import Home from './Components/Myhome/Home'; // Fix the import statement
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
import Contact from './Components/contact/Contact';
import Myservices from './Components/myservices/Myservices';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Myservices" element={<Myservices />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
