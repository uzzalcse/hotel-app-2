'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('overview');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex gap-6 border-b mb-6 max-w-5xl mx-auto w-full">
      <Link
        href="#overview"
        className={`${
          activeLink === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'
        } text-sm font-medium py-3`}
        onClick={() => handleLinkClick('overview')}
      >
        Overview
      </Link>
      <Link
        href="#amenities"
        className={`${
          activeLink === 'amenities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'
        } text-sm font-medium py-3`}
        onClick={() => handleLinkClick('amenities')}
      >
        Amenities
      </Link>
      <Link
        href="#policies"
        className={`${
          activeLink === 'policies' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'
        } text-sm font-medium py-3`}
        onClick={() => handleLinkClick('policies')}
      >
        Policies
      </Link>
    </nav>
  );
};

export default Navbar;
