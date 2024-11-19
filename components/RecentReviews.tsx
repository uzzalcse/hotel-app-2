import React from 'react';

const RecentReviews: React.FC = () => {
  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto p-6">
      {/* Recent Reviews Heading */}
      <div className=" mb-6">
        <h5 className="text-xl font-semibold text-gray-800">Recent reviews</h5>
      </div>

      {/* Reviews Section */}
      <section className="mb-10 overflow-hidden">
        <div className="flex md:flex-row gap-2">
          {/* Rating Review */}
          <div className="flex flex-col gap-4 border p-4 rounded-lg bg-white shadow-md h-[250px]">
            <div className="text-3xl font-bold text-teal-700">9.8/10</div>
            <div className="text-lg text-gray-800 font-semibold">Exceptional</div>
            <div className="text-sm text-gray-600 mb-4">24 reviews &#128712;</div>
            <p className="text-sm text-gray-600">Reviews are verified unless labelled otherwise.</p>
          </div>

          {/* Individual Reviews */}
          <div className="flex-1 flex gap-6">
            {/* Review 1 */}
            <div className="p-4 border border-gray-200 rounded-lg mb-4 h-[250px] w-[340px]">
              <h4 className="text-lg font-semibold text-gray-800">10/10 Excellent</h4>
              <p className="text-sm text-gray-600 mt-2">
                A very cozy home for the two of us in a quiet area. Beautiful water view. We really needed up to 4 and wished the...
              </p>
              <div className="mt-2">
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more</a>
              </div>
              <div className="flex justify-between items-end mt-6">
                <span className="font-semibold text-gray-800">Kyle G.</span>
                <span className="text-sm text-gray-600">Sep 25, 2024</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-4 border border-gray-200 rounded-lg h-[250px] w-[340px]">
              <h4 className="text-lg font-semibold text-gray-800">10/10 Excellent</h4>
              <p className="text-sm text-gray-600 mt-2">
                This cottage was just as the pictures and description stated. Nice quiet area and great view of the cove...
              </p>
              <div className="mt-2">
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more</a>
              </div>
              <div className="flex justify-between items-end mt-6">
                <span className="font-semibold text-gray-800">Cindy R.</span>
                <span className="text-sm text-gray-600">Sep 23, 2024</span>
              </div>
            </div>

          </div>


        </div>

        {/* See All Reviews Button */}

      </section>
      <div className="mt-6 ml-[300px]">
          <a
            href="#"
            className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
          >
            See all 24 reviews →
          </a>
        </div>
    </div>
  );
};

export default RecentReviews;
