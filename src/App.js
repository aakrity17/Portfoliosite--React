import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume'
<<<<<<< HEAD
import Home from './Components/Myhome/Home'
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
// import Login from './Components/login/Login';
import Contact from './Components/contact/Contact'
import Myservices from './Components/myservices/Myservices';
=======
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer';
import Blogs from './Components/blogs/Blogs';
>>>>>>> 7c7287d4d87e2e542d83657df11850fdb2b91468
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
<<<<<<< HEAD
          <Route path="/contact" Component={Contact} />
          {/* <Route path="/login" Component={Login} /> */}
          <Route path="/Myservices" Component={Myservices} />
=======
>>>>>>> 7c7287d4d87e2e542d83657df11850fdb2b91468

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}
