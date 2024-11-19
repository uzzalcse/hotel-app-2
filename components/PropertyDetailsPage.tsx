import React from "react";

const PropertyDetailsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Question Box Section */}
      <section className="bg-blue-50 p-5 rounded-lg mb-8">
        <h2 className="flex justify-between items-center text-lg font-semibold mb-2">
          Have a question?
          <span className="bg-black text-white text-xs px-2 py-1 rounded">Beta</span>
        </h2>
        <p className="text-gray-600 mb-4">
          Get instant answers with AI-powered search of property information and reviews.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask a question"
            className="w-full border rounded-full py-2 pl-10 pr-10 text-sm"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-300 p-2 rounded-full">
            🔍
          </button>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="mb-8 flex gap-36">
        <h2 className="text-lg font-semibold mb-4">House Rules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Check in after 3:00 PM</p>
              <p className="text-gray-600 text-sm">Check out before 11:00 AM</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-sm">Children</p>
              <p className="text-gray-600 text-sm">Children allowed: ages 0-17</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Pets</p>
              <p className="text-gray-600 text-sm">No pets allowed</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Minimum age to rent: 25</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-sm">Events</p>
              <p className="text-gray-600 text-sm">No events allowed</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Smoking</p>
              <p className="text-gray-600 text-sm">Smoking is not permitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Section */}
      <section className="flex gap-6">
        <div>
        <h2 className="text-lg font-semibold mb-4">Damage and incidentals</h2>
        </div>
        <div>
        <p className="text-gray-600 text-sm">
          You will be responsible for any damage to the rental property caused by you or your party during your stay.
        </p>
        </div>

      </section>
    </div>
  );
};

export default PropertyDetailsPage;
