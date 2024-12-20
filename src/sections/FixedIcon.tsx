'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SparkleIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg"
import { FaLinkedin } from 'react-icons/fa';
export const FixedChatIcon = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  // Disable body scroll when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Blur background when modal opens */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9998] bg-black bg-opacity-50 backdrop-blur-sm">
          {/* Modal */}
          <div
            className={`fixed bottom-16 right-6 z-[9999] flex items-center justify-center bg-transparent`}
            onClick={() => closeModal()}
          >
            <div
              className="bg-gray-800 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden transition-all transform duration-500 ease-out scale-95 opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
              </button>
              <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                    zIndex: -1, // Ensure background image is below the content
                  }}
                ></div>

              {/* Modal Content with scroll */}
              <div className="text-white overflow-y-auto max-h-[400px]">
                <h2 className="text-xl font-semibold mb-4">Let&apos;s Make Magic Happen!</h2>
                <p className="text-sm text-gray-300">
                Whether you have a groundbreaking idea or just want to chat, I&apos;m all ears! Reach out, and let&apos;s explore new possibilities together.                
                </p>
                <a
  href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b"
  className="flex items-center text-emerald-500 mt-4"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="mr-2">Join Me</span>
  <FaLinkedin className="text-2xl text-white transition" />
</a>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Icon */}
      <a
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true); // Open the modal when clicked
        }}
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
      >
        <SparkleIcon className="w-10 h-10" />
      </a>
    </div>
  );
};
