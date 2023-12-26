import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume'
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/resume" Component={Resume} />
          <Route path="/blogs" Component={Blogs} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}
