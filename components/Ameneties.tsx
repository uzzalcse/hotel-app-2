import React from "react";

const Amenities: React.FC = () => {
  const amenities = [
    { icon: "🍳", label: "Kitchen" },
    { icon: "🧺", label: "Washer" },
    { icon: "🧺", label: "Dryer" },
    { icon: "🏡", label: "Outdoor Space" },
    { icon: "🅿️", label: "Parking available" },
    { icon: "🌊", label: "Ocean view" },
  ];

  return (
    <section className="mb-8 pt-0 max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-5">Amenities</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl text-gray-600">{amenity.icon}</span>
            <span className="text-gray-800">{amenity.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-600 text-sm hover:underline"
        >
          See all 34 amenities
        </a>
      </div>
    </section>
  );
};

export default Amenities;
