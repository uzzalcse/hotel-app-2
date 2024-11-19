// // app/page.tsx
// import React from "react";

// // Define the type for a hotel
// type Hotel = {
//   id: string;
//   slug: string;
//   images: string[];
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   host: {
//     name: string;
//     email: string;
//   };
//   address: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   rooms: {
//     hotelSlug: string;
//     roomSlug: string;
//     roomImage: string;
//     roomTitle: string;
//     bedroomCount: number;
//   }[];
// };

// // Fetch hotel data from the API
// async function fetchHotels(): Promise<Hotel[]> {
//   const response = await fetch("http://localhost:3001/api/hotels", {
//     next: { revalidate: 0 }, // Optional: Disable caching for fresh data on every request
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch hotels: ${response.status}`);
//   }

//   return response.json();
// }

// const HotelsPage: React.FC = async () => {
//   let hotels: Hotel[] = [];

//   try {
//     hotels = await fetchHotels();
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     hotels = []; // Fallback to an empty list if an error occurs
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold">{hotel.title}</h2>
//               <p className="text-sm text-gray-600">{hotel.description}</p>
//               <p className="text-sm text-gray-800 mt-2">
//                 <strong>Address:</strong> {hotel.address}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Host:</strong> {hotel.host.name} ({hotel.host.email})
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Guest Count:</strong> {hotel.guestCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Bedrooms:</strong> {hotel.bedroomCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Bathrooms:</strong> {hotel.bathroomCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Location:</strong> Latitude {hotel.location.latitude}, Longitude{" "}
//                 {hotel.location.longitude}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Amenities:</strong> {hotel.amenities.join(", ")}
//               </p>

//               <h3 className="text-md font-semibold mt-4">Rooms:</h3>
//               <div className="space-y-4">
//                 {hotel.rooms.map((room) => (
//                   <div
//                     key={room.roomSlug}
//                     className="border rounded-md p-2 bg-gray-50"
//                   >
//                     <p className="text-sm">
//                       <strong>Room Title:</strong> {room.roomTitle}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Room Slug:</strong> {room.roomSlug}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Hotel Slug:</strong> {room.hotelSlug}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Bedroom Count:</strong> {room.bedroomCount}
//                     </p>
//                     {room.roomImage && (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={room.roomImage}
//                         alt={room.roomTitle}
//                         className="w-full h-32 object-cover rounded-md mt-2"
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-500">No hotels available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HotelsPage;




// code 2 

// import ImageGallery from "@components/ImageGallery";
// import React from "react";

// // Define the type for a hotel
// type Hotel = {
//   id: string;
//   slug: string;
//   images: string[];
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   host: {
//     name: string;
//     email: string;
//   };
//   address: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   rooms: {
//     hotelSlug: string;
//     roomSlug: string;
//     roomImage: string;
//     roomTitle: string;
//     bedroomCount: number;
//   }[];
// };

// // Fetch hotel data from the API
// async function fetchHotels(): Promise<Hotel[]> {
//   const response = await fetch("http://localhost:3001/api/hotels", {
//     next: { revalidate: 0 }, // Optional: Disable caching for fresh data on every request
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch hotels: ${response.status}`);
//   }

//   return response.json();
// }

// const HotelsPage: React.FC = async () => {
//   let hotels: Hotel[] = [];

