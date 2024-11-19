// types/hotel.ts
interface Room {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }
  
  interface Host {
    name: string;
    email: string;
  }
  
  interface Location {
    latitude: number;
    longitude: number;
  }
  
  interface Hotel {
    id: string;
    slug: string;
    images: string[];
    title: string;
    description: string;
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    host: Host;
    address: string;
    location: Location;
    rooms: Room[];
  }
  
  // pages/hotels/[id].tsx
  import React from 'react';
  import Head from 'next/head';
  import { GetServerSideProps } from 'next';
  import { FaBed, FaBath, FaParking, FaWifi } from 'react-icons/fa';
  import { MdOutdoorGrill, MdKitchen, MdLocalLaundryService, MdPool, MdSpa, MdBeachAccess, MdRoomService } from 'react-icons/md';
  
  const amenityIcons: { [key: string]: React.ReactNode } = {
    'wifi': <FaWifi className="text-xl" />,
    'pool': <MdPool className="text-xl" />,
    'spa': <MdSpa className="text-xl" />,
    'beach access': <MdBeachAccess className="text-xl" />,
    'room service': <MdRoomService className="text-xl" />
  };
  
  interface HotelPageProps {
    hotel: Hotel;
  }
  
  const HotelPage: React.FC<HotelPageProps> = ({ hotel }) => {
    if (!hotel) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <Head>
          <title>{hotel.title} | Stunning View</title>
          <meta name="description" content={hotel.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          <main>
            {/* Header Section */}
            <div className="mb-8">
              <p className="text-gray-600 mb-2">Entire hotel</p>
              <h1 className="text-3xl font-bold mb-4">
                {hotel.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-bold">4.9</span>
                <span>Exceptional</span>
                <a href="#reviews" className="text-blue-600 hover:underline">
                  See all reviews
                </a>
              </div>
            </div>
  
            {/* Basic Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <FaBed className="text-xl" />
                <span>{hotel.bedroomCount} bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed className="text-xl" />
                <span>Sleeps {hotel.guestCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBath className="text-xl" />
                <span>{hotel.bathroomCount} bathroom{hotel.bathroomCount > 1 ? 's' : ''}</span>
              </div>
            </div>
  
            {/* Amenities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {amenityIcons[amenity.toLowerCase()]}
                    <span className="capitalize">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
  
            {/* Location */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="bg-gray-100 h-48 mb-4 rounded-lg">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map View
                  <p>{hotel.address}</p>
                </div>
              </div>
            </section>
  
            {/* Rooms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{room.roomTitle}</h3>
                    <p>{room.bedroomCount} Bedroom{room.bedroomCount > 1 ? 's' : ''}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
  
          {/* Booking Card */}
          <aside className="lg:sticky lg:top-6 h-fit">
            <div className="border rounded-xl p-6 shadow-lg">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold">Contact Host</span>
              </div>
  
              <div className="mb-4">
                <p className="font-semibold">{hotel.host.name}</p>
                <p className="text-gray-600">{hotel.host.email}</p>
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
                  {Array.from({ length: hotel.guestCount }, (_, i) => i + 1).map(num => (
                    <option key={num}>{num} traveler{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
  
              <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium mb-3 hover:bg-blue-700 transition-colors">
                Book now
              </button>
  
              <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-3 font-medium hover:bg-blue-50 transition-colors">
                Contact host
              </button>
            </div>
          </aside>
        </div>
      </div>
    );
  };


  async function fetchHotelDetails(slug: string, id: string): Promise<Hotel | null> {
    const response = await fetch(`http://localhost:3001/api/hotel/${id}`);
  
    if (!response.ok) {
      console.error(`Failed to fetch hotel: ${response.status}`);
      return null;
    }
  
    return response.json();
  }
  
  export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string };
    const hotel = await fetchHotelDetails('hotel-slug', id); // Replace 'hotel-slug' with actual slug if needed
  
    if (!hotel) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        hotel,
      },
    };
  };
  
  export default HotelPage;