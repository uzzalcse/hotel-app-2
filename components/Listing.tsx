
// 'use client'
// import { useState, useEffect, useRef } from 'react';



// const Listing = () => {
//   const [counts, setCounts] = useState({
//     adults: 2,
//     children: 0,
//   });
//   const [isPopupActive, setIsPopupActive] = useState(false);
//   const [travelersText, setTravelersText] = useState(`${counts.adults + counts.children} traveler${counts.adults + counts.children !== 1 ? 's' : ''}`);
  
//   const travelersInputRef = useRef<HTMLDivElement>(null);
//   const travelersPopupRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         travelersPopupRef.current &&
//         !travelersPopupRef.current.contains(event.target as Node) &&
//         travelersInputRef.current &&
//         !travelersInputRef.current.contains(event.target as Node)
//       ) {
//         setIsPopupActive(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const updateCount = (type: 'adults' | 'children', change: number) => {
//     const newCount = counts[type] + change;

//     if (type === 'adults') {
//       if (newCount >= 1 && newCount <= 10) {
//         setCounts((prev) => ({
//           ...prev,
//           adults: newCount,
//         }));
//       }
//     } else {
//       if (newCount >= 0 && newCount <= 10) {
//         setCounts((prev) => ({
//           ...prev,
//           children: newCount,
//         }));
//       }
//     }
//   };

//   const updateTravelersDisplay = () => {
//     const total = counts.adults + counts.children;
//     setTravelersText(`${total} traveler${total !== 1 ? 's' : ''}`);
//   };

//   useEffect(() => {
//     updateTravelersDisplay();
//   }, [counts]);

//   return (
//     <div className="main-container flex">
//       {/* Left Content Section */}
//       <main className="listing-content flex-grow p-8">
//         <div className="property-type text-lg font-semibold text-gray-500 mb-2">Entire home</div>
//         <h1 className="listing-title text-3xl font-semibold mb-4">Juneau Vacation Home: Stunning View + Beach Access</h1>

//         <div className="rating-section flex items-center mb-4">
//           <div className="rating-badge flex items-center bg-green-200 px-3 py-1 rounded-full text-sm font-medium text-green-800 mr-4">
//             <span className="rating-score text-xl font-bold mr-1">9.8</span>
//             <span>Exceptional</span>
//           </div>
//           <a href="#" className="reviews-link text-blue-600 hover:underline">See all 24 reviews</a>
//         </div>

//         <div className="quick-info grid grid-cols-2 gap-4 mb-4">
//           <div className="info-item flex items-center">
//             <i className="icon text-2xl mr-2">🏠</i>
//             <span>2 bedrooms</span>
//           </div>
//           <div className="info-item flex items-center">
//             <i className="icon text-2xl mr-2">🚽</i>
//             <span>1 bathroom</span>
//           </div>
//           <div className="info-item flex items-center">
//             <i className="icon text-2xl mr-2">👥</i>
//             <span>Sleeps 4</span>
//           </div>
//           <div className="info-item flex items-center">
//             <i className="icon text-2xl mr-2">📏</i>
//             <span>1155 sq ft</span>
//           </div>
//         </div>

//         <section className="amenities-section mb-8">
//           <h2 className="section-title text-xl font-semibold mb-4">Popular amenities</h2>
//           <div className="amenities-grid grid grid-cols-3 gap-4">
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">🔥</i>
//               <span>Barbecue grill</span>
//             </div>
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">🧺</i>
//               <span>Washer</span>
//             </div>
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">🌳</i>
//               <span>Outdoor Space</span>
//             </div>
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">🅿️</i>
//               <span>Parking available</span>
//             </div>
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">🍳</i>
//               <span>Kitchen</span>
//             </div>
//             <div className="amenity-item flex items-center">
//               <i className="icon text-2xl mr-2">👕</i>
//               <span>Dryer</span>
//             </div>
//           </div>
//           <a href="#" className="see-all-link text-blue-600 hover:underline">See all property amenities</a>
//         </section>

