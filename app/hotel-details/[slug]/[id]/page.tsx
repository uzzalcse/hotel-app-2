
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
      <div className="mt-4">
      <ImageGallery images={hotel.images} />
      </div>
      <Navbar/>
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


