import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="name">TAMILORE MUYIDEEN ADEBAYO</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to='/about' aria-label='About'>About </Link>
        <Link to='/write-message' aria-label='write message'>Write A Message</Link>
        <Link to='/submitted-messages' aria-label='submitted messages'>Submitted Messages</Link>
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    
  );
};

export default Navbar