//         <section className="explore-section mb-8">
//           <h2 className="explore-title text-xl font-semibold mb-4">Explore the area</h2>
//           <div className="explore-content flex">
//             <div className="map-container flex-grow mr-8">
//               <div className="map-image">
//                 <svg className="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
//                   <rect width="100" height="100" fill="#e3f2f6" />
//                   <path className="map-roads" d="M20,50 C20,20 80,80 80,50" />
//                   <path className="map-roads" d="M10,30 C40,30 60,70 90,70" />
//                   <path className="map-roads" d="M40,10 C40,40 60,60 60,90" />
//                   <path d="M0,0 C30,20 70,20 100,0" fill="#c2e7f2" />
//                   <path d="M80,100 C70,80 90,80 100,100" fill="#c2e7f2" />
//                 </svg>
//                 <div className="map-point absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//               </div>
//               <div className="map-location text-sm mt-4">Juneau, Alaska</div>
//               <a href="#" className="map-link text-blue-600 hover:underline">View in a map</a>
//             </div>
//             <div className="location-list flex flex-col">
//               <div className="location-item flex justify-between mb-2">
//                 <span className="location-name flex items-center">
//                   <span className="material-icons location-icon mr-2">location_on</span>
//                   Auke Bay
//                 </span>
//                 <span className="location-distance">6 min drive</span>
//               </div>
//               <div className="location-item flex justify-between mb-2">
//                 <span className="location-name flex items-center">
//                   <span className="material-icons location-icon mr-2">location_on</span>
//                   University of Alaska–Southeast
//                 </span>
//                 <span className="location-distance">10 min drive</span>
//               </div>
//               <div className="location-item flex justify-between mb-2">
//                 <span className="location-name flex items-center">
//                   <span className="material-icons location-icon mr-2">location_on</span>
//                   Mendenhall Golf Course
//                 </span>
//                 <span className="location-distance">14 min drive</span>
//               </div>
//               <div className="location-item flex justify-between mb-2">
//                 <span className="location-name flex items-center">
//                   <span className="material-icons location-icon mr-2">flight</span>
//                   Juneau, AK (JNU-Juneau Intl.)
//                 </span>
//                 <span className="location-distance">14 min drive</span>
//               </div>
//               <a href="#" className="see-more text-blue-600 hover:underline">See more about this area ›</a>
//             </div>
//           </div>
//         </section>

//         {/* Other sections here */}
//       </main>

//       {/* Right Booking Section */}
//       <div className="booking-section p-8 bg-white shadow-md rounded-lg">
//         {/* Sign in and booking card */}
//         <div className="sign-in-card mb-4">
//           <p>Members get our best prices when signed in!</p>
//           <button className="sign-in-btn bg-green-600 text-white p-2 rounded">Sign in</button>
//         </div>

//         <div className="booking-card">
//           <div className="price-section flex items-baseline mb-4">
//             <span className="price text-3xl font-semibold mr-2">$134</span>
//             <span className="per-night text-lg text-gray-500">per night</span>
//           </div>

//           <div className="cancellation mb-4">
//             <span>Free cancellation</span>
//             <span className="cancellation-info text-gray-500">Before Mon, Nov 4</span>
//           </div>

//           <div className="available-dates flex items-center mb-4">
//             <svg viewBox="0 0 16 16" width="16" height="16" className="mr-2">
//               <circle cx="8" cy="8" r="8" fill="#2e8b57" />
//               <path d="M4 8l3 3l5-5" stroke="white" fill="none" strokeWidth="2" />
//             </svg>
//             <span>Your dates are available</span>
//           </div>

//           {/* Date picker and travelers input */}
//           <div className="date-picker grid grid-cols-2 gap-4 mb-4">
//             <div className="date-input">
//               <div className="date-label">Start date</div>
//               <div className="date-value">Nov 18</div>
//             </div>
//             <div className="date-input">
//               <div className="date-label">End date</div>
//               <div className="date-value">Nov 20</div>
//             </div>
//           </div>

//           <div
//             className="travelers-input flex justify-between items-center mb-4"
//             ref={travelersInputRef}
//             onClick={() => setIsPopupActive(!isPopupActive)}
//           >
//             <div className="travelers-label">Travelers</div>
//             <div className="travelers-value">{travelersText}</div>
//           </div>

