import React from "react";

const BookingPolicies: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Cancellation Section */}
      <section className="mb-10 flex gap-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cancellation</h2>
        <div className="space-y-6">
          {/* Timeline */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="relative py-4">
              <div className="h-[2px] bg-gray-300 mx-10 relative">
                <div className="flex justify-between absolute w-full -top-2">
                  <span className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full"></span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-3 mx-5">
                <span>Today</span>
                <span>Nov 4</span>
                <span>Check-in</span>
              </div>
            </div>
          </div>
          {/* Refund Terms */}
          <div className="space-y-6">
            <div className="flex items-start space-x-10">
              <h4 className="text-sm font-semibold text-gray-700">Before Nov 4</h4>
              <p className="text-sm text-gray-600">
                Full refund: Cancel your reservation before Nov 4 at 11:59 PM, and you&apos;ll get a full refund. Times are
                based on the property&apos;s local time.
              </p>
            </div>
            <div className="flex items-start space-x-10">
              <h4 className="text-sm font-semibold text-gray-700">After Nov 4</h4>
              <p className="text-sm text-gray-600">No refund: After that, you won&apos;t get a refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="flex">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Important information</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">You need to know</h4>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Extra person charges may apply and vary depending on property policy.
            </p>
            <p className="text-sm text-gray-600">
              Government-issued photo identification and a credit card, debit card, or cash deposit may be required at
              check-in for incidental charges.
            </p>
            <p className="text-sm text-gray-600">
              Special requests are subject to availability upon check-in and may incur additional charges; special
              requests cannot be guaranteed.
            </p>
            <p className="text-sm text-gray-600">Onsite parties or group events are strictly prohibited.</p>
            <p className="text-sm text-gray-600">Host has indicated there is a carbon monoxide detector on the property.</p>
            <p className="text-sm text-gray-600">Host has indicated there is a smoke detector on the property.</p>
            <p className="text-sm text-gray-600">
              Safety features at this property include a fire extinguisher and a first aid kit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPolicies;
