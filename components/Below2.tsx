

'use client'

import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { FaBed, FaBath, FaWifi } from 'react-icons/fa'
import { MdPool, MdSpa, MdBeachAccess, MdRoomService } from 'react-icons/md'

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

const amenityIcons: { [key: string]: React.ReactNode } = {
  'wifi': <FaWifi className="text-xl" />,
  'pool': <MdPool className="text-xl" />,
  'spa': <MdSpa className="text-xl" />,
  'beach access': <MdBeachAccess className="text-xl" />,
  'room service': <MdRoomService className="text-xl" />
}

interface HotelPageProps {
  hotel: Hotel
}

export default function HotelPage({ hotel }: HotelPageProps) {
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [counts, setCounts] = useState({
    adults: 2,
    children: 0,
  })
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [travelers, setTravelers] = useState(2)

  const travelersInputRef = useRef<HTMLDivElement>(null)
  const travelersPopupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        travelersPopupRef.current &&
        !travelersPopupRef.current.contains(event.target as Node) &&
        travelersInputRef.current &&
        !travelersInputRef.current.contains(event.target as Node)
      ) {
        setIsPopupActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const updateCount = (type: 'adults' | 'children', change: number) => {
    const newCount = counts[type] + change
    if (type === 'adults' && newCount >= 1 && newCount <= 10) {
      setCounts(prev => ({ ...prev, adults: newCount }))
    } else if (type === 'children' && newCount >= 0 && newCount <= 10) {
      setCounts(prev => ({ ...prev, children: newCount }))
    }
    setTravelers(counts.adults + counts.children + (type === 'adults' ? change : 0) + (type === 'children' ? change : 0))
  }

  if (!hotel) {
    return <div>Loading...</div>
  }

  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto p-6">
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


          {/* Explore the Area */}
          <section className="explore-section container py-8">
            <h2 className="explore-title text-2xl font-semibold text-gray-900 mb-4">
              Explore the area
            </h2>
            <div className="explore-content flex gap-2">
              {/* Map Container */}
              <div className="map-container flex-1 w-44">
                <div className="map-image relative w-full h-32 rounded-lg bg-[#e3f2f6] mb-2 shadow-md overflow-hidden">
                  <svg
                    className="map-svg w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Background */}
                    <rect width="100" height="100" fill="#e3f2f6" />
                    {/* Stylized map elements */}
                    <path className="map-roads" d="M20,50 C20,20 80,80 80,50" />
                    <path className="map-roads" d="M10,30 C40,30 60,70 90,70" />
                    <path className="map-roads" d="M40,10 C40,40 60,60 60,90" />
                    {/* Water bodies */}
                    <path d="M0,0 C30,20 70,20 100,0" fill="#c2e7f2" />
                    <path d="M80,100 C70,80 90,80 100,100" fill="#c2e7f2" />
                  </svg>
                  <div className="map-point absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#006aff] rounded-full shadow-lg animate-pulse"></div>
                </div>
                <div className="map-location text-sm text-gray-900 mb-1">{hotel.address}</div>
                <a href="#" className="map-link text-sm text-gray-900 underline">View in a map</a>
              </div>

              {/* Location List */}
              <div className="location-list flex-1">
                {['Auke Bay', 'University of Alaska–Southeast', 'Mendenhall Golf Course', 'Juneau, AK (JNU-Juneau Intl.)'].map((location, index) => (
                  <div className="location-item flex justify-between items-center mb-3 p-2 rounded-lg hover:bg-gray-100 transition-colors" key={index}>
                    <span className="location-name flex items-center gap-2 text-sm text-gray-900">
                      <span className="material-icons location-icon text-gray-500"></span>
                      {location}
                    </span>
                    <span className="location-distance text-sm text-gray-500">
                      {index % 2 === 0 ? '6 min drive' : '14 min drive'}
                    </span>
                  </div>
                ))}
                <a href="#" className="see-more text-sm text-[#006aff] mt-4 block">See more about this area ›</a>
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
        <aside className="lg:top-6 h-fit">
          <div className="border rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-2xl font-bold">$134</span>
                <span className="text-gray-600"> per night</span>
              </div>
              <div className="text-green-600">Free cancellation</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Check-in - Check-out</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </div>
              </div>

              <div ref={travelersInputRef}>
                <label className="block text-sm font-medium mb-1">Travelers</label>
                <button
                  onClick={() => setIsPopupActive(!isPopupActive)}
                  className="w-full p-2 border rounded text-left"
                >
                  {travelers} traveler{travelers !== 1 ? 's' : ''}
                </button>

                {isPopupActive && (
                  <div
                    ref={travelersPopupRef}
                    className="absolute mt-2 p-4 bg-white border rounded-lg shadow-lg w-72"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Adults</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateCount('adults', -1)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                            disabled={counts.adults <= 1}
                          >
                            -
                          </button>
                          <span>{counts.adults}</span>
                          <button
                            onClick={() => updateCount('adults', 1)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                            disabled={counts.adults >= 10}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateCount('children', -1)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                            disabled={counts.children <= 0}
                          >
                            -
                          </button>
                          <span>{counts.children}</span>
                          <button
                            onClick={() => updateCount('children', 1)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                            disabled={counts.children >= 10}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsPopupActive(false)}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span className="font-bold">$543</span>
              </div>
              <div className="text-sm text-gray-600">
                Total includes fees, not tax
                <button className="text-blue-600 ml-2">Price details</button>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Book now
              </button>
              <div className="text-center text-sm text-gray-600">
                You will not be charged yet
              </div>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded hover:bg-blue-50">
                Contact host
              </button>
            </div>

            <div className="mt-4 text-right text-sm text-gray-600">
              Property # 9838104ha
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}