"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink.jsx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuHamburger from './MenuHamburger.jsx';


const navLinks = [
    {
    title: "About",
    path: "#about"
    },
    {
    title: "Projects",
    path: "#projects"
    }, 
    {
        title: "Contact",
        path: "#contact"
    },
]


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);  
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#0d0628] bg-opacity-100 py-3'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"} className='text-10 md:text-15 text-white font-semibold ml-10'>Ariam Mahray
        </Link>
        <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5'/>
                </button>
                ) :(
                <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                </button>
                // <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                //     <XmarkIcon className='h-5 w-5'/>
                // </button>
            )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 mr-8'>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path}title={link.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
        {navbarOpen? <MenuHamburger links={navLinks} /> : null}
        </nav>
  );
};

export default Navbar;
