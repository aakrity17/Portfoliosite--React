import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Resume from './Components/resume/Resume'
import Home from './Components/home/Home'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />

          {/* <Route path="/resume" Component={Resume} /> */}

        </Routes>
      </BrowserRouter>
    </div>

  )
}
