// components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-end p-4 border-b border-gray-200 relative">
      {/* Logo (hidden on small screens) */}
      <div className="hidden sm:block">
        <Image src="/favicon_1.png" alt="Logo" width={20} height={20} />
      </div>

      {/* Account toggle for mobile view */}
      <input type="checkbox" id="menu-checkbox" className="hidden peer" />
      <label
        htmlFor="menu-checkbox"
        className="sm:hidden p-2 cursor-pointer"
        aria-label="Toggle account menu"
      >
        <span className="material-icons text-gray-600 text-2xl"> <Image src="/account.png" alt="Logo" width={20} height={20} /> </span>
      </label>

      {/* Navigation Links */}
      <nav className="hidden sm:flex space-x-4">
        <Link href="#" className="text-gray-800 text-sm">United States</Link>
        <Link href="#" className="text-gray-800 text-sm">Trip Boards</Link>
        <Link href="#" className="text-gray-800 text-sm">List your property</Link>
        <Link href="#" className="text-gray-800 text-sm">Help</Link>
        <Link href="#" className="text-gray-800 text-sm">My trips</Link>
        <Link href="#" className="text-gray-800 text-sm">Sign in</Link>
      </nav>

      {/* Mobile menu - shown when checkbox is checked */}
      <nav className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex-col space-y-2 hidden peer-checked:flex sm:hidden z-50">
        <Link href="#" className="text-gray-800 text-sm block border-b pb-2">United States</Link>
        <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Trip Boards</Link>
        <Link href="#" className="text-gray-800 text-sm block border-b pb-2">List your property</Link>
        <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Help</Link>
        <Link href="#" className="text-gray-800 text-sm block border-b pb-2">My trips</Link>
        <Link href="#" className="text-gray-800 text-sm block">Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
