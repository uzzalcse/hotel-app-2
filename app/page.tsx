

import Link from "next/link";
import Image from "next/image";

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

async function fetchHotels(): Promise<Hotel[]> {
  const response = await fetch("http://localhost:3001/api/hotels", {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch hotels: ${response.status}`);
  }

  return response.json();
}

const HotelsPage = async () => {
  let hotels: Hotel[] = [];
  try {
    hotels = await fetchHotels();
  } catch (error) {
    console.error("Error fetching hotels:", error);
    hotels = [];
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-auto">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotel-details/${hotel.slug}/${hotel.id}`}
              className="border p-1 rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Centering the title */}
              <h2 className="text-lg font-semibold text-center">{hotel.title}</h2>

              {/* Show only the first image */}
              {hotel.images.length > 0 ? (
                <Image
                  src={`http://localhost:3001${hotel.images[0]}`}
                  alt={`Image of ${hotel.title}`}
                  width={500} // Adjust based on your design
                  height={300} // Adjust based on your design
                  className="w-full h-48 object-contain rounded-md mt-2"
                />
              ) : (
                <div className="text-sm text-gray-500 mt-2">No image available</div>
              )}
            </Link>
          ))
        ) : (
          <div className="text-gray-500">No hotels available</div>
        )}
      </div>
    </div>
  );
};

export default HotelsPage;




