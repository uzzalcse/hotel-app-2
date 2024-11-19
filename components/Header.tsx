// // components/Header.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header: React.FC = () => {
//   return (
//     <header className="flex items-center justify-end p-4 border-b border-gray-200 relative">
//       {/* Logo (hidden on small screens) */}
//       <div className="hidden sm:block">
//         <Image src="/favicon_1.png" alt="Logo" width={20} height={20} />
//       </div>

//       {/* Account toggle for mobile view */}
//       <input type="checkbox" id="menu-checkbox" className="hidden peer" />
//       <label
//         htmlFor="menu-checkbox"
//         className="sm:hidden p-2 cursor-pointer"
//         aria-label="Toggle account menu"
//       >
//         <span className="material-icons text-gray-600 text-2xl"> <Image src="/account.png" alt="Logo" width={20} height={20} /> </span>
//       </label>

//       {/* Navigation Links */}
//       <nav className="hidden sm:flex space-x-4">
//         <Link href="#" className="text-gray-800 text-sm">United States</Link>
//         <Link href="#" className="text-gray-800 text-sm">Trip Boards</Link>
//         <Link href="#" className="text-gray-800 text-sm">List your property</Link>
//         <Link href="#" className="text-gray-800 text-sm">Help</Link>
//         <Link href="#" className="text-gray-800 text-sm">My trips</Link>
//         <Link href="#" className="text-gray-800 text-sm">Sign in</Link>
//       </nav>

//       {/* Mobile menu - shown when checkbox is checked */}
//       <nav className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex-col space-y-2 hidden peer-checked:flex sm:hidden z-50">
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">United States</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Trip Boards</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">List your property</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Help</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">My trips</Link>
//         <Link href="#" className="text-gray-800 text-sm block">Sign in</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// components/Header.tsx
// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState<string>('us');
//   const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

//   // Define the region-to-currency mapping
//   const regionCurrencyMap: Record<string, string> = {
//     us: 'USD',
//     pt: 'EUR',
//     fr: 'EUR',
//     de: 'EUR',
//     uk: 'GBP'
//   };

//   const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const region = event.target.value;
//     setSelectedRegion(region);
//     setSelectedCurrency(regionCurrencyMap[region]); // Update currency based on region
//   };

//   const handleSaveRegion = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <header className="flex items-center justify-end p-4 border-b border-gray-200 relative">
//       {/* Logo (hidden on small screens) */}
//       <div className="hidden sm:block">
//         <Image src="/favicon_1.png" alt="Logo" width={20} height={20} />
//       </div>

//       {/* Account toggle for mobile view */}
//       <input type="checkbox" id="menu-checkbox" className="hidden peer" />
//       <label
//         htmlFor="menu-checkbox"
//         className="sm:hidden p-2 cursor-pointer"
//         aria-label="Toggle account menu"
//       >
//         <span className="material-icons text-gray-600 text-2xl">
//           <Image src="/account.png" alt="Logo" width={20} height={20} />
//         </span>
//       </label>

//       {/* Navigation Links */}
//       <nav className="hidden sm:flex space-x-4">
//         <button
//           className="text-gray-800 text-sm"
//           onClick={() => setIsModalOpen(true)}
//         >
//           {selectedRegion.toUpperCase()}
//         </button>
//         <Link href="#" className="text-gray-800 text-sm">Trip Boards</Link>
//         <Link href="#" className="text-gray-800 text-sm">List your property</Link>
//         <Link href="#" className="text-gray-800 text-sm">Help</Link>
//         <Link href="#" className="text-gray-800 text-sm">My trips</Link>
//         <Link href="#" className="text-gray-800 text-sm">Sign in</Link>
//       </nav>

//       {/* Mobile menu - shown when checkbox is checked */}
//       <nav className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex-col space-y-2 hidden peer-checked:flex sm:hidden z-50">
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">United States</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Trip Boards</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">List your property</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">Help</Link>
//         <Link href="#" className="text-gray-800 text-sm block border-b pb-2">My trips</Link>
//         <Link href="#" className="text-gray-800 text-sm block">Sign in</Link>
//       </nav>

//       {/* Region Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-2xl text-gray-600"
//             >
//               &times;
//             </button>
//             <h2 className="text-lg font-bold mb-4">Select Region</h2>
//             <div className="mb-4">
//               <label htmlFor="regionSelect" className="block text-sm text-gray-600 mb-2">Region</label>
//               <select
//                 id="regionSelect"
//                 value={selectedRegion}
//                 onChange={handleRegionChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               >
//                 <option value="us">United States</option>
//                 <option value="pt">Portugal</option>
//                 <option value="fr">France</option>
//                 <option value="de">Germany</option>
//                 <option value="uk">United Kingdom</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="currencySelect" className="block text-sm text-gray-600 mb-2">Currency</label>
//               <select
//                 id="currencySelect"
//                 value={selectedCurrency}
//                 onChange={(e) => setSelectedCurrency(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 disabled
//               >
//                 <option value={selectedCurrency}>{selectedCurrency}</option>
//               </select>
//             </div>

//             <button
//               onClick={handleSaveRegion}
//               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


'use client'
// components/Header.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('us');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  // Define the region-to-currency mapping
  const regionCurrencyMap: Record<string, string> = {
    us: 'USD',
    pt: 'EUR',
    fr: 'EUR',
    de: 'EUR',
    uk: 'GBP'
  };

  // Full country names for display
  const regionNames: Record<string, string> = {
    us: 'United States',
    pt: 'Portugal',
    fr: 'France',
    de: 'Germany',
    uk: 'United Kingdom'
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSelectedCurrency(regionCurrencyMap[region]); // Update currency based on region
  };

  const handleSaveRegion = () => {
    setIsModalOpen(false);
  };

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
        <span className="material-icons text-gray-600 text-2xl">
          <Image src="/account.png" alt="Logo" width={20} height={20} />
        </span>
      </label>

      {/* Navigation Links */}
      <nav className="hidden sm:flex space-x-4">
        <button
          className="text-gray-800 text-sm"
          onClick={() => setIsModalOpen(true)}
        >
          {regionNames[selectedRegion]} {/* Display the full country name */}
        </button>
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

      {/* Region Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            {/* Close button in the top-left corner */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 left-2 text-2xl text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Select Region</h2>
            <div className="mb-4">
              <label htmlFor="regionSelect" className="block text-sm text-gray-600 mb-2">Region</label>
              <select
                id="regionSelect"
                value={selectedRegion}
                onChange={handleRegionChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="us">United States</option>
                <option value="pt">Portugal</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="currencySelect" className="block text-sm text-gray-600 mb-2">Currency</label>
              <select
                id="currencySelect"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                disabled
              >
                <option value={selectedCurrency}>{selectedCurrency}</option>
              </select>
            </div>

            <button
              onClick={handleSaveRegion}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
