import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '60px', height: '60px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className="mr-10">
          <Link to='/' style={{ textDecoration: 'none', position: 'relative' }} className={`nav-link ${location.pathname === '/' ? 'text-pink-500' : ''}`} smooth={true} duration={500}>
            Home
            {location.pathname === '/' && <div style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '2px', backgroundColor: '#ff69b4' }} />}
          </Link>
        </li>
        <li className="mr-10">
          <Link to='/plans' style={{ textDecoration: 'none', position: 'relative' }} className={`nav-link ${location.pathname === '/plans' ? 'text-pink-500' : ''}`} smooth={true} duration={500}>
            Plans
            {location.pathname === '/plans' && <div style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '2px', backgroundColor: '#ff69b4' }} />}
          </Link>
        </li>
        <li className="mr-10">
          <Link to='/about' style={{ textDecoration: 'none', position: 'relative' }} className={`nav-link ${location.pathname === '/about' ? 'text-pink-500' : ''}`} smooth={true} duration={500}>
            About Us
            {location.pathname === '/about' && <div style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '2px', backgroundColor: '#ff69b4' }} />}
          </Link>
        </li>
        <li className="mr-10">
          <Link to='/contact' style={{ textDecoration: 'none', position: 'relative' }} className={`nav-link ${location.pathname === '/contact' ? 'text-pink-500' : ''}`} smooth={true} duration={500}>
            Contact us
            {location.pathname === '/contact' && <div style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '2px', backgroundColor: '#ff69b4' }} />}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/plans' smooth={true} duration={500}>
            Plans
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-5'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4'
              href='/'
            >
              <FaLinkedin size={30} /> Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4'
              href='/'
            >
              <FaGithub size={30} /> Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4'
              href='/'
            >
              <HiOutlineMail size={30} /> Email
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4'
              href='/'
            >
              <BsFillPersonLinesFill size={30} /> My Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
