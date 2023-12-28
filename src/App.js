import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume'
import Home from './Components/Myhome/Home'
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
// import Login from './Components/login/Login';
import Contact from './Components/contact/Contact'
import Myservices from './Components/myservices/Myservices';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/resume" Component={Resume} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/contact" Component={Contact} />
          {/* <Route path="/login" Component={Login} /> */}
          <Route path="/Myservices" Component={Myservices} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}
