import React from 'react';


interface Room {
    hotelSlug: string
    roomSlug: string
    roomImage: string
    roomTitle: string
    bedroomCount: number
  }
  
  interface Host {
    name: string
    email: string
  }
  
  interface Location {
    latitude: number
    longitude: number
  }
  
  interface Hotel {
    id: string
    slug: string
    images: string[]
    title: string
    description: string
    guestCount: number
    bedroomCount: number
    bathroomCount: number
    amenities: string[]
    host: Host
    address: string
    location: Location
    rooms: Room[]
  }
  

  
  interface HotelPageProps {
    hotel: Hotel
  }
  

function HostAndMessage({ hotel }: HotelPageProps) {
  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto p-6">
      {/* Host Section */}
      <section className="mb-10 flex gap-[160px]">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the host</h2>
        </div>
        <div className='h-40'>
          <p className="font-semibold text-gray-800 mb-16">{`Hosted by ${hotel.host.name}`}</p>
          <p className="font-semibold text-gray-800 mb-2">Languages:</p>
          <p className="text-sm text-gray-600">English, French, German, Spanish</p>
        </div>
      </section>

      {/* Send Message Section */}
      <section className='flex gap-[160px]'>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a message</h3>
        </div>
        <div>
          <a
            href="#"
            className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact host
          </a>
        </div>
      </section>
    </div>
  );
};

export default HostAndMessage;
