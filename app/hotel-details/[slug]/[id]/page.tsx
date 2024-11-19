
import React from "react";
import ImageGallery from "@/components/ImageGallery"; // Adjust the path accordingly
import Header from "@/components/Header";
import ShareAndSave from "@/components/ShareAndSave";
import Navbar from "@/components/Navbar";
import Below2 from "@/components/Below2";
import PropertyDetailsPage from "@/components/PropertyDetailsPage";
import BookingPolicies from "@/components/BookingPolicies";
import RecentReviews from "@/components/RecentReviews";
import HostAndMessage from "@/components/HostAndMessage";
import FAQ from "@/components/FAQ";
import AboutProperty from "@/components/AboutProperty";
import SpacesSection from "@/components/SpacesSection";
import Ameneties from "@/components/Ameneties";
import { notFound } from "next/navigation";
// import Listing from "@/components/Listing";

// Define the type for a hotel
type Hotel = {
  id: string;
  slug: string;
  images: string[];
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  host: {
    name: string;
    email: string;
  };
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rooms: {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }[];
};

async function fetchHotelDetails(slug: string, id: string): Promise<Hotel | null> {
  const response = await fetch(`http://localhost:3001/api/hotel/${id}`);

  if (!response.ok) {
    // console.error(`Failed to fetch hotel: ${response.status}`);
    return null;
  }

  return response.json();
}

// Define the component
const HotelDetailsPage = async ({
  params,
}: {
  params: { slug: string; id: string };
}) => {
  const { slug, id } = params;
  const hotel = await fetchHotelDetails(slug, id);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="p-4">
      <Header/>
      <ShareAndSave/>


      {/* Pass images dynamically to the ImageGallery component */}
      <div className="mt-4">
        {/* <h2 className="text-xl font-semibold">Images:</h2> */}
        <ImageGallery images={hotel.images} />
      </div>

      <Navbar/>
{/* 
      <h1 className="text-3xl font-bold">{hotel.title}</h1>
      <p className="text-lg text-gray-700">{hotel.description}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Details:</h2>
        <p>
          <strong>Address:</strong> {hotel.address}
        </p>
        <p>
          <strong>Host:</strong> {hotel.host.name} ({hotel.host.email})
        </p>
        <p>
          <strong>Guest Count:</strong> {hotel.guestCount}
        </p>
        <p>
          <strong>Bedrooms:</strong> {hotel.bedroomCount}
        </p>
        <p>
          <strong>Bathrooms:</strong> {hotel.bathroomCount}
        </p>
        <p>
          <strong>Amenities:</strong> {hotel.amenities.join(", ")}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Rooms:</h2>
        {hotel.rooms.map((room) => (
          <div key={room.roomSlug} className="border rounded-md p-2 bg-gray-50 mt-2">
            <p>
              <strong>Room Title:</strong> {room.roomTitle}
            </p>
            <p>
              <strong>Room Slug:</strong> {room.roomSlug}
            </p>
            <p>
              <strong>Bedroom Count:</strong> {room.bedroomCount}
            </p>
          </div>
        ))}
      </div> */}
      <Below2 hotel={hotel}/>
      <SpacesSection/>
      <AboutProperty hotel={hotel}/>
      <Ameneties/>
      <PropertyDetailsPage/>
      <BookingPolicies/>
      <FAQ hotel={hotel}/>
      <RecentReviews/>
      <HostAndMessage hotel={hotel}/>
    </div>
  );
};

export default HotelDetailsPage;


