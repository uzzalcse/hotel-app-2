"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

// Define types for the hotel data
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

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/hotels");
        setHotels(response.data);
      } catch (err) {
        setError("Failed to fetch hotels. Please try again later.");
        console.log(err);
      }
    };

    fetchHotels();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (hotels.length === 0) {
    return <div className="text-gray-500">Loading hotels...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold">{hotel.title}</h2>
            <p className="text-sm text-gray-600">{hotel.description}</p>
            <p className="text-sm text-gray-800 mt-2">
              <strong>Address:</strong> {hotel.address}
            </p>
            <p className="text-sm text-gray-800">
              <strong>Host:</strong> {hotel.host.name} ({hotel.host.email})
            </p>
            <p className="text-sm text-gray-800">
              <strong>Amenities:</strong> {hotel.amenities.join(", ")}
            </p>
            <p className="text-sm text-gray-800">
              <strong>Rooms:</strong>{" "}
              {hotel.rooms.map((room) => room.roomTitle).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
