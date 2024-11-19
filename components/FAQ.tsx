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
  

function FAQ({ hotel }: HotelPageProps) {

// const FAQ: React.FC = () => {
  return (
    <section className="mb-10 flex flex-row  max-w-5xl mx-auto p-6">
      {/* FAQ Heading */}
      <div className="w-1/5">
        <h2 className="text-2xl font-semibold text-gray-800">Frequently asked questions</h2>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-4 w-4/5">
        {[
           `Is ${hotel.title} pet-friendly?`,
          `What time is check-in at ${hotel.title} Access?`,
          `What time is check-out at  ${hotel.title}?`,
          `Where is  ${hotel.title} located?`,
        ].map((question, index) => (
          <div key={index} className="flex items-start">
            <h5 className="relative pl-4 text-gray-700 text-base font-medium before:content-['›'] before:absolute before:left-0 before:text-gray-500">
              {question}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