//   try {
//     hotels = await fetchHotels();
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     hotels = []; // Fallback to an empty list if an error occurs
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold">{hotel.title}</h2>
//               <p className="text-sm text-gray-600">{hotel.description}</p>
//               <div className="flex space-x-2 mt-2">
//                 {hotel.images.map((image, index) => (
//                   // eslint-disable-next-line @next/next/no-img-element
//                   <img
//                     key={index}
//                     src={`http://localhost:3001${image}`}
//                     alt={`Image of ${hotel.title}`}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-800 mt-2">
//                 <strong>Address:</strong> {hotel.address}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Host:</strong> {hotel.host.name} ({hotel.host.email})
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Guest Count:</strong> {hotel.guestCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Bedrooms:</strong> {hotel.bedroomCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Bathrooms:</strong> {hotel.bathroomCount}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Location:</strong> Latitude {hotel.location.latitude}, Longitude{" "}
//                 {hotel.location.longitude}
//               </p>
//               <p className="text-sm text-gray-800">
//                 <strong>Amenities:</strong> {hotel.amenities.join(", ")}
//               </p>

//               <h3 className="text-md font-semibold mt-4">Rooms:</h3>
//               <div className="space-y-4">
//                 {hotel.rooms.map((room) => (
//                   <div
//                     key={room.roomSlug}
//                     className="border rounded-md p-2 bg-gray-50"
//                   >
//                     <p className="text-sm">
//                       <strong>Room Title:</strong> {room.roomTitle}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Room Slug:</strong> {room.roomSlug}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Hotel Slug:</strong> {room.hotelSlug}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Bedroom Count:</strong> {room.bedroomCount}
//                     </p>
//                     {room.roomImage && (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={room.roomImage}
//                         alt={room.roomTitle}
//                         className="w-full h-32 object-cover rounded-md mt-2"
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-500">No hotels available</div>
//         )}
//       </div>
//       <ImageGallery />
//     </div>
//   );
// };

// export default HotelsPage;

//code 2

// import ImageGallery from "@/components/ImageGallery";
// import Link from "next/link";
// import React from "react";


// type Hotel = {
//   id: string;
//   slug: string;
//   images: string[];
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   host: {
//     name: string;
//     email: string;
//   };
//   address: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   rooms: {
//     hotelSlug: string;
//     roomSlug: string;
//     roomImage: string;
//     roomTitle: string;
//     bedroomCount: number;
//   }[];
// };

// async function fetchHotels(): Promise<Hotel[]> {
//   const response = await fetch("http://localhost:3001/api/hotels", {
//     next: { revalidate: 0 },
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch hotels: ${response.status}`);
//   }

//   return response.json();
// }

// const HotelsPage = async () => {
//   let hotels: Hotel[] = [];
//   try {
//     hotels = await fetchHotels();
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     hotels = [];
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <Link
//               key={hotel.id}
//               href={`/hotel-details/${hotel.slug}/${hotel.id}`}
//               className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold">{hotel.title}</h2>
//               <p className="text-sm text-gray-600">{hotel.description}</p>
//               <div className="flex space-x-2 mt-2">
//                 {hotel.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={`http://localhost:3001${image}`}
//                     alt={`Image of ${hotel.title}`}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//             </Link>
//           ))
//         ) : (
//           <div className="text-gray-500">No hotels available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HotelsPage;

// show only title and first image of the hotel

// import Link from "next/link";
// import React from "react";

// type Hotel = {
//   id: string;
//   slug: string;
//   images: string[];
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   host: {
//     name: string;
//     email: string;
//   };
//   address: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   rooms: {
//     hotelSlug: string;
//     roomSlug: string;
//     roomImage: string;
//     roomTitle: string;
//     bedroomCount: number;
//   }[];
// };

// async function fetchHotels(): Promise<Hotel[]> {
//   const response = await fetch("http://localhost:3001/api/hotels", {
//     next: { revalidate: 0 },
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch hotels: ${response.status}`);
//   }

//   return response.json();
// }

// const HotelsPage = async () => {
//   let hotels: Hotel[] = [];
//   try {
//     hotels = await fetchHotels();
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     hotels = [];
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <Link
//               key={hotel.id}
//               href={`/hotel-details/${hotel.slug}/${hotel.id}`}
//               className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold">{hotel.title}</h2>
//               <p className="text-sm text-gray-600">{hotel.description}</p>
//               {/* Show only the first image */}
//               {hotel.images.length > 0 ? (
//                 <img
//                   src={`http://localhost:3001${hotel.images[0]}`}
//                   alt={`Image of ${hotel.title}`}
//                   className="w-full h-48 object-contain rounded-md mt-2" // Changed to object-contain
//                 />
//               ) : (
//                 <div className="text-sm text-gray-500 mt-2">No image available</div>
//               )}
//             </Link>
//           ))
//         ) : (
//           <div className="text-gray-500">No hotels available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HotelsPage;


import Link from "next/link";
import React, { Suspense } from "react";

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotel-details/${hotel.slug}/${hotel.id}`}
              className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Centering the title */}
              <h2 className="text-lg font-semibold text-center">{hotel.title}</h2>
              
              {/* Show only the first image */}
              {hotel.images.length > 0 ? (
                <img
                  src={`http://localhost:3001${hotel.images[0]}`}
                  alt={`Image of ${hotel.title}`}
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