//           {isPopupActive && (
//             <div className="travelers-popup" ref={travelersPopupRef}>
//               <div className="traveler-row mb-4">
//                 <div className="traveler-type">Adults</div>
//                 <div className="counter-controls flex items-center">
//                   <button className="counter-btn" onClick={() => updateCount('adults', -1)}>-</button>
//                   <span className="counter-value">{counts.adults}</span>
//                   <button className="counter-btn" onClick={() => updateCount('adults', 1)}>+</button>
//                 </div>
//               </div>
//               <div className="traveler-row mb-4">
//                 <div className="traveler-type">Children</div>
//                 <div className="counter-controls flex items-center">
//                   <button className="counter-btn" onClick={() => updateCount('children', -1)}>-</button>
//                   <span className="counter-value">{counts.children}</span>
//                   <button className="counter-btn" onClick={() => updateCount('children', 1)}>+</button>
//                 </div>
//               </div>
//               <div className="pets-checkbox mb-4">
//                 <input type="checkbox" id="petsCheckbox" />
//                 <label htmlFor="petsCheckbox">I am traveling with pets</label>
//               </div>
//               <button className="done-btn" onClick={() => setIsPopupActive(false)}>Done</button>
//             </div>
//           )}

//           <div className="total-section mb-4">
//             <span>Total</span>
//             <span className="total-price">$543</span>
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <span className="tax-info text-gray-500">Total includes fees, not tax</span>
//             <a href="#" className="price-details text-blue-600 hover:underline">Price details</a>
//           </div>

//           <button className="book-button bg-blue-600 text-white p-2 rounded w-full mb-2">Book now</button>
//           <div className="no-charge text-sm text-gray-500 mb-2">You will not be charged yet</div>
//           <a href="#" className="contact-host text-blue-600 hover:underline">Contact host</a>
//           <div className="property-id text-sm text-gray-500 mt-2">Property # 9838104ha</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listing;

'use client'

import { useState, useEffect, useRef } from 'react'

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

const IconBath = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
    <line x1="10" y1="5" x2="8" y2="7"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="7" y1="19" x2="7" y2="21"></line>
    <line x1="17" y1="19" x2="17" y2="21"></line>
  </svg>
)

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const IconWaves = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
  </svg>
)

const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
)

const IconWarehouse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
    <path d="M6 18h12"></path>
    <path d="M6 14h12"></path>
    <rect width="12" height="12" x="6" y="10"></rect>
  </svg>
)

const IconKitchen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"></path>
    <path d="M21.4 3.6a2.1 2.1 0 0 1 0 3l-9.8 9.8-4 1 1-3.9 9.8-9.9a2.1 2.1 0 0 1 3 0Z"></path>
    <path d="M10.9 17.7 8 19l1.3-2.9"></path>
  </svg>
)

const IconParkingCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
  </svg>
)

export default function Component() {
  const [counts, setCounts] = useState({
    adults: 2,
    children: 0,
  })
  const [isPopupActive, setIsPopupActive] = useState(false)
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  })
  
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
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="text-sm text-blue-600 mb-2">Entire home</div>
          <h1 className="text-2xl font-semibold mb-4">Juneau Vacation Home: Stunning View + Beach Access</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-700 text-white text-sm px-2 py-1 rounded">9.8 Exceptional</div>
            <button className="text-blue-600 text-sm">See all 24 reviews</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <IconHome />
              <span>2 bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <IconBath />
              <span>1 bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <IconUsers />
              <span>Sleeps 4</span>
            </div>
            <div className="flex items-center gap-2">
              <IconWaves />
              <span>1155 sq ft</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <IconFlame />
                <span>Barbecue grill</span>
              </div>
              <div className="flex items-center gap-2">
                <IconWarehouse />
                <span>Outdoor Space</span>
              </div>
              <div className="flex items-center gap-2">
                <IconKitchen />
                <span>Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <IconParkingCircle />
                <span>Parking available</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Explore the area</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Auke Bay</span>
                  <span className="text-gray-600">6 min drive</span>
                </div>
                <div className="flex justify-between">
                  <span>University of Alaska–Southeast</span>
                  <span className="text-gray-600">10 min drive</span>
                </div>
                <div className="flex justify-between">
                  <span>Mendenhall Golf Course</span>
                  <span className="text-gray-600">14 min drive</span>
                </div>
                <div className="flex justify-between">
                  <span>Juneau, AK (JNU-Juneau Intl.)</span>
                  <span className="text-gray-600">14 min drive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 shadow-md">
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
                    value="2024-11-18"
                  />
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value="2024-11-20"
                  />
                </div>
              </div>

              <div ref={travelersInputRef}>
                <label className="block text-sm font-medium mb-1">Travelers</label>
                <button
                  onClick={() => setIsPopupActive(!isPopupActive)}
                  className="w-full p-2 border rounded text-left"
                >
                  {counts.adults + counts.children} travelers
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
        </div>
      </div>
    </div>
  )
}


