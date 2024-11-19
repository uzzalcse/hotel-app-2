import React from "react";

const SpacesSection: React.FC = () => {
  const spaces = [
    { icon: "🏊", label: "Deck or patio" },
    { icon: "🍳", label: "Kitchen" },
    { icon: "🏖️", label: "Balcony" },
    { icon: "🌺", label: "Garden" },
  ];

  return (
    <section className="mb-8container px-4 py-8 max-w-5xl mx-auto p-6">
      <h2 className="text-lg font-semibold mb-4">Spaces</h2>
      <div className="space-y-3">
        {spaces.map((space, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-800">
            <span className="text-lg">{space.icon}</span>
            <span>{space.label}</span>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="text-blue-600 text-sm mt-3 inline-block hover:underline"
      >
        See all rooms and beds details
      </a>
    </section>
  );
};

export default SpacesSection;
