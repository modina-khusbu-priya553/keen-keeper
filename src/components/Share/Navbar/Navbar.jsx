'use client'
import React from 'react';
import { useState } from "react";
import Logo from "../../../../public/assets/logo.png"
import Image from 'next/image';
import { IoMdHome } from 'react-icons/io';

import { FaRegClock } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import NavLink from './NavLink';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const link = 
      <>
        <li>
            <NavLink href={'/'}><IoMdHome />Home</NavLink>
        </li>
        <li>
            <NavLink href={'#'}><FaRegClock />Timeline</NavLink>
        </li>
        <li>
            <NavLink href={'#'}><GoGraph />Sats</NavLink>
        </li>
                
      </>
        
    

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg px-2 md:px-20 md:py-5 py-0.5">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div><Image 
                    src={Logo}
                    alt='logo'
                    width={141}
                    height={31}
            /></div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {link}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {link}
          </ul>
        </div>
      )}
    </nav>
    );
};

export default Navbar;