import React, { useRef, useEffect, useContext, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/logo.png';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  
  const headerRef = useRef(null);
    const navigate = useNavigate();
    const {user,dispatch} = useContext(AuthContext)

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '60px', height: '60px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className="mr-10"> {/* Add margin-right for spacing */}
          <Link to='/' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mr-10"> {/* Add margin-right for spacing */}
          <Link to='/plans' smooth={true} duration={500}>
            Plans
          </Link>
        </li>
        <li className="mr-10"> {/* Add margin-right for spacing */}
          <Link to='/about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className="mr-10"> {/* Add margin-right for spacing */}
          <Link to='/contact' smooth={true} duration={500}>
            Contact us
          </Link>
        </li>

        {user? (
          <>
          <h5 className="mb-0 flex justify-between items-center px-4">Welcome to Internova {user.username}</h5>
          <button className="mr-10" onClick={logout}>
          Logout
          </button>
          
          </> 
          ):(<>
            <li className="mr-10"> {/* Add margin-right for spacing */}
            <Link to='/login' smooth={true} duration={500}>
             Login
            </Link>
            </li>
            <li className="mr-10"> {/* Add margin-right for spacing */}
            <Link to='/register' smooth={true} duration={500}>
              Register
            </Link>
            </li>
              </>

          )
        }
        
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
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/login' smooth={true} duration={500}>
            Login
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/register' smooth={true} duration={500}>
            Register
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
