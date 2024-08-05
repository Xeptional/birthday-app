import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Countdown from './Countdown';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Countdown />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout