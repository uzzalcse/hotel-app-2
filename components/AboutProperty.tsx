import React from "react";
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
  

function AboutProperty({ hotel }: HotelPageProps) {
  return (
    <div className="pt-0 max-w-5xl mx-auto p-6">
      <section className="mt-8">
        {/* About this property */}
        <h2 className="text-lg font-semibold mb-4">About this property</h2>

        <div className="mb-6 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold">
            {hotel.title}
          </h3>
          <p>
            {hotel.description}
          </p>
        </div>

        {/* Property Info */}
        <div className="my-8 py-6 border-t border-b border-gray-200">
          <div className="mb-6">
            <h4 className="font-semibold mb-2">-- THE PROPERTY --</h4>
            <p className="text-gray-600 leading-relaxed">
              CBJ00001041 | 1115 Sq Ft | 2 Private Decks | Lena Cove & Mountain
              Views | 2 Bicycles Provided
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long
              Twin Bed
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">KITCHEN HIGHLIGHTS:</h4>
            <p className="text-gray-600">Flat-screen TV, dining table, washer/dryer</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">GENERAL:</h4>
            <p className="text-gray-600">
              Free WiFi, central heating, linens/towels, keyless entry, hair
              dryer, ceiling fans
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">-- THE LOCATION --</h4>
            <p className="text-gray-600">
              GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area
              (0.6 miles), Green Gardens Township Park (16 miles), Various
              hiking trails...
            </p>
          </div>
        </div>

        {/* Policies */}
        <div className="my-6">
          <h4 className="font-semibold mb-2">-- POLICIES --</h4>
          <ul className="list-none mt-2 space-y-2 pl-4">
            {[
              "No smoking",
              "No pets allowed",
              "No events, parties or large gatherings",
              "Must be at least 25 years old to book",
              "Additional fees and taxes may apply",
              "Photo ID may be required upon check-in",
            ].map((policy, index) => (
              <li
                key={index}
                className="text-gray-600 relative before:content-['•'] before:absolute before:left-0 before:text-gray-600 before:-ml-4"
              >
                {policy}
              </li>
            ))}
          </ul>
        </div>

        {/* Property Manager */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Property manager</h3>
          <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-200 rounded-full">
            🏠
          </div>
          <p className="font-semibold text-gray-600">{`${hotel.host.name}`}</p>
        </div>

        {/* Languages */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <p className="text-gray-600 text-sm">English, French, German, Spanish</p>
        </div>
      </section>
    </div>
  );
};

export default AboutProperty;
