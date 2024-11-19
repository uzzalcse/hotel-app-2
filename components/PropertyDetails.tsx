// // components/PropertyDetails.tsx
// 'use client'
// import React, { useState } from 'react';

// interface Review {
//   rating: string;
//   comment: string;
//   author: string;
//   date: string;
//   hasReadMore?: boolean;
// }

// const PropertyDetails: React.FC = () => {
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const reviews: Review[] = [
//     {
//       rating: "10/10",
//       comment: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
//       author: "Kyle G.",
//       date: "Sep 25, 2024",
//       hasReadMore: true
//     },
//     {
//       rating: "10/10",
//       comment: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
//       author: "Cindy B.",
//       date: "Sep 23, 2024",
//       hasReadMore: true
//     }
//   ];

//   const importantInfo = [
//     "Extra-person charges may apply and vary depending on property policy",
//     "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
//     "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
//     "Onsite parties or group events are strictly prohibited",
//     "Host has indicated there is a carbon monoxide detector on the property",
//     "Host has indicated there is a smoke detector on the property",
//     "Safety features at this property include a fire extinguisher and a first aid kit"
//   ];

//   const faqs = [
//     "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
//     "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
//     "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
//     "Where is Juneau Vacation Home: Stunning View + Beach Access located?"
//   ];

//   return (
//     <div className="max-w-[1000px] mx-auto p-6">
//       {/* Important Information Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Important information</h2>
//         <div>
//           <h3 className="text-base font-medium text-gray-900 mb-3">You need to know</h3>
//           <ul className="space-y-3 text-sm text-gray-600">
//             {importantInfo.map((info, index) => (
//               <li key={index}>{info}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
//         <div className="border-t border-gray-200">
//           {faqs.map((faq, index) => (
//             <div 
//               key={index}
//               className="border-b border-gray-200 py-4"
//             >
//               <button
//                 className="w-full flex justify-between items-center text-left"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="text-sm text-gray-700">{faq}</span>
//                 <span className="text-gray-400 text-sm">▼</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div>
//         <div className="flex items-baseline gap-4 mb-6">
//           <div className="text-4xl font-bold text-green-700">9.8/10</div>
//           <div>
//             <div className="text-xl font-semibold">Exceptional</div>
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <span>24 reviews</span>
//               <span className="text-gray-400 cursor-help" title="Information">ⓘ</span>
//             </div>
//             <div className="text-xs text-gray-500">Reviews are verified unless labeled otherwise</div>
//           </div>
//         </div>

//         <div className="text-lg font-medium mb-4">Recent reviews</div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           {reviews.map((review, index) => (
//             <div key={index} className="border border-gray-200 rounded-lg p-4">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="font-bold">{review.rating}</span>
//                 <span>Excellent</span>
//               </div>
//               <p className="text-sm mb-2">{review.comment}</p>
//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-gray-600">{review.author}</div>
//                 <div className="text-sm text-gray-500">{review.date}</div>
//               </div>
//               {review.hasReadMore && (
//                 <button className="text-blue-600 text-sm mt-2 hover:underline">
//                   Read more
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         <button className="group flex items-center text-blue-600 text-sm hover:underline">
//           <span>See all 24 reviews</span>
//           <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;


// code 2

'use client'
import React, { useState } from 'react';

interface Review {
  rating: string;
  comment: string;
  author: string;
  date: string;
  hasReadMore?: boolean;
}

const PropertyDetails: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      rating: "10/10",
      comment: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
      author: "Kyle G.",
      date: "Sep 25, 2024",
      hasReadMore: true
    },
    {
      rating: "10/10",
      comment: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
      author: "Cindy B.",
      date: "Sep 23, 2024",
      hasReadMore: true
    }
  ];

  const importantInfo = [
    "Extra-person charges may apply and vary depending on property policy",
    "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
    "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
    "Onsite parties or group events are strictly prohibited",
    "Host has indicated there is a carbon monoxide detector on the property",
    "Host has indicated there is a smoke detector on the property",
    "Safety features at this property include a fire extinguisher and a first aid kit"
  ];

  const faqs = [
    "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
    "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
    "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
    "Where is Juneau Vacation Home: Stunning View + Beach Access located?"
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-6">
      {/* Important Information Section with Side by Side Layout */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Important information</h2>
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Heading aligned to the right side */}
          <div className="w-full md:w-1/4">
            <h3 className="text-base font-bold text-gray-900 mb-3 text-right">You need to know</h3>
          </div>
          
          {/* Information List aligned to the left side */}
          <div className="w-full md:w-3/4">
            <ul className="space-y-3 text-sm text-gray-600">
              {importantInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 py-4"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="text-sm text-gray-700">{faq}</span>
                <span className="text-gray-400 text-sm">▼</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <div className="flex items-baseline gap-4 mb-6">
          <div className="text-4xl font-bold text-green-700">9.8/10</div>
          <div>
            <div className="text-xl font-semibold">Exceptional</div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>24 reviews</span>
              <span className="text-gray-400 cursor-help" title="Information">ⓘ</span>
            </div>
            <div className="text-xs text-gray-500">Reviews are verified unless labeled otherwise</div>
          </div>
        </div>

        <div className="text-lg font-medium mb-4">Recent reviews</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">{review.rating}</span>
                <span>Excellent</span>
              </div>
              <p className="text-sm mb-2">{review.comment}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">{review.author}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              {review.hasReadMore && (
                <button className="text-blue-600 text-sm mt-2 hover:underline">
                  Read more
                </button>
              )}
            </div>
          ))}
        </div>

        <button className="group flex items-center text-blue-600 text-sm hover:underline">
          <span>See all 24 reviews</span>
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
