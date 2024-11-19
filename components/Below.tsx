// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { FaBed, FaBath, FaParking, FaWifi } from 'react-icons/fa';
import { MdOutdoorGrill, MdKitchen, MdLocalLaundryService } from 'react-icons/md';

interface Amenity {
  icon: React.ReactNode;
  name: string;
}

interface Location {
  place: string;
  duration: string;
}

const amenities: Amenity[] = [
  { icon: <MdOutdoorGrill className="text-xl" />, name: 'Barbecue grill' },
  { icon: <MdLocalLaundryService className="text-xl" />, name: 'Washer' },
  { icon: <FaWifi className="text-xl" />, name: 'Outdoor Space' },
  { icon: <FaParking className="text-xl" />, name: 'Parking available' },
  { icon: <MdKitchen className="text-xl" />, name: 'Kitchen' },
  { icon: <MdLocalLaundryService className="text-xl" />, name: 'Dryer' },
];

const locations: Location[] = [
  { place: 'Auke Bay', duration: '6 min drive' },
  { place: 'University of Alaska-Southeast', duration: '10 min drive' },
  { place: 'Mendenhall Golf Course', duration: '14 min drive' },
  { place: 'Juneau, AK (JNU-Juneau Intl.)', duration: '14 min drive' },
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      <Head>
        <title>Juneau Vacation Home | Stunning View + Beach Access</title>
        <meta name="description" content="Vacation home rental in Juneau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
        <main>
          {/* Header Section */}
          <div className="mb-8">
            <p className="text-gray-600 mb-2">Entire home</p>
            <h1 className="text-3xl font-bold mb-4">
              Juneau Vacation Home: Stunning View + Beach Access
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-bold">4.9</span>
              <span>Exceptional</span>
              <a href="#reviews" className="text-blue-600 hover:underline">
                See all 24 reviews
              </a>
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <FaBed className="text-xl" />
              <span>2 bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed className="text-xl" />
              <span>Sleeps 4</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-xl" />
              <span>1 bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <span>1150 sq ft</span>
            </div>
          </div>

          {/* Amenities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  {amenity.icon}
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Explore the area</h2>
            <div className="bg-gray-100 h-48 mb-4 rounded-lg">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map View
              </div>
            </div>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex justify-between">
                  <span>{location.place}</span>
                  <span className="text-gray-600">{location.duration}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rooms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Rooms & beds</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bedroom 1</h3>
                <p>1 Queen Bed</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bedroom 2</h3>
                <p>1 Twin Bed</p>
              </div>
            </div>
          </section>
        </main>

        {/* Booking Card */}
        <aside className="lg:sticky lg:top-6 h-fit">
          <div className="border rounded-xl p-6 shadow-lg">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-bold">$134</span>
              <span>per night</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="col-span-2">
                <input
                  type="date"
                  className="w-full border rounded-lg p-3"
                  placeholder="Check-in"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="date"
                  className="w-full border rounded-lg p-3"
                  placeholder="Check-out"
                />
              </div>
            </div>

            <div className="mb-6">
              <select className="w-full border rounded-lg p-3">
                <option>2 travelers</option>
                <option>3 travelers</option>
                <option>4 travelers</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-4 border-t mb-4">
              <span>Total</span>
              <span className="font-bold">$543</span>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium mb-3 hover:bg-blue-700 transition-colors">
              Book now
            </button>

            <p className="text-center text-gray-600 text-sm mb-4">
              You will not be charged yet
            </p>

            <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-3 font-medium hover:bg-blue-50 transition-colors">
              Contact host
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;