
"use client"; // Add this at the top for client-side rendering

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ShareAndSave: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  useEffect(() => {
    // Check if the "liked" state is stored in localStorage
    const savedLikedState = localStorage.getItem("isLiked") === "true";
    setIsLiked(savedLikedState);
  }, []);

  const handleSaveClick = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem("isLiked", newLikedState.toString());
  };

  const handleShareClick = () => {
    setIsSharePopupOpen(true);
  };

  const handleCloseSharePopup = () => {
    setIsSharePopupOpen(false);
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href; // Get the current page URL
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy link: " + err);
      });
  };

  return (
    <div className="flex justify-between items-center py-2 px-5 max-w-5xl mx-auto">
      {/* Back Link */}
      <div>
        <a href="#" className="text-blue-600 text-sm flex items-center">
          <span className="mr-2">←</span> See all properties
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        {/* Share Button with Upload Icon */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-full bg-white hover:bg-gray-100"
          onClick={handleShareClick}
        >
          {/* Share Icon */}
          <Image
            src="/icons/share.svg"
            alt="Share"
            width={16}
            height={16}
            className="text-blue-600"
          />
          Share
        </button>

        {/* Save Button */}
        <button
          className={`flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-full bg-white hover:bg-gray-100 ${
            isLiked ? "text-red-600" : "text-black"
          }`}
          onClick={handleSaveClick}
        >
          {isLiked ? "❤️" : "♡"} Save
        </button>
      </div>

      {/* Share Popup */}
      {isSharePopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseSharePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-sm relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            {/* Close Button at top-left */}
            <button
              className="absolute top-3 left-3 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={handleCloseSharePopup}
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Share this property</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Social Media Icons */}
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
                <span className="text-sm">Twitter</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/icons/messenger.svg"
                  alt="Messenger"
                  width={24}
                  height={24}
                />
                <span className="text-sm">Messenger</span>
              </div>
            </div>
            <button
              className="block w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleCopyLink}
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareAndSave;
