import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume';
import Home from './Components/Myhome/Home';
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
import Contact from './Components/contact/Contact';
import Myservices from './Components/myservices/Myservices';
import Login from './Components/login/Login'
import Register from './Components/login/Register'
// import Timelines from './Components/timelines/Timelines';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/myservices" element={<Myservices />} />
          {/* <Route path="/Timelines" element={Timelines />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
