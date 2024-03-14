import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { MdAccountCircle } from 'react-icons/md';
import { CiDark } from "react-icons/ci";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };

    const closeNav = () => {
        setNav(false);
        document.body.style.overflow = 'scroll';
    };

    const handleAccountIconClick = () => {
        closeNav();
        window.location.href = "/login"; // Redirect to Login.jsx page
    };

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'>Interns Innovation</h1>
            <div className='flex items-center '>
                <SlMenu onClick={handleNav} className='z-20 text-white cursor-pointer mr-6' size={25} />
                <MdAccountCircle className='z-20 text-white cursor-pointer mr-4' size={25} onClick={handleAccountIconClick} />
                <CiDark className='z-20 h-8 w-10 text-white cursor-pointer'/>
            </div>
            <div className={nav ? ' ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
                <ul className='flex flex-col fixed w-full h-screen items-center justify-center'>
                    <li className='font-bold text-3xl p-8' onClick={closeNav}><Link to="/">Home</Link></li>
                    <li className='font-bold text-3xl p-8' onClick={closeNav}><Link to="/plans">Plans</Link></li>
                    <li className='font-bold text-3xl p-8' onClick={closeNav}><Link to="/about">About Us</Link></li>
                    <li className='font-bold text-3xl p-8' onClick={closeNav}><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;