import React from 'react';

const ExploreSection: React.FC = () => {
  return (
    <section className="explore-section container px-4 py-8 max-w-2xl mx-auto p-6">
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
          <div className="map-location text-sm text-gray-900 mb-1">Juneau, Alaska</div>
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
  );
};

export default ExploreSection;
