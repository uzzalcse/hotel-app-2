

// using next js image tag


// "use client";

// import React, { useState } from "react";
// import Image from "next/image"; // Import Next.js Image component

// // Accept images as props
// type ImageGalleryProps = {
//   images: string[];
// };

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openModal = (index: number) => {
//     setCurrentIndex(index);
//     setModalOpen(true);
//   };

//   const closeModal = () => setModalOpen(false);

//   const changeImage = (step: number) => {
//     const newIndex = (currentIndex + step + images.length) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   const openMoreImagesModal = () => {
//     openModal(5); // Open modal at index 5 and show all images
//   };

//   const isFirstImage = currentIndex === 0;
//   const isLastImage = currentIndex === images.length - 1;

//   return (
//     <div>
//       {/* Image Gallery */}
//       <div className="grid grid-cols-3 grid-rows-[250px_250px] gap-1 max-w-5xl mx-auto p-4 relative">
//         <div className="row-span-2">
//           <Image
//             src={`http://localhost:3001${images[0]}`}
//             alt="Main view"
//             width={500} // You can adjust the width and height as needed
//             height={500}
//             className="w-full h-full object-cover cursor-pointer"
//             onClick={() => openModal(0)}
//           />
//         </div>
//         {images.slice(1, 5).map((image, index) => (
//           <div className="relative" key={index}>
//             <Image
//               src={`http://localhost:3001${image}`}
//               alt={`View ${index + 1}`}
//               width={500} // Adjust width and height
//               height={500}
//               className="w-full h-full object-cover cursor-pointer"
//               onClick={() => openModal(index + 1)}
//             />
//           </div>
//         ))}

//         {/* Show more button */}
//         {images.length > 5 && (
//           <div
//             className="absolute bottom-3 right-3 bg-gray-800 bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2 cursor-pointer"
//             onClick={openMoreImagesModal}
//           >
//             {images.length - 5}+ More
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-gray-900 p-6 rounded-lg relative w-[80vw] max-w-[800px] h-[80vh] max-h-[600px]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button - Top-left corner */}
//             <button
//               className="absolute top-2 left-2 text-white text-2xl"
//               onClick={closeModal}
//             >
//               ×
//             </button>

//             {/* Image Section */}
//             <div className="relative w-full h-full flex items-center justify-center">
//               <Image
//                 src={`http://localhost:3001${images[currentIndex]}`}
//                 alt={`Gallery image ${currentIndex + 1}`}
//                 width={800} // Adjust width and height
//                 height={600}
//                 className="object-contain max-w-full max-h-[80%] rounded"
//               />
//             </div>

//             {/* Bottom Section */}
//             <div className="absolute bottom-4 w-full flex items-center justify-center">
//               {/* Image Title */}
//               <div className="text-white text-lg absolute left-6 bottom-4">
//                 {images[currentIndex]
//                   .split("/").pop() // Get the filename
//                   ?.split("-")[1] // Get the part after the first dash
//                   ?.replace(/\.[^/.]+$/, "")} {/* Remove file extension */}
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex items-center gap-6">
//                 <button
//                   className={`bg-white bg-opacity-20 text-white text-lg px-4 py-2 rounded-full ${
//                     isFirstImage ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   onClick={() => changeImage(-1)}
//                   disabled={isFirstImage}
//                 >
//                   ❮
//                 </button>
//                 <button
//                   className={`bg-white bg-opacity-20 text-white text-lg px-4 py-2 rounded-full ${
//                     isLastImage ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   onClick={() => changeImage(1)}
//                   disabled={isLastImage}
//                 >
//                   ❯
//                 </button>
//               </div>

//               {/* Image Count */}
//               <div className="absolute bottom-4 right-6 text-white text-lg">
//                 {currentIndex + 1} / {images.length}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;



"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

// Accept images as props
type ImageGalleryProps = {
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const changeImage = (step: number) => {
    const newIndex = (currentIndex + step + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const openMoreImagesModal = () => {
    openModal(5); // Open modal at index 5 and show all images
  };

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  // If images are empty, return fallback UI
  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center p-4">
        <p>No images available for this hotel.</p>
        {/* You can add other necessary components like hotel information here */}
      </div>
    );
  }

  return (
    <div>
      {/* Image Gallery */}
      <div className="grid grid-cols-3 grid-rows-[250px_250px] gap-1 max-w-5xl mx-auto p-4 pt-0 relative">
        <div className="row-span-2">
          <Image
            src={`http://localhost:3001${images[0]}`}
            alt="Main view"
            width={500} // You can adjust the width and height as needed
            height={500}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openModal(0)}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div className="relative" key={index}>
            <Image
              src={`http://localhost:3001${image}`}
              alt={`View ${index + 1}`}
              width={500} // Adjust width and height
              height={500}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(index + 1)}
            />
          </div>
        ))}

        {/* Show more button */}
        {images.length > 5 && (
          <div
            className="absolute bottom-3 right-3 bg-gray-800 bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2 cursor-pointer"
            onClick={openMoreImagesModal}
          >
            {images.length - 5}+ More
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg relative w-[80vw] max-w-[800px] h-[80vh] max-h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top-left corner */}
            <button
              className="absolute top-2 left-2 text-white text-2xl"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Image Section */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={`http://localhost:3001${images[currentIndex]}`}
                alt={`Gallery image ${currentIndex + 1}`}
                width={800} // Adjust width and height
                height={600}
                className="object-contain max-w-full max-h-[80%] rounded"
              />
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-4 w-full flex items-center justify-center">
              {/* Image Title */}
              <div className="text-white text-lg absolute left-6 bottom-4">
                {images[currentIndex]
                  .split("/").pop() // Get the filename
                  ?.split("-")[1] // Get the part after the first dash
                  ?.replace(/\.[^/.]+$/, "")} {/* Remove file extension */}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-6">
                <button
                  className={`bg-white bg-opacity-20 text-white text-lg px-4 py-2 rounded-full ${
                    isFirstImage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => changeImage(-1)}
                  disabled={isFirstImage}
                >
                  ❮
                </button>
                <button
                  className={`bg-white bg-opacity-20 text-white text-lg px-4 py-2 rounded-full ${
                    isLastImage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => changeImage(1)}
                  disabled={isLastImage}
                >
                  ❯
                </button>
              </div>

              {/* Image Count */}
              <div className="absolute bottom-4 right-6 text-white text-lg">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
